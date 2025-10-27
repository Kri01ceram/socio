import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { inngest, functions } from './inngest/index.js';
import 'dotenv/config';
import connectDB from './configs/db.js';
import { serve } from 'inngest/express';


const app = express();
app.use(express.json());
app.use(cors());

// Health endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', node: process.version, uptime: process.uptime(), dbReadyState: mongoose.connection.readyState });
});

// Simple diagnostics (no secrets exposed)
let lastDbError = null;
mongoose.connection.on('error', (err) => {
  lastDbError = err?.message || String(err);
  console.error('Mongo connection error:', err);
});

app.get('/_logs', (req, res) => {
  const uri = process.env.MONGODB_URI || '';
  res.json({
    dbReadyState: mongoose.connection.readyState,
    lastDbError,
    hasMongoUri: Boolean(uri),
    mongoUriIssue: !uri ? 'missing_MONGODB_URI' : uri.includes('<') ? 'placeholder_in_MONGODB_URI' : null,
  });
});

app.get('/', (req, res) => res.send('Socio Server is running'));
app.use('/api/inngest', serve({ client: inngest, functions }));

const PORT = process.env.PORT || 4000;

async function start() {
  try {
    await connectDB();
  } catch (e) {
    console.error('Failed to connect DB on startup:', e?.message || e);
  }
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

start();

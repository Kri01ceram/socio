import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', ()=> console.log('database connected'))
    await mongoose.connect(`${process.env.MONGODB_URI}/socio`,);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/AsliLogin";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import ChatBox from "./pages/ChatBox";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/messages/:userId" element={<ChatBox />} />
    </Routes>
  );
};

export default App;

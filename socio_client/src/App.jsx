import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/AsliLogin";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Connections from "./pages/Connections";
import CreatePost from "./pages/CreatePost";
import Messages from "./pages/Messages";
import ChatBox from "./pages/ChatBox";
import {useUser,useAuth} from '@clerk/clerk-react';
import Layout from "./pages/Layout";
import {Toaster} from 'react-hot-toast';
const App = () => {
  const { user } = useUser();
  const {getToken} = useAuth();
  useEffect(()=>{
    if(user){
      getToken().then((token)=>console.log(token))
    }
  },[user])

  return (
    <>
    <Toaste />
    <Routes>
      <Route path="/" element={user ?<Layout /> : <Login />} >
      <Route index element={<Feed />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/:profileId" element={<Profile />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/connections" element={<Connections />} />
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/messages" element={<Messages />} />
      <Route path="/messages/:userId" element={<ChatBox />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;

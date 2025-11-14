import React from "react";
import { dummyConnectionsData } from "../assets/assets";
import { MessageSquare, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-default/40">Inbox</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-default">Messages</h1>
          <p className="text-default/70 text-base max-w-xl">Talk to your friends and family</p>
        </div>
        {/* Connected Users */}
        <div className="grid gap-4">
          {dummyConnectionsData.map((user) => (
            <div
              key={user._id}
              className="w-full flex flex-col sm:flex-row gap-5 p-6 card border border-white/10 hover:-translate-y-1 transition"
            >
              <img
                src={user.profile_picture}
                alt=""
                className="rounded-full size-14 border border-white/10 shadow-lg mx-auto sm:mx-0"
              />
              <div className="flex-1">
                <p className="text-lg font-semibold text-default">{user.full_name}</p>
                <p className="text-default/60 uppercase tracking-[0.4em] text-xs mt-1">@{user.username}</p>
                <p className="text-sm text-default/70 mt-3 leading-relaxed">{user.bio}</p>
              </div>
              <div className="flex sm:flex-col gap-3 mt-4 sm:mt-0">
                <button onClick={()=> navigate(`/messages/${user._id}`)}
                  className="h-11 w-11 flex items-center justify-center text-sm rounded-xl btn-secondary active:scale-95 transition cursor-pointer gap-1"
                >
                  <MessageSquare className="w-4 h-4" />
                </button>
                <button onClick={()=> navigate(`/profile/${user._id}`)}
                  className="h-11 w-11 flex items-center justify-center text-sm rounded-xl btn-secondary active:scale-95 transition cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Messages;

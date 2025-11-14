import React, { useState } from "react";
import {
  Users,
  UserPlus,
  UserCheck,
  UserRoundPen,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  dummyConnectionsData as connections,
  dummyFollowersData as followers,
  dummyFollowingData as following,
  dummyPendingConnectionsData as pendingConnections,
} from "../assets/assets";
const Connections = () => {
  const navigate = useNavigate();
  const dataArray = [
    { label: "Followers", value: followers, icon: Users },
    { label: "Following", value: following, icon: UserCheck },
    { label: "Connections", value: connections, icon: UserPlus },
    { label: "Pending", value: pendingConnections, icon: UserRoundPen },
    // {label: 'Messages', value: [], icon: MessageSquare}
  ];
  const [currentTab, setCurrentTab] = useState("Followers");
  return (
    <div className="min-h-screen bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-default/40">Network</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-default">
            Connections
          </h1>
          <p className="text-default/70 text-base max-w-xl">
            Manage your network and discover new connections
          </p>
        </div>
        {/* Counts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {dataArray.map((item, index) => (
            <div
              key={index}
              className="card h-28 flex flex-col items-center justify-center gap-2 text-center"
            >
              <p className="text-2xl font-semibold text-default">{item.value.length}</p>
              <p className="text-default/60 uppercase tracking-[0.4em] text-xs">{item.label}</p>
            </div>
          ))}
        </div>
        {/* Tabs */}
        <div className="inline-flex flex-wrap items-center card p-1 rounded-xl gap-1">
          {dataArray.map((tab) => (
            <button
              onClick={() => setCurrentTab(tab.label)}
              key={tab.label}
              className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-all ${
                currentTab === tab.label
                  ? "bg-gradient-to-r from-indigo-500/40 to-rose-400/40 text-default shadow-lg"
                  : "text-default/60 hover:text-default hover:bg-white/5"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span className="font-semibold tracking-wide">{tab.label}</span>
              {tab.count !== undefined && (
                <span className="ml-2 text-xs chip text-default/80">
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
        {/* Coinnections List */}
        <div className="grid gap-5 mt-6">
          {dataArray
            .find((item) => item.label === currentTab)
            .value.map((user) => (
              <div
                key={user._id}
                className="w-full flex flex-col sm:flex-row gap-5 p-6 card cursor-pointer hover:-translate-y-1 transition"
              >
                <img
                  src={user.profile_picture}
                  alt=""
                  className="rounded-full w-14 h-14 border border-white/10 shadow-lg mx-auto sm:mx-0"
                />
                <div className="flex-1">
                  <p className="font-semibold text-lg text-default">{user.full_name}</p>
                  <p className="text-default/60">@{user.username}</p>
                  <p className="text-sm text-default/70 mt-2 max-w-xl">
                    {user.bio.slice(0, 80)}...
                  </p>
                  <div className="flex max-sm:flex-col gap-3 mt-5">
                    {
                      <button
                        onClick={() => navigate(`/profile/${user._id}`)}
                        className="w-full py-2.5 text-sm rounded-xl btn-primary active:scale-95 transition text-app cursor-pointer"
                      >
                        View Profile
                      </button>
                    }
                    {currentTab === "Following" && (
                      <button className="w-full py-2.5 text-sm rounded-xl btn-secondary active:scale-95 transition cursor-pointer">
                        Unfollow
                      </button>
                    )}
                    {currentTab === "Pending" && (
                      <button className="w-full py-2.5 text-sm rounded-xl btn-secondary active:scale-95 transition cursor-pointer">
                        Accept
                      </button>
                    )}
                    {currentTab === "Connections" && (
                      <button onClick={() => navigate(`/messages/${user._id}`)} className='w-full py-2.5 text-sm rounded-xl btn-secondary active:scale-95 transition cursor-pointer flex items-center justify-center gap-2'>
                        <MessageSquare className="w-4 h-4" />
                        Message
                      </button>
                    )}
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Connections;

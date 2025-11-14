import React from "react";
import { useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Search } from "lucide-react";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Discover = () => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState(dummyConnectionsData);
  const [loading, setLoading] = useState(false);
  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setUsers([]);
      setLoading(true);
      setTimeout(() => {
        setUsers(dummyConnectionsData);
        setLoading(false);
      }, 1000);
    }
  };
  return (
    <div className="min-h-screen bg-app">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-default/40">Discover</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-default">
            Discover People
          </h1>
          <p className="text-default/70 text-base max-w-xl">
            Connect with amazing people and grow your network
          </p>
        </div>
        {/* Search */}
        <div className="card border border-white/10">
          <div className="p-6 sm:p-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-default/50 w-5 h-5" />
              <input
                type="text"
                placeholder="Search people by name, username, bio, or location..."
                className="pl-12 sm:pl-14 py-3 w-full rounded-xl text-default placeholder:text-default/50 bg-white/5 border border-white/10 focus:ring-2 focus:ring-indigo-500/60 focus:outline-none transition"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onKeyUp={handleSearch}
              />
            </div>
          </div>
        </div>
        {/* Users List */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {users.map((user) => (
          <UserCard key={user._id} user={user} />
        ))}
        </div>
        {
          loading && (<Loading height="60vh" />)
        }
      </div>
    </div>
  ); 
};

export default Discover;

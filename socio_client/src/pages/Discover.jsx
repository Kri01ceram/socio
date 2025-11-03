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
      <div className="max-w-6xl mx-auto p-6">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-default mb-2">
            Discover People
          </h1>
          <p className="text-muted">
            Connect with amazing people and grow your network
          </p>
        </div>
        {/* Search */}
        <div className="mb-8 card">
          <div className="p-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-default/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search people by name, username, bio, or location..."
                className="pl-10 sm:pl-12 py-2 w-full border border-subtle rounded-md max-sm:text-sm text-default placeholder:text-default/60 bg-surface"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onKeyUp={handleSearch}
              />
            </div>
          </div>
        </div>
        {/* Users List */}
        <div className="flex flex-wrap gap-6">
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

import React from 'react'
import { dummyUserData } from '../assets/assets'
import { MapPin } from 'lucide-react'
import { UserPlus } from 'lucide-react'
import { MessageCircle } from 'lucide-react'
import { Plus } from 'lucide-react'

const UserCard = ({user}) => {
const currentUser = dummyUserData
 const handleFollow = async () => {

 }
 const handleConnectionRequest = async () => {

 }
return (
  <div
    key={user._id}
    className="card relative overflow-hidden p-6 flex flex-col justify-between"
  >
    <span className="absolute inset-x-0 -top-px h-[2px] bg-gradient-to-r from-indigo-500 via-sky-400 to-rose-500"></span>
    <div className="text-center flex flex-col items-center">
      <div className="relative">
        <span className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/50 to-rose-400/40 blur"></span>
        <img
          src={user.profile_picture}
          alt=""
          className="relative rounded-full w-20 border border-white/15 shadow-xl mx-auto"
        />
      </div>
      <p className="mt-5 text-lg font-semibold text-default">{user.full_name}</p>
      {user.username && (
        <p className="text-default/60 text-sm uppercase tracking-[0.3em]">
          @{user.username}
        </p>
      )}
      {user.bio && (
        <p className="text-default/70 mt-4 text-sm text-center leading-relaxed">
          {user.bio}
        </p>
      )}
    </div>
  <div className="flex items-center justify-center gap-3 mt-6 text-xs text-default/70">
      <div className="flex items-center gap-1 chip bg-white/5 text-default/70">
        <MapPin className="w-4 h-4" /> {user.location}
      </div>
      <div className="flex items-center gap-1 chip bg-white/5 text-default/70">
        <span>{user.followers.length}</span> Followers
      </div>
    </div>
    <div className="flex mt-6 gap-3">
      {/* Follow Button */}
      <button
        onClick={handleFollow}
        disabled={currentUser?.following.includes(user._id)}
        className="w-full py-2.5 rounded-xl flex justify-center items-center gap-2 btn-primary active:scale-95 transition text-app cursor-pointer"
      >
        <UserPlus className="w-4 h-4" />{" "}
        {currentUser?.following.includes(user._id) ? "Following" : "Follow"}
      </button>
      <button
        onClick={handleConnectionRequest}
  className="flex items-center justify-center w-14 btn-secondary text-default group rounded-xl cursor-pointer active:scale-95 transition"
      >
        {currentUser?.connections.includes(user._id) ? (
          <MessageCircle className="w-5 h-5 group-hover:scale-105 transition" />
        ) : (
          <Plus className="w-5 h-5 group-hover:scale-105 transition" />
        )}
      </button>
    </div>
  </div>
);
}

export default UserCard

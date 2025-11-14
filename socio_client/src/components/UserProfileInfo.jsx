import React from 'react'
import { Verified } from 'lucide-react'
import { PenBox } from 'lucide-react'
import { MapPin, Calendar } from 'lucide-react'
import moment from 'moment'


const UserProfileInfo = ({user, posts, profileId, setShowEdit}) => {
return (
  <div className="relative py-6 px-6 md:px-10 bg-transparent">
    <div className="flex flex-col md:flex-row items-start gap-6">
  <div className="w-32 h-32 border-4 border-white/20 shadow-2xl absolute -top-16 left-6 md:left-10 rounded-full overflow-hidden">
        <img
          src={user.profile_picture}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full pt-20 md:pt-0 md:pl-40">
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-default">
                {user.full_name}
              </h1>
              <Verified className="w-6 h-6 text-accent" />
            </div>
            <p className="text-default/70 text-sm uppercase tracking-[0.4em] mt-1">
              {user.username ? `@${user.username}` : "Add a username"}
            </p>
          </div>
          {!profileId && (
            <button
              onClick={() => setShowEdit(true)}
              className="flex items-center gap-2 btn-secondary hover:opacity-95 px-5 py-2.5 rounded-xl font-semibold transition-colors"
            >
              <PenBox className="w-4 h-4" />
              Edit
            </button>
          )}
        </div>
  <p className="text-default/80 text-base leading-relaxed max-w-2xl mt-5">
    {user.bio}
  </p>
  <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-default/70 mt-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            {user.location ? user.location : "Add location"}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            Joined{" "}
            <span className="font-medium">
              {moment(user.createdAt).fromNow()}
            </span>
          </span>
        </div>
        <div
          className="flex items-center gap-8 mt-8 pt-4 border-t border-white/10"
        >
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-default">
              {posts.length}
            </span>
            <span
              className="text-xs sm:text-sm text-default/60 tracking-[0.4em] uppercase"
            >
              Posts
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-default">
              {user.followers.length}
            </span>
            <span className="text-xs sm:text-sm text-default/60 tracking-[0.4em] uppercase">
              Followers
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold text-default">
              {user.following.length}
            </span>
            <span className="text-xs sm:text-sm text-default/60 tracking-[0.4em] uppercase">
              Following
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default UserProfileInfo

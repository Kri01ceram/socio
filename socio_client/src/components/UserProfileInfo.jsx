import React from 'react'
import { Verified } from 'lucide-react'
import { PenBox } from 'lucide-react'
import { MapPin, Calendar } from 'lucide-react'
import moment from 'moment'


const UserProfileInfo = ({user, posts, profileId, setShowEdit}) => {
return (
  <div className="relative py-4 px-6 md:px-8 bg-surface">
    <div className="flex flex-col md:flex-row items-start gap-6">
  <div className="w-32 h-32 border-4 border-app shadow-lg absolute -top-16 left-6 md:left-8 rounded-full overflow-hidden">
        <img
          src={user.profile_picture}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full pt-16 md:pt-0 md:pl-36">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold text-default">
                {user.full_name}
              </h1>
              <Verified className="w-6 h-6 text-accent" />
            </div>
            <p className="text-default/80">
              {user.username ? `@${user.username}` : "Add a username"}
            </p>
          </div>
          {!profileId && (
            <button
              onClick={() => setShowEdit(true)}
              className="flex items-center gap-2 btn-secondary hover:opacity-95 px-4 py-2 rounded-lg font-medium transition-colors mt-4 md:mt-0"
            >
              <PenBox className="w-4 h-4" />
              Edit
            </button>
          )}
        </div>
  <p className="text-default/80 text-sm max-w-md mt-4">{user.bio}</p>
  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-default/70 mt-4">
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
          className="flex items-center gap-6 mt-6 pt-4"
        >
          <div>
            <span className="sm:text-xl font-bold text-default">
              {posts.length}
            </span>
            <span
              className="text-xs sm:text-sm text-default/70 ml-1.5"
            >
              Posts
            </span>
          </div>
          <div>
            <span className="sm:text-xl font-bold text-default">
              {user.followers.length}
            </span>
            <span className="text-xs sm:text-sm text-default/70 ml-1.5">
              Followers
            </span>
          </div>
          <div>
            <span className="sm:text-xl font-bold text-default">
              {user.following.length}
            </span>
            <span className="text-xs sm:text-sm text-default/70 ml-1.5">
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

import React from 'react'
import { BadgeCheck } from 'lucide-react'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2x1'>
    {/* User Info */}
      <div className='inline-flex items-center gap-3 cursor-pointer'>
        <img src={post.user.profile_picture} alt="" className='w-10 h-10 rounded-full shadow' />
        <div>
          <div className='flex item-center space-x-1'>
            <span>{post.user.full_name}</span>
            <BadgeCheck className='w-4 h-4 text-blue-400'/>
          </div>
          <div>@{post.user.username} - {post.createdAt}</div>
        </div>
      </div>
    </div>
  )
}

export default PostCard

import React from 'react'
import { BadgeCheck, Heart, MessageCircle, Share2 } from 'lucide-react'
import moment from 'moment'
import { dummyUserData } from '../assets/assets';

const PostCard = ({ post }) => {
  const content = typeof post?.content === 'string' ? post.content : '';
  const postwithhashtag = content.replace(/#(\w+)/g, '<span class="text-indigo-600 cursor-pointer">#$1</span>');
  const [likes, setLikes] = React.useState(Array.isArray(post?.likes) ? post.likes : []);
  const currentuser = dummyUserData;
  const handleLike = async () => {

  }
  return (
    <div className='bg-white rounded-xl shadow p-4 space-y-4 w-full max-w-2xl overflow-hidden'>
    {/* User Info */}
      <div className='inline-flex items-center gap-3 cursor-pointer'>
        <img src={post.user?.profile_picture} alt="" className='w-10 h-10 rounded-full shadow' />
        <div>
          <div className='flex items-center space-x-1'>
            <span>{post.user?.full_name || 'User'}</span>
            <BadgeCheck className='w-4 h-4 text-blue-400'/>
          </div>
          <div className='text-gray-500 text-sm'>@{post.user?.username || 'username'} - {moment(post.createdAt).fromNow()}</div>
        </div>
      </div>
      {/* Post Content */}
      {post.content && (
        <div
          className='text-gray-800 text-sm whitespace-pre-line break-words overflow-hidden'
          dangerouslySetInnerHTML={{ __html: postwithhashtag }}
        />
      )}
      {Array.isArray(post.image_urls) && post.image_urls.length > 0 && (
        <div className={`grid ${post.image_urls.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-2 rounded-lg overflow-hidden`}>
          {post.image_urls.map((img, index) => (
            <img
              src={img}
              key={index}
              alt=""
              className={`${post.image_urls.length === 1 ? 'w-full aspect-[3/4] sm:aspect-video' : 'w-full aspect-square'} object-cover rounded-lg`}
            />
          ))}
        </div>
      )}
      <div className='flex items-center gap-4 text-gray-600 text-sm pt-2 border-t border-gray-300'>
      {/* Actions: Like, Comment, Share */}
           <div className='flex items-center gap-1'>
            <Heart className={`h-4 w-4 cursor-pointer ${likes.includes(currentuser._id) ? 'text-indigo-600 fill-red-500' : '' }`} onClick={handleLike}/>

            <span>{likes.length}</span>
           </div>
           <div className='flex items-center gap-1'>
            <MessageCircle className='h-4 w-4 cursor-pointer'/>

            <span>{12}</span>
           </div>
           <div className='flex items-center gap-1'>
            <Share2 className='h-4 w-4 cursor-pointer'/>

            <span>{7}</span>
           </div>
      </div>
    </div>
  )
}

export default PostCard

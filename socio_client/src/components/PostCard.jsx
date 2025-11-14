import React from 'react'
import { BadgeCheck, Heart, MessageCircle, Share2 } from 'lucide-react'
import moment from 'moment'
import { dummyUserData } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const PostCard = ({ post }) => {
  const content = typeof post?.content === 'string' ? post.content : '';
  const postwithhashtag = content.replace(/#(\w+)/g, '<span class="text-accent cursor-pointer">#$1</span>');
  const [likes, setLikes] = React.useState(Array.isArray(post?.likes) ? post.likes : []);
  const currentuser = dummyUserData;
  const handleLike = async () => {
    setLikes((prev) => {
      if (!currentuser?._id) return prev;
      const hasLiked = prev.includes(currentuser._id);
      return hasLiked ? prev.filter((id) => id !== currentuser._id) : [...prev, currentuser._id];
    });
  }
  const navigate = useNavigate();
  return (
    <div className='card relative w-full overflow-hidden p-5 sm:p-7 space-y-5'>
      <div className='absolute inset-x-0 -top-[1px] h-1 bg-gradient-to-r from-indigo-500 via-indigo-400 to-rose-400'></div>
      {/* User Info */}
      <div onClick={()=> navigate(`/profile/` + post.user._id)} className='flex items-center gap-4 cursor-pointer group'>
        <div className='relative'>
          <span className='absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/60 to-rose-400/60 blur'></span>
          <img src={post.user?.profile_picture} alt="" className='relative w-11 h-11 rounded-full border border-white/20 shadow-lg' />
        </div>
        <div>
          <div className='flex items-center gap-1 text-default font-semibold tracking-tight'>
            <span>{post.user?.full_name || 'User'}</span>
            <BadgeCheck className='w-4 h-4 text-accent drop-shadow' />
          </div>
          <div className='text-default/60 text-xs sm:text-sm'>@{post.user?.username || 'username'} · {moment(post.createdAt).fromNow()}</div>
        </div>
      </div>
      {/* Post Content */}
      {post.content && (
        <div
          className='text-default/90 text-[0.95rem] leading-relaxed whitespace-pre-line break-words'
          dangerouslySetInnerHTML={{ __html: postwithhashtag }}
        />
      )}
      {Array.isArray(post.image_urls) && post.image_urls.length > 0 && (
        <div className={`grid ${post.image_urls.length === 1 ? 'grid-cols-1' : 'grid-cols-2'} gap-3 rounded-[1.1rem] overflow-hidden`}> 
          {post.image_urls.map((img, index) => (
            <img
              src={img}
              key={index}
              alt=""
              className={`${post.image_urls.length === 1 ? 'w-full aspect-[4/5] sm:aspect-video' : 'w-full aspect-square'} object-cover`}
            />
          ))}
        </div>
      )}
      <div className='flex items-center justify-between text-default/70 text-sm pt-4 border-t border-white/10'>
        <div className='flex items-center gap-6'>
          <button type='button' className='inline-flex items-center gap-2 hover:text-accent transition-colors' onClick={handleLike}>
            <span className={`flex h-9 w-9 items-center justify-center rounded-full border border-white/10 backdrop-blur-md transition ${likes.includes(currentuser._id) ? 'bg-accent/20 text-accent' : 'hover:bg-white/5'}`}>
              <Heart className={`h-4 w-4 ${likes.includes(currentuser._id) ? 'fill-accent text-accent' : ''}`} />
            </span>
            <span>{likes.length}</span>
          </button>
          <button type='button' className='inline-flex items-center gap-2 hover:text-accent transition-colors'>
            <span className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 backdrop-blur-md hover:bg-white/5 transition'>
              <MessageCircle className='h-4 w-4' />
            </span>
            <span>12</span>
          </button>
          <button type='button' className='inline-flex items-center gap-2 hover:text-accent transition-colors'>
            <span className='flex h-9 w-9 items-center justify-center rounded-full border border-white/10 backdrop-blur-md hover:bg-white/5 transition'>
              <Share2 className='h-4 w-4' />
            </span>
            <span>8</span>
          </button>
        </div>
        <div className='hidden sm:flex items-center gap-2 text-[0.75rem] text-default/50 uppercase tracking-[0.3em]'>
          <span className='h-[1px] w-8 bg-white/10'></span>
          Engage
        </div>
      </div>
    </div>
  )
}

export default PostCard

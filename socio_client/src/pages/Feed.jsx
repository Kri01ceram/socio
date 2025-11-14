import React, { useEffect } from 'react'
import { useState } from 'react'
import { assets, dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'
import StoriesBar from '../components/StoriesBar'
import PostCard from '../components/PostCard'
import RecentMessages from '../components/RecentMessages'


const Feed = () => {
  const [feeds, setFeeds] = useState([])
  const [loading, setLoading] = useState(true)
  const fetchFeeds = async () => {
    setFeeds(dummyPostsData)
    setLoading(false)
  }
  useEffect(() => {
    fetchFeeds()
  }, [])
  return (!loading) ? (
    <div className='h-full overflow-y-scroll no-scrollbar bg-app bg-fixed bg-cover bg-center'>
      <div className='mx-auto flex w-full max-w-7xl flex-col xl:flex-row xl:items-start xl:justify-center xl:gap-10 px-4 sm:px-6 lg:px-12 py-12 xl:py-16'>
        <div className='w-full xl:max-w-3xl space-y-10'>
          <div className='rounded-[1.5rem] border border-white/5 bg-[rgba(15,23,42,0.4)] backdrop-blur-xl px-4 sm:px-6 py-6 shadow-[0_38px_80px_rgba(8,11,24,0.55)]'>
            <StoriesBar />
          </div>
          <div className='space-y-8'>
            {feeds.map((post) =>
              <PostCard post={post} key={post._id}/>)}
          </div>
        </div>
        <div className='mt-12 xl:mt-0 xl:sticky xl:top-12 xl:self-start max-xl:w-full'>
          <div className='card max-w-xs xl:max-w-sm text-sm p-5 inline-flex flex-col gap-3'>
            <h3 className='text-default font-semibold uppercase tracking-[0.3em]'>Sponsored</h3>
            <div className='relative overflow-hidden rounded-2xl'>
              <img src={assets.sponsored_img} className='w-full h-48 object-cover' alt="" />
              <span className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></span>
            </div>
            <p className='text-default text-base font-semibold'>Email marketing</p>
            <p className='text-default/70 text-sm'>Supercharge your marketing with a powerful, easy to use email marketing platform.</p>
          </div>
          <RecentMessages />
        </div>
      </div>
    </div>
  ) : <Loading />
}

export default Feed


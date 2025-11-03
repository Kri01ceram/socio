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
    <div className='h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8'>
      <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl'>
        <StoriesBar />
        <div className='p-4 space-y-6'>
        {feeds.map((post) =>
        <PostCard post={post} key={post._id}/>)}
        </div>
      </div>
      <div className='max-xl:hidden sticky top-0'>
        <div className='max-w-xs card text-xs p-4 inline-flex flex-col gap-2'>
          <h3 className='text-default font-semibold'>sponsored</h3>
          <img src={assets.sponsored_img} className='w-75 h-50 rounded-md' alt="" />
          <p className='text-default/80'>Email marketing</p>
          <p className='text-default/60'>Supercharge your marketing with a powerful, easy to use email marketing platform.</p>
          </div>
          <RecentMessages />
      </div>
           
    </div>
  ) : <Loading />
}

export default Feed


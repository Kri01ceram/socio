import React, { useEffect } from 'react'
import { useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../components/Loading'


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
      <div>
        <h1>Stories here</h1>
        <div className='p-4 space-y-6'>
          List of posts
        </div>
      </div>
      <div>
        
      </div>
           
    </div>
  ) : <Loading />
}

export default Feed


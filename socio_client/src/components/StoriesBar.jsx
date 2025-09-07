import React, { useState ,useEffect } from 'react'
import { dummyStoriesData } from '../assets/assets'

const StoriesBar = () => {
    const [stories, setStories] = useState([])
    const fetchStories = async () => {
    // fetch stories from backend
    setStories(dummyStoriesData)
  }
  useEffect(() => {
    fetchStories()
  }, [])
  return (
    <div className='w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>
      <div className='flex gap-4 pb-5'>
            <div>
                
            </div>
      </div>
    </div>
  )
}

export default StoriesBar

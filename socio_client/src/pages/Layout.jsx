import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import Loading from '../components/Loading'
const Layout = () => {
  const user = dummyUserData
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return user ? (
    <div className='w-full flex h-screen bg-app text-default'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex-1'>
        <Outlet />
      </div>
      {sidebarOpen ? (
  <X className='absolute top-4 right-4 p-2 z-100 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg w-11 h-11 text-default hover:text-white transition sm:hidden' onClick={() => setSidebarOpen(false)} />
      ) : (
  <Menu className='absolute top-4 right-4 p-2 z-100 bg-white/10 backdrop-blur-xl rounded-xl shadow-lg w-11 h-11 text-default hover:text-white transition sm:hidden' onClick={() => setSidebarOpen(true)} />
      )}
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default Layout

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
    <div className='w-full flex h-screen'>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className='flex-1 bg-app'>
        <Outlet />
      </div>
      {sidebarOpen ? (
  <X className='absolute top-3 right-3 p-2 z-100 bg-surface rounded-md shadow w-10 h-10 text-default/70 sm:hidden' onClick={() => setSidebarOpen(false)} />
      ) : (
  <Menu className='absolute top-3 right-3 p-2 z-100 bg-surface rounded-md shadow w-10 h-10 text-default/70 sm:hidden' onClick={() => setSidebarOpen(true)} />
      )}
    </div>
  ) : (
    <div>
      <Loading />
    </div>
  )
}

export default Layout

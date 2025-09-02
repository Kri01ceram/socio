import React from 'react'
import { menuItemsData } from '../assets/assets'

const MenuItems = ({ setSidebarOpen }) => {
  return (
    <div className='px-6 text-gray-600 space-y-1 font-medium'>
      {
        menuItemsData.map((to, label , Icon) => (
          <div key={to} className='flex items-center space-x-2'>
            <Icon className='h-5 w-5' />
            <span>{label}</span>
          </div>
        ))
      }
    </div>
  )
}

export default MenuItems

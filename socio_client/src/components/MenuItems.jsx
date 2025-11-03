import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ setSidebarOpen }) => {
  return (
  <div className='px-6 text-default/80 space-y-1 font-medium'>
      {
        menuItemsData.map(({to, label , Icon}) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setSidebarOpen(false)} className={({isActive})=>`px-3.5 py-2 flex item-center gap-3 rounded-xl ${isActive ? 'bg-accent text-app' : 'hover:bg-muted text-default'}`}>
            <Icon className='h-5 w-5' />
            {label}
          </NavLink>
        ))
      }
    </div>
  )
}

export default MenuItems

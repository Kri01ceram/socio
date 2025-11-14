import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const MenuItems = ({ setSidebarOpen }) => {
  return (
  <div className='px-1 text-default/70 space-y-1.5 font-medium'>
      {
        menuItemsData.map(({to, label , Icon}) => (
          <NavLink key={to} to={to} end={to === '/'} onClick={() => setSidebarOpen(false)} className={({isActive})=>`px-4 py-2.5 flex items-center gap-3 rounded-xl transition-all ${isActive ? 'bg-gradient-to-r from-indigo-500/40 to-rose-400/40 text-default shadow-lg' : 'hover:bg-white/5 text-default/70 hover:text-default'}`}>
            <span className='flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-default/60 group-hover:text-default transition-colors'>
              <Icon className='h-[18px] w-[18px]' />
            </span>
            {label}
          </NavLink>
        ))
      }
    </div>
  )
}

export default MenuItems

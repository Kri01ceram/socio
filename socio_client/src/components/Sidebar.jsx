import React from "react";
import { useNavigate } from "react-router-dom";
import { dummyUserData } from "../assets/assets";
import MenuItems from "./MenuItems";
import { CirclePlus, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {UserButton,useClerk} from '@clerk/clerk-react'
import BrandLogo from './BrandLogo';
const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navigate = useNavigate();
  const user = dummyUserData;
  const {signOut} = useClerk();
  return (
    <div
      className={`w-60 xl:w-72 bg-surface shadow-sm flex flex-col justify-between items-center
max-sm:absolute top-0 bottom-0 z-20 ${
        sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all
duration-300 ease-in-out`}
    >
      <div className="w-full">
  <BrandLogo className="ml-7 my-3" />
        <div className="h-px bg-primary-20 mx-7 mb-6"></div>
        <MenuItems setSidebarOpen={setSidebarOpen} />
          <Link to='/create-post' className='flex items-center justify-center gap-2 py-2.5 mt-6 mx-6 rounded-lg btn-primary hover:opacity-95 transition text-app cursor-pointer'>
          <CirclePlus className="w-5 h-5"/>
          Create Post
        </Link>
        
      </div>
  <div className="w-full py-4 px-7 flex items-center justify-between">
       <div className="flex gap-2 items-center cursor-pointer">
        <UserButton />
        <div>
          <h1 className="text-sm font-medium">
            {user.full_name}
          </h1>
            <p className="text-xs text-default/70">@{user.username}</p>
        </div>
       </div>
        <LogOut className="w-4.5 text-default/70 hover:text-default transition cursor-pointer" onClick={signOut}/>
      </div>
    </div>
  );
};

export default Sidebar;

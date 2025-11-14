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
      className={`w-64 xl:w-72 bg-gradient-to-b from-white/5 via-white/0 to-white/5 backdrop-blur-2xl border-r border-white/10 flex flex-col justify-between
      max-sm:absolute top-0 bottom-0 z-20 px-5 py-6 ${
        sidebarOpen ? "translate-x-0" : "max-sm:-translate-x-full"
      } transition-all duration-300 ease-in-out shadow-[0_30px_60px_rgba(8,11,24,0.55)]`}
    >
      <div className="w-full space-y-8">
        <BrandLogo className="block" />
        <div className="h-px bg-white/10"></div>
        <MenuItems setSidebarOpen={setSidebarOpen} />
        <Link
          to='/create-post'
          className='flex items-center justify-center gap-2 py-3 rounded-2xl btn-primary text-sm font-semibold tracking-wide'
        >
          <CirclePlus className="w-5 h-5"/>
          Create Post
        </Link>
      </div>
      <div className="w-full mt-8 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl px-4 py-3 flex items-center justify-between">
        <div className="flex gap-3 items-center cursor-pointer">
          <UserButton />
          <div>
            <h1 className="text-sm font-semibold text-default">
              {user.full_name}
            </h1>
            <p className="text-xs text-default/60">@{user.username}</p>
          </div>
        </div>
        <LogOut className="w-5 text-default/60 hover:text-default transition cursor-pointer" onClick={signOut}/>
      </div>
    </div>
  );
};

export default Sidebar;

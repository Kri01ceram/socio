
import React from 'react';
// import logo from '../assets/logo.svg';
// import groupImg from '../assets/group_users.png';
import { assets } from '../assets/assets';
import { Star } from 'lucide-react';
import { SignIn } from '@clerk/clerk-react';    
const AsliLogin = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row bg-app text-default overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-transparent to-rose-900/40 -z-10'></div>
      <img src={assets.bgImage} alt="" className='absolute top-0 left-0 w-full h-full object-cover opacity-40 -z-20 mix-blend-screen' />
      {/* left side : Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-12 lg:pl-32 xl:pl-40 relative z-10 space-y-12'>
                <img src={assets.logo} alt="" className='h-12 object-contain drop-shadow-xl'/>
                <div className='space-y-6 max-md:mt-16'>
                  <div className='flex items-center gap-3'>
                    <img src={assets.group_users} alt="" className='h-8 md:h-10' />
                    <div>
                      <div className='flex gap-1'>
                        {Array(5).fill(0).map((_, i) => (<Star key={i} className='size-4 md:size-5 text-transparent fill-current text-rose-300 drop-shadow'/>))}
                      </div>
                      <p className='text-sm text-default/70 mt-1'>Used by 12k+ developers</p>
                    </div>
                  </div>
                  <h1 className='text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-xl'>More than just friends, truly connect</h1>
                  <p className='text-lg md:text-2xl text-default/70 max-w-md leading-relaxed'>Connect with a global community on Socio</p>
                </div>
                <span className='md:h-10'></span>
           </div>
           {/* right side : Login form */}
           <div className='flex-1 flex items-center justify-center p-6 sm:p-10 relative z-10'>
             <div className='card w-full max-w-md p-6 sm:p-10 border border-white/10'>
               <SignIn />
             </div>
           </div>
    </div>
  );
};

export default AsliLogin;

import React from 'react';
import logo from '../assets/logo.svg';
import groupImg from '../assets/group_users.png';

const AsliLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-transparent rounded-xl shadow-none">
        {/* Left Side */}
        <div className="flex flex-col justify-center gap-8 p-8">
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="socio logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-purple-700">socio</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <img src={groupImg} alt="group" className="h-8 w-8 rounded-full" />
            <span className="text-yellow-500 text-lg font-semibold">★★★★★</span>
            <span className="text-gray-600 text-sm">Used by 12k+ developers</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-800 leading-tight mb-2">More than just friends<br />truly connect</h1>
          <p className="text-lg text-gray-700 mb-4">connect with global community on socio.</p>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold text-center text-gray-800 mb-2">Sign in to</h2>
            <p className="text-center text-gray-500 mb-4">Welcome back! Please sign in to continue</p>
            <form className="flex flex-col gap-4">
              <label className="text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <label className="text-sm font-medium text-gray-700">Password here</label>
              <input
                type="password"
                placeholder="Password here"
                className="px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                className="bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
              >
                Continue &rarr;
              </button>
            </form>
            <div className="text-center text-sm text-gray-500 mt-4">
              Don't have an account? <a href="/register" className="text-purple-600 hover:underline font-semibold">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsliLogin;
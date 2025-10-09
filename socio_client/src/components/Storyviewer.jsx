import React, { useEffect } from "react";
import { X, BadgeCheck } from "lucide-react";
import { useState } from "react";

const Storyviewer = ({ viewStory, setViewStory }) => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!viewStory) return;

    let timer,interval;
    if( viewStory && viewStory.media_type !== "video"){
      setProgress(0);
      const duration = 5000; // 5 seconds
      const setTime = 100;
      let elapsed = 0;
      interval = setInterval(() => {
        elapsed += setTime;
        setProgress((elapsed / duration) * 100);  
      }, setTime);
      timer = setTimeout(() => {
        setViewStory(null);
      }, duration);
      
    }
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      setProgress(0);
    };
  }, [viewStory,setViewStory]);
  if (!viewStory) return null;

  const handleClose = () => {
    setViewStory(null);
  };
  const rendercontent = () => {
    switch (viewStory.media_type) {
      case "text":
        return (
          <div className="max-w-full max-h-full p-8 text-white text-2xl sm:text-4xl font-medium flex items-center justify-center text-center">
            {viewStory.content}
          </div>
        );

      case "image":
        return (
          <img
            src={viewStory.media_url}
            alt=""
            className="max-w-full max-h-full object-contain"
          />
        );

      case "video":
        return (
          <video
            src={viewStory.media_url}
            className="max-w-full max-h-full object-contain"
            onEnded={()=> setViewStory(null)}
            autoPlay
            controls
          />
        );

      default:
        return null;
    }
  }

  return (
    <div
      className="fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center"
      style={{
        backgroundColor:
          viewStory.media_type === "text"
            ? viewStory.background_color
            : "#000000",
      }}
    >
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gray-700">
        <div
          className="h-full bg-white transition-all duration-100 linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* User Info Top Left */}
      <div className="absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur rounded bg-black/50">
        <img
          src={viewStory.user?.profile_picture}
          alt=""
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover border border-white"
        />
        <div className="text-white font-medium flex items-center gap-1.5">
          <span>{viewStory.user?.full_name}</span>
          <BadgeCheck size={18} />
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-3xl font-bold focus:outline-none"
      >
        <X className="w-8 h-8 hover:scale-110 transition cursor-pointer" />
      </button>
      <div className="flex items-center justify-center max-h-[90vh] max-w-[90vw]">
        {rendercontent()}
      </div>
    </div>
  );
};

export default Storyviewer;

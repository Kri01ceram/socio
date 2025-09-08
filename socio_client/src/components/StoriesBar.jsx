import React, { useState, useEffect } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";

// import { Plus } from "../assets/icons";
const StoriesBar = () => {
  const [stories, setStories] = useState([]);
  const fetchStories = async () => {
    // fetch stories from backend
    setStories(dummyStoriesData);
  };
  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <div className="w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4">
      <div className="flex gap-4 pb-5">
        <div className="rounded-1g shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-1g transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white">
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">Create Story</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoriesBar;

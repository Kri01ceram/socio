import React, { useState, useEffect } from "react";
import { dummyStoriesData } from "../assets/assets";
import { Plus } from "lucide-react";
import moment from "moment";
import StorieModel from "./StorieModel";
import Storyviewer from "./Storyviewer";

// import { Plus } from "../assets/icons";
const StoriesBar = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  // currently selected story for viewing
  const [viewStory, setViewStory] = useState(null);
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
        <div onClick={() => setShowModal(true)} className="rounded-1g shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-1g transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white">
          <div className="h-full flex flex-col items-center justify-center p-4">
            <div className="size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3">
              <Plus className="h-5 w-5 text-white" />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">
              Create Stories
            </p>
          </div>
        </div>
        {stories.map((story, index) => (
          <div onClick={() => setViewStory(story)}
            key={index}
            className={`relative rounded-1g shadow min-w-30 max-w-30 max-h-40 cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover: to-purple-800 active:scale-95`}
          >
            <img
              src={story.user.profile_picture}
              alt=""
              className="absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow"
            />
            <p className="absolute top-18 left-3 text-white/60 text-sm truncate max-w-24">
              {story.content}
            </p>
            <p className="text-white absolute bottom-1 right-2 z-10 text-xs">
              {moment(story.createdAt).fromNow()}
            </p>
            {story.media_type !== "text" && (
              <div className="absolute inset-0 bg-black z-1 rounded-1g overflow-hidden">
                {story.media_type === "image" ? (
                  <img
                    src={story.media_url}
                    alt=""
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                  />
                ) : (
                  <video
                    src={story.media_url}
                    className="h-full w-full object-cover hover:scale-110 transition duration-500 opacity-70 hover:opacity-80"
                    autoPlay
                    loop
                    muted
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      {showModal && <StorieModel setShowModal={setShowModal} fetchStories={fetchStories} />}
      {viewStory && (
        <Storyviewer
          viewStory={viewStory}
          setViewStory={setViewStory}
        />
      )}
    </div>
  );
};

export default StoriesBar;

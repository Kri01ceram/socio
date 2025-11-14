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
    <div className="w-full no-scrollbar overflow-x-auto">
      <div className="flex gap-4 pb-6">
        <div
          onClick={() => setShowModal(true)}
          className="relative min-w-[7rem] max-w-[7rem] aspect-[3/4] cursor-pointer rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/40 via-indigo-500/20 to-transparent p-[1px] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(99,102,241,0.45)]"
        >
          <div className="h-full rounded-[1.1rem] bg-[rgba(15,23,42,0.7)] backdrop-blur-xl flex flex-col items-center justify-center gap-3">
            <div className="size-10 bg-accent/90 rounded-full flex items-center justify-center shadow-[0_12px_30px_rgba(99,102,241,0.55)]">
              <Plus className="h-5 w-5 text-app" />
            </div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-default/90">
              Create
            </p>
            <p className="text-sm font-semibold text-default/80">Story</p>
          </div>
        </div>
        {stories.map((story, index) => (
          <div
            onClick={() => setViewStory(story)}
            key={index}
            className="relative min-w-[7rem] max-w-[7rem] aspect-[3/4] cursor-pointer rounded-2xl overflow-hidden shadow-[0_22px_50px_rgba(15,23,42,0.55)] transition-all hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-white/8 via-white/2 to-transparent z-10 mix-blend-overlay"></span>
            {story.media_type === "video" ? (
              <video
                src={story.media_url}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
              />
            ) : (
              <img
                src={story.media_type === "text" ? story.user.profile_picture : story.media_url}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent z-20"></div>
            <img
              src={story.user.profile_picture}
              alt=""
              className="absolute size-9 top-3 left-3 z-30 rounded-full ring-2 ring-accent shadow-lg"
            />
            <p className="absolute bottom-3 left-3 right-3 z-30 text-xs font-semibold text-white drop-shadow-md leading-tight max-h-8 overflow-hidden">
              {story.content}
            </p>
            <p className="absolute top-3 right-3 z-30 text-[10px] font-medium text-white/80">
              {moment(story.createdAt).fromNow()}
            </p>
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

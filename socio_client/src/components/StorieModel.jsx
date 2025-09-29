import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

const StorieModel = ({setShowModal , fetchStories}) => {
  const bgcolors = [
    "#f87171",
    "#fb923c",
    "#fbbf24",
    "#34d399",
    "#60a5fa",
    "#a78bfa",
    "#f472b6",
  ];
  const [mode, setMode] = useState("text");
  const [background, setBackground] = useState(bgcolors[0]);
  const [text, setText] = useState("");
  const [media, setMedia] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const handleMediaUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setMedia(file);

      setPreviewUrl(URL.createObjectURL(file));
    }
  };
  const handleCreateStory = async () => {
    // Handle story creation logic here
  };

  return (
    <div className="fixed inset-0 z-110 min-h-screen bg-black/80 backdrop-blur text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-4 flex items-center justify-between">
          <button onClick={() => setShowModal(false)} className="text-white p-2 cursor-pointer">
            <ArrowLeft />I
          </button>
          <h2 className="text-lg font-semibold">Create stories</h2>
          <span className="w-10"></span>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default StorieModel;

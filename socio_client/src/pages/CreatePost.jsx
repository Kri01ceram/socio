import React from 'react'
import { useState } from 'react'
import { dummyUserData } from '../assets/assets'
import { X } from 'lucide-react'
import { Image } from 'lucide-react'
import toast from 'react-hot-toast'

const CreatePost = () => {
  const [content, setContent] = useState('')
const [images, setImages] = useState([])
const [loading, setLoading] = useState(false)
const user = dummyUserData;
const handleSubmit = async () => {
  try{
    setLoading(true)
    // TODO: submit post
  } finally {
    setLoading(false)
  }
}
  return (
  <div className="min-h-screen bg-app">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-12 space-y-10">
        {/* Title */}
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.6em] text-default/40">Create</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-default">
            Create Post
          </h1>
          <p className="text-default/70 text-base max-w-xl">Share your thoughts with the world</p>
        </div>
        {/* Form */}
  <div className="max-w-2xl card p-6 sm:p-10 space-y-6 border border-white/10">
          {/* Header */}
          <div className="flex items-center gap-4">
            <img
              src={user.profile_picture}
              alt=""
              className="w-14 h-14 rounded-full border border-white/15 shadow-lg"
            />
            <div>
              <h2 className="text-lg font-semibold text-default">{user.full_name}</h2>
              <p className="text-sm text-default/60 uppercase tracking-[0.4em]">@{user.username}</p>
            </div>
          </div>
          {/* Text Area */}
          <textarea
            className="w-full resize-none min-h-28 mt-6 text-base text-default bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none placeholder:text-default/40 focus:ring-2 focus:ring-indigo-500/60"
            placeholder="What's happening?"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
          {/* Images */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
              {images.map((image, i) => (
                <div key={i} className="relative group">
                  <img
                    src={URL.createObjectURL(image)}
                    className="h-24 w-full object-cover rounded-xl"
                    alt=""
                  />
                  <div
                    onClick={() =>
                      setImages(images.filter((_, index) => index !== i))
                    }
                    className="absolute hidden group-hover:flex justify-center items-center inset-0 bg-primary-50 rounded-xl cursor-pointer"
                  >
                    <X className="w-6 h-6 text-app" />
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between pt-6 border-t border-white/10">
            <label
              htmlFor="images"
              className="flex items-center gap-3 text-sm text-default/70 hover:text-default transition cursor-pointer"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                <Image className="w-5 h-5" />
              </span>
              <span>Add images</span>
            </label>
            <input
              type="file"
              id="images"
              accept="image/*"
              hidden
              multiple
              onChange={(e) => setImages([...images, ...e.target.files])}
            />
            <button
              disabled={loading}
              onClick={() =>
                toast.promise(handleSubmit(), {
                  loading: "uploading...",
                  success: <p>Post Added </p>,
                  error: <p>Post Not Added</p>,
                })
              }
              className="text-sm btn-primary hover:opacity-95 active:scale-95 transition text-app font-semibold px-10 py-3 rounded-2xl cursor-pointer"
            >
              Publish Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost

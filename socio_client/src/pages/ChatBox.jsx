import React from 'react'
import { useEffect } from 'react'
import { useState, useRef } from 'react'
import { dummyMessagesData, dummyUserData } from '../assets/assets'
import { ImageIcon } from 'lucide-react'
import { SendHorizontal } from 'lucide-react'
const ChatBox = () => {
  const messages = dummyMessagesData
  const [text, setText] = useState('')
  const [image, setImage] = useState(null)
  const [user] = useState(dummyUserData)
  const messagesEndRef = useRef(null)

 const sendMessage = async () => {

}
 useEffect(()=>{

messagesEndRef.current?.scrollIntoView({behavior: "smooth" })
 }, [messages])
  return (
    user && (
      <div className="flex flex-col h-screen bg-app">
  <div className="flex items-center gap-3 px-4 sm:px-8 py-4 bg-primary-50 backdrop-blur-xl border-b border-white/10">
          <img
            src={user.profile_picture}
            alt=""
            className="size-10 rounded-full border border-white/10"
          />
          <div>
            <p className="font-semibold text-default">{user.full_name}</p>
            <p className="text-xs text-default/60 uppercase tracking-[0.4em]">@{user.username}</p>
          </div>
        </div>
        <div className="p-4 sm:px-8 h-full overflow-y-scroll">
          <div className="space-y-5 max-w-3xl mx-auto">
            {messages
              .toSorted((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
              .map((message, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    message.to_user_id !== user._id
                      ? "items-start"
                      : "items-end"
                  }`}
                >
                  <div
                    className={`px-4 py-3 text-sm max-w-sm rounded-2xl shadow-[0_20px_40px_rgba(8,11,24,0.45)] backdrop-blur-md ${
                      message.to_user_id !== user._id
                        ? "bg-white/10 text-default/90"
                        : "bg-gradient-to-r from-indigo-500/60 to-rose-400/60 text-white"
                    }`}
                  >
                    {message.message_type === "image" && (
                      <img
                        src={message.media_url}
                        className="w-full max-w-sm rounded-xl mb-2"
                        alt=""
                      />
                    )}
                    <p>{message.text}</p>
                  </div>
                </div>
              ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
        <div className="px-4 pb-6">
          <div className="flex items-center gap-3 p-2 bg-white/5 w-full max-w-2xl mx-auto border border-white/10 shadow-[0_20px_40px_rgba(8,11,24,0.45)] rounded-2xl backdrop-blur-xl">
            <input
              type="text"
              className="flex-1 outline-none text-default bg-transparent placeholder:text-default/40"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
            <label htmlFor="image">
              {image ? (
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  className="h-10 rounded-xl"
                />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-default/60 cursor-pointer">
                  <ImageIcon className="w-5 h-5" />
                </span>
              )}

              <input
                type="file"
                id="image"
                accept="image/*"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
              />
            </label>
            <button onClick={sendMessage} className='btn-primary active:scale-95 cursor-pointer text-app px-4 py-2 rounded-xl flex items-center justify-center gap-2'>
  <SendHorizontal size={18} />
</button>
          </div>
        </div>
      </div>
    )
  );
}


export default ChatBox

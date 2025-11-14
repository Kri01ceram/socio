import React, { useEffect } from "react";
import { useState } from "react";
import { dummyRecentMessagesData } from "../assets/assets";
import { Link } from "react-router-dom";
import moment from "moment";

const RecentMessages = () => {
  const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    // fetch recent messages from backend
    setMessages(dummyRecentMessagesData);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return (
  <div className="card max-w-xs xl:max-w-sm mt-6 p-5 min-h-20 text-xs text-default/80 space-y-4">
  <h3 className="font-semibold text-default text-sm uppercase tracking-[0.3em]">Recent Messages</h3>
      <div className="flex flex-col max-h-56 overflow-y-scroll no-scrollbar divide-y divide-white/5">
        {messages.map((message, index) => (
          <Link to={`/messages/${message.from_user_id._id}`}
            key={index}
            className="flex items-start gap-3 py-3 hover:bg-white/5 rounded-xl transition"
          >
            <img
              src={message.from_user_id.profile_picture}
              alt=""
              className="w-9 h-9 rounded-full border border-white/15"
            />
            <div className="w-full">
              <div className="flex justify-between items-start">
                <p className="font-semibold text-default text-sm">{message.from_user_id.full_name}</p>
                <p className="text-[10px] text-default/50">
                  {moment(message.createdAt).fromNow()}
                </p>
              </div>
              <div className="flex justify-between items-center gap-2">
                <p className="text-default/70 truncate">
                  {message.text ? message.text : "Media"}
                </p>
                {!message.seen && (
                  <p
                    className="bg-accent text-app w-4 h-4 flex items-center justify-center rounded-full text-[10px] shadow"
                  >
                    1
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentMessages;

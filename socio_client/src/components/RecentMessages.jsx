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
  <div className="card max-w-xs mt-4 p-4 min-h-20 text-xs text-default">
  <h3 className="font-semibold text-default mb-4">Recent Messages</h3>
      <div className="flex flex-col max-h-56 overflow-y-scroll no-scrollbar">
        {messages.map((message, index) => (
          <Link to={`/messages/${message.from_user_id._id}`}
            key={index}
            className="flex items-start gap-2 py-2 hover:bg-muted"
          >
            <img
              src={message.from_user_id.profile_picture}
              alt=""
              className="w-8 h-8 rounded-full"
            />
            <div className="w-full">
              <div className="flex justify-between ">
                <p className="font-medium">{message.from_user_id.full_name}</p>
                <p className="text-[10px] text-default/60">
                  {moment(message.createdAt).fromNow()}
                </p>
              </div>
              <div className="flex justify-between ">
                <p className="text-default/80">
                  {message.text ? message.text : "Media"}
                </p>
                {!message.seen && (
                  <p
                    className="bg-accent text-app w-4 h-4 flex items-center justify-center rounded-full text-[10px]"
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

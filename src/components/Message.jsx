import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import messageData from "../data/messages.json";

const Message = () => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const navigate = useNavigate();
  const handleChatClick = (id) => {
    navigate(`/chatroom/${id}`);
  }

  // Filter messages based on search query
  const filteredMessages = messageData.filter((message) =>
    message.sender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Message List */}
        <div className=" w-full p-12 flex flex-col">
          <h1 className="image-text uppercase text-5xl flex justify-center mb-9">
            Messages
          </h1>

          {/* Search Bar */}
          <div className="relative flex items-center p-2 bg-gray-100 rounded-full mb-6">
            {/* Search Icon */}
            <FaSearch className="absolute left-6 text-gray-400" />

            {/* Input Field */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search direct messages"
              className="w-full pl-14 pr-3 py-2 bg-gray-100 border-none outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          {/* Scrollable Message List */}
          <div className="overflow-y-auto h-96">
            {filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={()=>handleChatClick(message.id)}
                className="flex items-center p-4 hover:bg-gray-100 transition duration-200 cursor-pointer border-b"
              >
                {/* Profile Picture */}
                <img
                  src={require(`../assets/${message.profilePic}.png`)}
                  alt={message.sender}
                  className="w-12 h-12 rounded-full mr-4"
                />

                {/* Message Details */}
                <div className="flex-1">
                  <div className="font-bold text-gray-800">
                    {message.sender}
                  </div>
                  <div className="text-sm text-gray-500">
                    {message.messageSnippet}
                  </div>
                </div>

                {/* Time Posted */}
                <div className="text-xs text-gray-400">
                  {message.timePosted}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import messageData from "../data/messages.json";
import mediaIcon from "../assets/media.png"; // Replace with the correct media icon path

const Chatroom = () => {
  const { id } = useParams();
  const chat = messageData.find((message) => message.id === parseInt(id)); // Find the chat based on the ID.

  // Local state for the message input
  const [newMessage, setNewMessage] = useState("");
  const [media, setMedia] = useState(null);
  const [messages, setMessages] = useState(chat ? chat.messages : []);

  if (!chat) {
    return <div>User not found.</div>;
  }

  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() || media) {
      const newMsg = {
        sender: "You",
        text: newMessage.trim(),
        media: media ? URL.createObjectURL(media) : null,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMsg]);
      setNewMessage(""); // Clear the input field
      setMedia(null); // Clear the media input
    }
  };

  // Handle media upload
  const handleMediaUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
    }
  };

  // Open file input when media icon is clicked
  const handleMediaClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Chat Header */}
      <div className="flex items-center justify-between bg-gray-100 p-4 shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={require(`../assets/${chat.profilePic}.png`)}
            alt={chat.sender}
            className="w-15 h-15 rounded-full"
          />
          <h2 className="font-semibold text-2xl">{chat.sender}</h2>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex flex-col mb-4 ${
              msg.sender === "You" ? "items-end" : "items-start"
            }`}
          >
            {msg.media && (
              <img
                src={msg.media}
                alt="Uploaded media"
                className="max-w-[70%] rounded-lg mb-2 shadow-md"
              />
            )}
            <div
              className={`max-w-[70%] p-3 rounded-lg shadow-md ${
                msg.sender === "You" ? "bg-blue-400 text-white" : "bg-gray-100"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
            </div>
            <span
              className={`text-xs text-gray-500 mt-1 ${
                msg.sender === "You" ? "text-right" : "text-left"
              }`}
            >
              {msg.time}
            </span>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-white p-4 shadow-md flex items-center gap-4 rounded-full border border-gray-300">
        <img
          src={mediaIcon}
          alt="Media Icon"
          className="w-6 h-6 cursor-pointer"
          onClick={handleMediaClick}
        />
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden m-8"
          onChange={handleMediaUpload}
        />
        <input
          type="text"
          placeholder="Start a new message"
          className="flex-1 text-sm border-none focus:outline-none placeholder-gray-400"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatroom;

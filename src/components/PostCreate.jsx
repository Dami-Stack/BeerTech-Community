import React, { useState, useRef, useEffect } from "react";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import profile from "./../assets/profile.png";
import BgImage from "../assets/img3.png";
import mediaIcon from "../assets/media.png";
import frnt from "../assets/frtend.png";
import bckend from "../assets/bckend.png";
import mob from "../assets/mobiledev.png";
import ui from "../assets/ui.png";
import { FaChevronDown, FaChevronUp, FaBars, FaTimes } from "react-icons/fa";

const PostCreate = ({ addNewPost }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCommunity, setSelectedCommunity] = useState("Everyone");
  const [postText, setPostText] = useState("");
  const [mediaPreview, setMediaPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false); // For mobile sidebar

  const dropdownRef = useRef(null); // Ref for outside click detection

  const communities = [
    { name: "Front-end", profile: frnt, id: 1 },
    { name: "Back-end", profile: bckend, id: 2 },
    { name: "Mobile Dev", profile: mob, id: 3 },
    { name: "Analysts", profile: mob, id: 4 },
    { name: "Data Science", profile: mob, id: 5 },
    { name: "AI Enthusiasts", profile: mob, id: 6 },
    { name: "UX Designers", profile: ui, id: 7 },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCommunitySelect = (communityName) => {
    setSelectedCommunity(communityName);
    setIsOpen(false);
  };

  const handleAddMedia = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setMediaPreview(previewUrl);
    }
  };

  const handleRemoveMedia = () => {
    setMediaPreview(null);
    setCaption(""); // Clear caption if media is removed
  };

  const handlePostSubmit = () => {
    const newPost = {
      id: new Date().getTime(),
      content: postText,
      user: "Femi Falana",
      profileImage: profile,
      time: new Date().toLocaleString(),
      community: selectedCommunity,
      media: mediaPreview,
      caption: caption,
    };

    addNewPost(newPost);

    setPostText("");
    setMediaPreview(null);
    setCaption("");
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen w-full bg-white">
      <Navbar />
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 bg-white p-2 rounded-full shadow"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars className="w-6 h-6" />
      </button>
      {/* Sidebar drawer for mobile */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-40"
            onClick={() => setSidebarOpen(false)}
          ></div>
          {/* Sidebar (no hidden/md:block here) */}
          <div className="relative bg-white w-64 h-full shadow-lg z-50">
            <button
              className="absolute top-4 right-4 text-gray-700"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <Sidebar />
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar (leave as is) */}
        <div className="hidden md:block md:col-span-1">
          <Sidebar />
        </div>
        {/* Main Section - always centered and responsive */}
        <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center px-4 py-6 sm:px-8 sm:py-12 w-full">
          <div className="flex items-center justify-between p-3 w-full max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <div className="flex items-center space-x-4">
              <img src={profile} alt="Profile" className="h-10" />
              <div className="rounded-full px-3 py-1 text-gray-800 border border-gray-950">
                Femi Falana
              </div>
            </div>
            {/* Dropdown for community selection */}
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center space-x-2 rounded-full border border-gray-950 px-3 py-1 hover:bg-gray-200 cursor-pointer"
                onClick={toggleDropdown}
              >
                <p className="text-gray-900">{selectedCommunity}</p>
                <div>
                  {isOpen ? (
                    <FaChevronUp className="text-gray-800" />
                  ) : (
                    <FaChevronDown className="text-gray-800" />
                  )}
                </div>
              </div>
              {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg max-h-56 overflow-y-auto z-10">
                  {communities.map((community) => (
                    <div
                      key={community.id}
                      className="flex items-center space-x-2 p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => handleCommunitySelect(community.name)}
                    >
                      <img
                        src={community.profile}
                        alt={`${community.name} profile`}
                        className="h-8 w-8 rounded-full"
                      />
                      <p className="text-gray-900 text-sm">{community.name}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Text and Media Input */}
          <div className="bg-gray-100 p-4 rounded-lg w-full max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl mb-4">
            {postText || mediaPreview ? (
              <div>
                <textarea
                  value={postText}
                  placeholder="Write something..."
                  onChange={(e) => setPostText(e.target.value)}
                  className="w-full h-24 p-3 bg-gray-100 border border-gray-300 rounded-lg mb-4"
                ></textarea>

                {mediaPreview && (
                  <div className="relative mb-4">
                    <img
                      src={mediaPreview}
                      alt="Media Preview"
                      className="w-full max-h-80 object-contain rounded-md"
                    />
                    <button
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-2"
                      onClick={handleRemoveMedia}
                    >
                      X
                    </button>
                  </div>
                )}

                {mediaPreview && (
                  <input
                    type="text"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                    placeholder="Add a caption..."
                    className="w-full p-3 bg-gray-100 border border-gray-300 rounded-lg"
                  />
                )}
              </div>
            ) : (
              <textarea
                name="userPost"
                id="userPostContent"
                placeholder="Ask BeerTech!"
                className="w-full h-32 p-3 bg-gray-100 border border-gray-300 rounded-lg"
                onChange={(e) => setPostText(e.target.value)}
              ></textarea>
            )}
          </div>

          {/* Media Options */}
          <div className="mt-4 flex justify-between items-center w-full max-w-full sm:max-w-xl lg:max-w-2xl xl:max-w-3xl">
            <label className="flex items-center text-blue-500 hover:text-blue-600 cursor-pointer">
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={handleAddMedia}
              />
              <img src={mediaIcon} alt="Add Media" className="h-6 mr-2" />
              Add Media
            </label>
            <button
              onClick={handlePostSubmit}
              className="bg-cover bg-center text-white flex justify-center items-center rounded-full cursor-pointer px-6 py-2 font-bold"
              style={{ backgroundImage: `url(${BgImage})` }}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;

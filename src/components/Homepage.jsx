import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import PostCard from "./home/Postcard";
import Right from "./home/Right";
import everyone from "../assets/everyone.png";
import { FaChevronDown, FaBars } from "react-icons/fa";

const Homepage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const onlineUsers = users.filter((user) => user.isOnline);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handlePostCreate = () => navigate("/PostCreate");

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col max-h-screen">
      <Navbar />

      {/* Hamburger menu for mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-full shadow"
        onClick={toggleSidebar}
        aria-label="Open sidebar"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Sidebar overlay for mobile only */}
      <div className="md:hidden">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main layout for desktop/tablet */}
      <div className="sm:flex flex-1 min-h-0">
        {/* Sidebar as column (visible on tablet and up) */}
        <div className="hidden md:block w-1/4 max-w-xs h-full">
          <Sidebar isSidebarOpen={true} toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center w-fit m-4">
            <img src={everyone} className="h-9" alt="everyone" />
            <button
              className="rounded-full px-2 py-1 border border-orange-400 hover:scale-95 hover:bg-gray-200"
              onClick={handlePostCreate}
            >
              Ask BeerTech
            </button>
          </div>
          <div className="overflow-y-scroll max-h-[calc(100vh-94px)] space-y-6 p-4">
            <PostCard />
            <PostCard />
            <PostCard />
          </div>
        </div>

        {/* Right Panel: only show on desktop (lg and up) */}
        <div className="hidden lg:block w-1/4 max-w-xs bg-white p-4 shadow-lg">
          <div className="relative flex ml-auto mb-6">
            <div
              ref={buttonRef}
              className="rounded-full px-2 py-1 border border-orange-400 cursor-pointer flex items-center space-x-2"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>See who's online</span>
              <FaChevronDown
                className={`transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>
            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-y-scroll max-h-60 z-10"
              >
                <ul>
                  {onlineUsers.map((user) => {
                    const userImage = require(`../assets/profile/${user.img}`);
                    return (
                      <li
                        key={user.id}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <div className="relative">
                          <img
                            src={userImage}
                            alt={user.name}
                            className="w-8 h-8 rounded-full mr-2"
                          />
                          {user.isOnline && (
                            <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full"></span>
                          )}
                        </div>
                        <span>{user.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <Right />
        </div>
      </div>
    </div>
  );
};

export default Homepage;

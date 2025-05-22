import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import frontend from "../../assets/frontend.png";
import backend from "../../assets/backend.png";
import uiux from "../../assets/uiux.png";
import mobiledev from "../../assets/mobiledev.png";
import database from "../../assets/Database.png";
import career from "../../assets/career.png";
import blog from "../../assets/blog.png";
import qa from "../../assets/qa.png";
import chatroom from "../../assets/chatroom.png";
import help from "../../assets/help.png";
import privacy from "../../assets/Privacy.png";
import policy from "../../assets/Policy Document.png";
import agree from "../../assets/Agreement.png";
import devopp from "../../assets/devops.png";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Section data for community pages
  const sections = [
    { name: "Front-end", icon: frontend, id: 1 },
    { name: "Back-end", icon: backend, id: 2 },
    { name: "UI/UX", icon: uiux, id: 3 },
    { name: "DevOps& Infrastructure", icon: devopp, id: 4 },
    { name: "Mobile Development", icon: mobiledev, id: 5 },
    { name: "Database Management", icon: database, id: 6 },
    { name: "Career Development", icon: career, id: 7 },
    { name: "Blogs", icon: blog, id: 8 },
    { name: "Q & As", icon: qa, id: 9 },
    { name: "Chatroom", icon: chatroom, id: 10 },
    { name: "Help", icon: help, id: 11 },
    { name: "Privacy Policy", icon: privacy, id: 12 },
    { name: "Content Policy", icon: policy, id: 13 },
    { name: "User Agreement", icon: agree, id: 14 },
  ];

  // Navigation handlers
  const handleHome = () => navigate("/Homepage");
  const handleExplore = () => navigate("/Explore");
  const handleNavigate = (id) => navigate(`/community/${id}`);

  // Close sidebar when clicking overlay
  const handleOverlayClick = () => setIsSidebarOpen(false);

  return (
    <>
      {/* Hamburger menu for mobile */}
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-full shadow"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <FaBars className="text-xl" />
      </button>

      {/* Overlay for mobile when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out h-full
          fixed top-0 left-0 z-50
          transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0 md:block
        `}
        style={{ minHeight: "100vh" }}
      >
        {/* Close button for mobile */}
        <button
          className="md:hidden absolute top-4 right-4 text-gray-500"
          onClick={() => setIsSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <FaTimes className="text-xl" />
        </button>

        <div className="mb-6 mt-8 md:mt-0">
          <button
            className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-lg w-full"
            onClick={handleHome}
          >
            <FaHome className="text-yellow-500" />
            <span>Home</span>
          </button>
          <button
            className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-100 rounded-lg w-full"
            onClick={handleExplore}
          >
            <FaSearch className="text-yellow-500" />
            <span>Explore</span>
          </button>
        </div>

        <hr className="border-t border-gray-400" />

        <h2 className="text-yellow-500 font-semibold mb-4 uppercase mt-4">
          Communities
        </h2>

        <div
          className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 h-full pr-2"
          style={{ maxHeight: "calc(100vh - 200px)" }}
        >
          {sections.map((section) => (
            <div key={section.id} className="mb-2 text-sm">
              <button
                className="flex items-center py-2 px-4 w-full hover:bg-gray-100 rounded-lg"
                onClick={() => handleNavigate(section.id)}
              >
                <img
                  src={section.icon}
                  alt={`${section.name} Icon`}
                  className="w-5 h-5 mr-2"
                />
                <span className="text-xs md:text-base">{section.name}</span>
              </button>
              {["Explore", "Blogs", "Chatroom"].includes(section.name) && (
                <hr className="my-4 border-t border-gray-400" />
              )}
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

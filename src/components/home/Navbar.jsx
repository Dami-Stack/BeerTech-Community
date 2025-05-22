import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import backimg from "../../assets/searchbg.png";
import Alarm from "../../assets/Alarm.png";
import user from "../../assets/profile.png";
import settings from "../../assets/Settings.png";
import chat from "../../assets/Messaging.png";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const notifyClick = () => navigate("/Notify");
  const message = () => navigate("/Message");
  const setting = () => navigate("/Settings");
  const profile = () => navigate("/Profile");

  return (
    <nav className="flex items-center justify-between bg-white border-b border-gray-200 h-16 md:h-20 px-2 md:px-8 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="w-12 md:w-20 ml-2 md:ml-4" />
      </div>

      {/* Responsive Search Bar */}
      <div className="flex-1 flex items-center justify-center mx-2">
        <div
          className="relative w-full max-w-xs sm:max-w-sm md:max-w-lg rounded-full bg-cover bg-center"
          style={{ backgroundImage: `url(${backimg})` }}
        >
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <FaSearch className="text-white" />
          </div>
          <input
            type="text"
            placeholder="Search AbInBev"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent text-white placeholder-white focus:outline-blue-500 text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Icons on the right */}
      <div className="flex items-center justify-end space-x-2 md:space-x-4 pr-1 md:pr-3">
        <img
          src={Alarm}
          className="h-5 w-5 md:h-8 md:w-8 hover:scale-90 cursor-pointer"
          onClick={notifyClick}
          alt="Notifications"
        />
        <img
          src={chat}
          className="h-5 w-5 md:h-8 md:w-8 hover:scale-90 cursor-pointer"
          onClick={message}
          alt="Messages"
        />
        <img
          src={settings}
          className="h-5 w-5 md:h-8 md:w-8 hover:scale-90 cursor-pointer"
          onClick={setting}
          alt="Settings"
        />
        <img
          src={user}
          className="h-5 w-5 md:h-8 md:w-8 hover:scale-90 cursor-pointer"
          onClick={profile}
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;

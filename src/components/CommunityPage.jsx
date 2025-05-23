import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import PostCard from "./home/Postcard";
import everyone from "../assets/everyone.png";
import BgImage from "../assets/img3.png";
import arrow from "../assets/SortArrows.png";
import andrew from "../assets/rename.png";
import gbemi from "../../src/assets/mike.png";
import maryam from "../assets/user2.png";
import tim from "../assets/ini.png";
import frontendImage from "../assets/front.png";

const CommunityPage = () => {
  const member = [
    {
      id: 1,
      name: "Andrew Lewis",
      role: "Backend Developer",
      profilePic: andrew,
    },
    { id: 2, name: "Gbemi Osho", role: "UI/UX Designer", profilePic: gbemi },
    {
      id: 3,
      name: "Maryam Aldn",
      role: "Frontend Developer",
      profilePic: maryam,
    },
  ];

  const [activeSection, setActiveSection] = useState("posts");

  const handleTabClick = (section) => {
    setActiveSection(section);
  };
  const navigate = useNavigate();
  const handlePostCreate = () => {
    navigate("/PostCreate");
  };

  const location = useLocation();
  const hasJoined = location.state?.hasJoined || false;
  const [showMessage, setShowMessage] = useState(hasJoined);

  useEffect(() => {
    if (hasJoined) {
      const timer = setTimeout(() => setShowMessage(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [hasJoined]);

  const community = [
    {
      id: 1,
      name: "Front-end Developers",
      membcount: "24 members",
      profilePic: frontendImage,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="hidden md:block md:w-1/4 bg-gray-100">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col items-center w-full">
          {/* Background Section */}
          <div
            className="w-full bg-cover bg-center mt-5"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            {/* Tabs */}
            <div className="flex justify-around p-2">
              <button
                className={`font-bold uppercase ${
                  activeSection === "posts"
                    ? "bg-gray-300 rounded-full px-2 py-1 text-gray-600 font-bold"
                    : "font-bold text-white"
                }`}
                onClick={() => handleTabClick("posts")}
              >
                Posts
              </button>
              <button
                className={`font-bold uppercase ${
                  activeSection === "people"
                    ? "bg-gray-300 rounded-full px-2 py-1 text-gray-600 font-bold"
                    : "font-bold text-white"
                }`}
                onClick={() => handleTabClick("people")}
              >
                People
              </button>
            </div>
          </div>
          <div className="relative p-4 w-full max-w-full sm:max-w-2xl">
            {showMessage && (
              <div className="absolute top-4 right-4 text-green-700 border border-gray-500 px-4 py-2 rounded-lg shadow-lg opacity-100 transition-opacity duration-1000 ease-in-out bg-white z-20">
                <p>Thank you for joining the community! 🎉</p>
                <button
                  onClick={() => setShowMessage(false)}
                  className="text-green-800 font-bold ml-4"
                >
                  X
                </button>
                <button
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() =>
                    navigate("/landing", { state: { hasJoined: false } })
                  }
                >
                  Leave Community
                </button>
              </div>
            )}
          </div>
          {activeSection === "posts" ? (
            <div className="flex items-center w-fit m-4">
              <img src={everyone} className="h-9" alt="everyone" />
              <button
                className="rounded-full px-2 py-1 border border-orange-400 hover:scale-95 hover:bg-gray-200 ml-2"
                onClick={handlePostCreate}
              >
                Ask BeerTech
              </button>
            </div>
          ) : null}

          {/* Tab Content */}
          <div className="flex-grow mt-2 px-2 w-full flex flex-col items-center">
            {activeSection === "posts" ? (
              <div className="w-full flex flex-col items-center">
                {/* Posts Section */}
                <h2 className="text-lg font-bold mb-4 image-text w-full max-w-xs sm:max-w-md md:max-w-lg">
                  Today
                </h2>
                <div className="space-y-4 w-full max-w-xs sm:max-w-md md:max-w-lg">
                  <PostCard
                    userProfile={andrew}
                    username="Stella Page"
                    timeAgo="12 mins ago"
                    content="How do you ensure your website is accessible to screen readers?"
                  />
                  <h2 className="text-lg font-bold mb-4 image-text">
                    Yesterday
                  </h2>
                  <PostCard
                    userProfile={maryam}
                    username="Stella Page"
                    timeAgo="12 mins ago"
                    content="Guys, what did you learn today?"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col items-center">
                <div className="mb-6 w-full flex flex-col items-center">
                  {community.map((community) => (
                    <div
                      className="w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
                      key={community.id}
                    >
                      <div className="flex items-center justify-around">
                        <div>
                          <img src={community.profilePic} alt="image" />
                        </div>
                        <h1 className="uppercase text-2xl sm:text-3xl image-text font-bold">
                          {community.name}
                        </h1>
                      </div>
                      <p className="flex justify-self-center text-blue-500">
                        {community.membcount}
                      </p>
                    </div>
                  ))}
                </div>

                {/*peeps*/}
                {activeSection === "people" && (
                  <div className="max-h-96 overflow-y-scroll bg-gray-50 p-4 rounded-lg shadow w-full max-w-xs sm:max-w-md md:max-w-lg">
                    {Array.from(
                      { length: 12 },
                      (_, i) => member[i % member.length]
                    ).map(({ id, name, role, profilePic }, index) => (
                      <div
                        key={`${id}-${index}`}
                        className="flex items-center justify-between p-2 mb-4 bg-white rounded-lg shadow-sm hover:shadow-md transition"
                      >
                        <div className="flex items-center">
                          <img
                            src={profilePic}
                            alt={`${name}'s profile`}
                            className="w-12 h-12 rounded-full mr-4"
                          />
                          <div>
                            <h3 className="text-sm font-semibold text-gray-900">
                              {name}
                            </h3>
                            <p className="text-xs text-gray-500">{role}</p>
                          </div>
                        </div>
                        <button className="px-4 py-2 text-sm font-semibold text-white uppercase bg-gradient-to-r from-orange-500 to-yellow-400 rounded-lg shadow hover:from-orange-600 hover:to-yellow-500 focus:ring-2 focus:ring-offset-1 focus:ring-yellow-500">
                          Message
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;

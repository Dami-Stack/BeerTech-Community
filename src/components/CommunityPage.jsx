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
    // { id: 4, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 5, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 6, name: "Tim Stewart", role: "Backend Engineer", profilePic: andrew },
    // { id: 7, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 8, name: "Tim Stewart", role: "Backend Engineer", profilePic: gbemi },
    // { id: 9, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 10, name: "Tim Stewart", role: "Backend Engineer", profilePic: maryam },
    // { id: 11, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 13, name: "Tim Stewart", role: "Backend Engineer", profilePic: andrew },
    // { id: 14, name: "Tim Stewart", role: "Backend Engineer", profilePic: gbemi },
    // { id: 15, name: "Tim Stewart", role: "Backend Engineer", profilePic: tim },
    // { id: 16, name: "Tim Stewart", role: "Backend Engineer", profilePic: gbemi },
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
            // Hide the message after 10 seconds
            const timer = setTimeout(() => setShowMessage(false), 10000);
            return () => clearTimeout(timer); // Cleanup timer on component unmount
        }
    }, [hasJoined]);

  // const [currentPage, setCurrentPage] = useState(1);

  // Define the number of members to display per page
  // const membersPerPage = 8; // 4 per column, 2 columns
  // const totalPages = Math.ceil(member.length / membersPerPage);

  // Create paginated pages
    

  // Handle flipping of pages
  // const handleArrowClick = () => {
  //   if (currentPage === totalPages) {
  //     setCurrentPage(1);
  //   } else {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // Get members for the current page
  // const getCurrentMembers = () => {
  //   const start = (currentPage - 1) * membersPerPage;
  //   const end = currentPage * membersPerPage;
  //   return member.slice(start, end);
  // };

  const community = [
    {
      id: 1,
      name: "Front-end Developers",
      membcount: "24 members",
      profilePic: frontendImage,
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        {/* Sidebar */}
        <div className="w-1/4 bg-gray-100">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-grow flex flex-col">
          {/* Background Section */}
          <div
            className=" bg-cover bg-center mt-5"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            {/* Tabs */}
            <div className="flex justify-around p-2">
              <button
                className={` font-bold uppercase ${
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
          <div className="relative p-6">
            {showMessage && (
              <div className="absolute top-4 right-4 text-green-700 border border-gray-500 h-72 px-4 py-2 rounded-lg shadow-lg opacity-100 transition-opacity duration-1000 ease-in-out">
                <p>Thank you for joining the community! 🎉</p>
                {/* Optional X Button */}
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
              <img src={everyone} className="h-9" />
              <button
                className="rounded-full px-2 py-1 border border-orange-400 hover:scale-95 hover:bg-gray-200"
                onClick={handlePostCreate}
              >
                Ask BeerTech
              </button>
            </div>
          ) : null}

          {/* Tab Content */}
          <div className="flex-grow mt-6 px-6">
            {activeSection === "posts" ? (
              <div className="max-height overflow-y-scroll ">
                {/* Posts Section */}
                <h2 className="text-lg font-bold mb-4 image-text ">Today</h2>
                <div className="space-y-4 w-2/5">
                  12
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
              <div>
                <div className="mb-6">
                  {community.map((community) => (
                    <div className=" w-3/5 mx-auto" key={community.id}>
                      <div className="flex items-center justify-around">
                        <div>
                          <img src={community.profilePic} alt="image" />
                        </div>
                        <h1 className=" uppercase text-3xl image-text font-bold">
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
                  <div className="max-h-96 overflow-y-scroll bg-gray-50 p-4 rounded-lg shadow">
                    {Array.from(
                      { length: 12 },
                      (_, i) => member[i % member.length]
                    ).map(({ id, name, role, profilePic }, index) => (
                      <div
                        key={`${id}-${index}`} // Unique key
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

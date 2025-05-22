// src/components/ComLanding.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import BgImage from "../assets/img3.png";
import communityData from "../data/communityData"; //

const ComLanding = () => {
  const { id } = useParams(); // Retrieve the community ID from the URL
  const navigate = useNavigate(); // Initialize the navigate function

  // Find the community from the communityData array
  const community = communityData.find(
    (community) => community.id === Number(id) // Convert id to a number for comparison
  );

  if (!community) {
    return (
      <div className="flex flex-col">
        <Navbar />
        <div className="flex h-screen">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="flex-grow flex items-center justify-center">
            <h1 className="text-4xl font-bold">Community Not Found</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleJoinCommunity = (id) => {
    // Navigate to the community page with the id
    navigate(`/community-page`, { state: { hasJoined: true } });
    
  };

  

  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/4">
          <Sidebar />
        </div>

        {/* Main Section */}
        <div className="m-4 p-4 flex flex-col items-center space-y-16 flex-grow">
          <h1
            className="text-5xl font-bold text-transparent bg-clip-text bg-center bg-cover uppercase"
            style={{ backgroundImage: `url(${BgImage})` }}
          >
            {community.name || "Unknown Community"}
          </h1>

          <div className="flex mt-12">
            <div className="flex flex-col space-y-4">
              {community.smallImages?.[0] && (
                <img
                  src={community.smallImages[0]}
                  alt="small image 1"
                  className="w-28 h-28"
                />
              )}
              {community.smallImages?.[2] && (
                <img
                  src={community.smallImages[2]}
                  alt="small image 2"
                  className="w-28 h-28"
                />
              )}
            </div>

            <img
              src={community.profileImage}
              alt={community.name}
              className="w-56 h-56 mx-4"
            />

            <div className="flex flex-col space-y-4">
              {community.smallImages?.[1] && (
                <img
                  src={community.smallImages[1]}
                  alt="small image 3"
                  className="w-28 h-28"
                />
              )}
              {community.smallImages?.[3] && (
                <img
                  src={community.smallImages[3]}
                  alt="small image 4"
                  className="w-28 h-28"
                />
              )}
            </div>
          </div>

          <p className="text-lg text-center leading-relaxed mx-auto w-full">
            {community.description ||
              "No description available for this community."}
          </p>

          <button
            onClick={handleJoinCommunity}
            
            className="px-4 py-2 border-2 image-border border-transparent"
          >
            <span className="image-text font-bold">JOIN COMMUNITY</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComLanding;

import React from "react";
import Navbar from "./home/Navbar";
import Sidebar from "./home/Sidebar";
import PostCard from "./home/Postcard"; // Assuming you're going to use this for posts
import abi from "../assets/logob.png"
import party from "../assets/party.png";
import event from "../assets/wevent.png";
import frontendImage from "../assets/front.png";
import backendImage from "../assets/back.png";
import ui from "../assets/ui.png";
import mobile from "../assets/mobile.png";
import user from "../assets/profile/peace.png";
import user2 from "../assets/profile/ini.png";

// Sample data for news and communities
const newsData = [
  {
    id: 1,
    news: "Flying Fish Party at Harbour Point this saturday!!",
    image: party,
  },
  {
    id: 2,
    news: "Our women wellness event held at The Garden, Ikoyi was a huge success",
    image: event,
  },
  {
    id: 3,
    news: "Flying Fish Party at Harbour Point this saturday!!",
    image: party,
  },
  {
    id: 4,
    news: "Our women wellness event held at The Garden, Ikoyi was a huge success",
    image: event,
  },
  {
    id: 5,
    news: "Flying Fish Party at Harbour Point this saturday!!",
    image: party,
  },
  {
    id: 6,
    news: "Our women wellness event held at The Garden, Ikoyi was a huge success",
    image: event,
  },
  {
    id: 7,
    news: "Flying Fish Party at Harbour Point this saturday!!",
    image: party,
  },
  {
    id: 8,
    news: "Our women wellness event held at The Garden, Ikoyi was a huge success",
    image: event,
  },
  {
    id: 9,
    news: "Flying Fish Party at Harbour Point this saturday!!",
    image: party,
  },
];

const peoplesData = [
  { id: 1, name: "Front-end Developers", profileImage: frontendImage },
  { id: 2, name: "Back-end Developers", profileImage: backendImage },
  { id: 3, name: "Mobile Developers", profileImage: mobile },
  { id: 4, name: "UI/UX Designers", profileImage: ui },
  { id: 5, name: "Back-end Developers", profileImage: frontendImage },
  { id: 6, name: "UI/UX Designers", profileImage: ui },
  { id: 7, name: "Back-end Developers", profileImage: backendImage },
  { id: 8, name: "UI/UX Designers", profileImage: ui },
  { id: 9, name: "Mobile Developers", profileImage: mobile },
  { id: 10, name: "UI/UX Designers", profileImage: ui },
];

const postsData = [
  {
    id: 1,
    text: "A new member just joined our community. Let’s welcome her!",
    profile: user,
  },
  { id: 2, text: "How are we doing today?", profile: user2 },
];

const Explore = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 m-4">
          {/* News Section */}
          <div className="mb-6">
            <div className="flex items-center">
              <img src={abi} alt="Abi logo" className="h-6" />
              <h2 className="text-2xl font-semibold mb-4">News</h2>
            </div>
            <div className="flex space-x-4 overflow-x-scroll news-width py-4">
              {newsData.map((item) => (
                <div key={item.id} className="flex-none w-60">
                  <img
                    src={item.image}
                    alt={item.news}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <p className="text-center mt-2 text-sm">{item.news}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6" />
          {/* Horizontal divider between News and Communities */}
          {/* Communities Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-500">
              Connect with People
            </h2>
            <div className="flex space-x-4 overflow-x-scroll news-width py-4">
              {peoplesData.map((community) => (
                <div key={community.id} className="flex-none w-40 text-center">
                  <img
                    src={community.profileImage}
                    alt={community.name}
                    className="w-16 h-16 object-cover rounded-full mx-auto"
                  />
                  <p className="mt-2 text-sm">{community.name}</p>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6" />
          {/* Horizontal divider between Communities and Popular Posts */}
          {/* Popular Posts Section */}

          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4 ">Popular Posts</h2>
            <div className="overflow-y-auto max-h-[340px]  ">
              <div className="w-2/5 md:w-4/5 lg:w-full">
                <PostCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Explore;
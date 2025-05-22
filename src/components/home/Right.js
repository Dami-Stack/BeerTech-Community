// RightTabs.jsx
import React from "react";

const Right = () => {
  return (
    <div className="space-y-8 max-h-[calc(100vh-104px)]">
      {/* Communitie Tab */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-yellow-500 mb-4 text-center">
          COMMUNITIES
        </h3>

        <ul className="space-y-3">
          <li className="flex justify-between items-center">
            <div className="text-sm md:text-lg">
              <span className="block font-medium">Front-end Developers</span>
              <span className="text-gray-500">72 members</span>
            </div>
            <button className=" text-black bg-gray-300 rounded-full px-4 py-1 hover:bg-yellow-400">
              Join
            </button>
          </li>
          <li className="flex justify-between items-center">
            <div className="text-sm md:text-lg">
              <span className="block font-medium">Back-end Developers</span>
              <span className="text-gray-500">40 members</span>
            </div>
            <button className="text-black bg-gray-300 rounded-full px-4 py-1 hover:bg-yellow-400">
              Join
            </button>
          </li>
          <li className="flex justify-between items-center">
            <div className="text-sm md:text-lg">
              <span className="block font-medium">Mobile Developers</span>
              <span className="text-gray-500">61 members</span>
            </div>
            <button className="text-black bg-gray-300 rounded-full px-4 py-1 hover:bg-yellow-400">
              Join
            </button>
          </li>
          <li className="flex justify-between items-center">
            <div className="text-sm md:text-lg">
              <span className="block font-medium">Analysts</span>
              <span className="text-gray-500">40 members</span>
            </div>
            <button className="text-black bg-gray-300 rounded-full px-4 py-1 hover:bg-yellow-400">
              Join
            </button>
          </li>
        </ul>
      </div>

      {/* Trending Topics Tab */}
      <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-yellow-500 mb-4">
          TRENDING TOPICS
        </h3>
        <ul className="space-y-3 text-sm text-center">
          <li className="border-b pb-2 hover:text-blue-500 cursor-pointer">
            Cross-platform development
          </li>
          <li className="border-b pb-2 hover:text-blue-500 cursor-pointer">
            Responsive design
          </li>
          <li className="border-b pb-2 hover:text-blue-500 cursor-pointer">
            Server-side frameworks
          </li>
          <li className="border-b pb-2 hover:text-blue-500 cursor-pointer">
            Component-based architecture
          </li>
          <li className="pb-2 hover:text-blue-500 cursor-pointer">
            App performance & optimization
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Right;

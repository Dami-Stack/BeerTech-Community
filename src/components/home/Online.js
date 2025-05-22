import React from "react";
import tara from "../../assets/profile/user1 (1).png";
import stella from "../../assets/profile/peace.png";
import andrew from "../../assets/profile/rename.png";
import gbemi from "../../assets/profile/shaw.png";
import maryam from "../../assets/profile/user2.png";
import tim from "../../assets/profile/mike.png";
import { FaCircle } from "react-icons/fa";



const Online = () => {
    return (
      <div className="mt-4 p-4 justify-self-end w-fit">
        <h3 className="text-yellow-500 font-semibold mb-2 justify-self-start uppercase">
          SEE WHO'S ONLINE
        </h3>

        {/* Flex container with horizontal scroll */}
        <div className="flex overflow-x-auto space-x-4 bg-gray-100 p-2 rounded-lg w-3/5 ">
          {/* Profile 1 */}
          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={andrew}
                alt="Andrew Lewis"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Andrew Lewis</span>
          </div>

          {/* Profile 2 */}
          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={gbemi}
                alt="Gbemi Oshoke"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Gbemi Oshoke</span>
          </div>

          {/* Profile 3 */}
          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Maryam Akin"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />c   
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Maryam Akin</span>
          </div>

          {/* profile 4 */}

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={tim}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          {/* profile 4 */}
          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={stella}
                alt="Maxwell Ugo"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Peter smith"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>

          <div className="flex flex-col items-center hover:bg-gray-300 p-2 rounded-md">
            <div className="relative">
              <img
                src={maryam}
                alt="Tim Stewarts"
                className="w-12 h-12 rounded-full border-2 border-yellow-500"
              />
              {/* Green dot */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-2 text-gray-600">Tim Stewarts</span>
          </div>
        </div>
      </div>
    );
}
 
export default Online;
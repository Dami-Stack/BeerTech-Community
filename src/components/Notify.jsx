import React from "react";
import Sidebar from "./home/Sidebar";
import Navbar from "./home/Navbar";
import { useNavigate } from "react-router-dom";
import message from "../assets/Messaging.png";
import { FaArrowUp } from "react-icons/fa";
import profile from "../assets/shaw.png";
import profile2 from "../assets/peace.png";
import profile3 from "../assets/rename.png";
import profile4 from "../assets/user2.png";


 const notifications = [
   {
     id: 1,
     user: "Stella Page",
     avatar: profile,
     action: "upvoted your post",
     message: "I need someone to check the accuracy of this",
     time: "12:00",
     icon: FaArrowUp,
   },
   {
     id: 2,
     user: "Matthew Akins",
     avatar: profile2,
     action: "replied your post",
     message:
       "It's correct, but just needs a bit tweaking to enhance usability",
     time: "1:42",
     icon: message,
   },
   {
     id: 3,
     user: "Matthew Akins",
     avatar: profile3,
     action: "upvoted your post",
     message:
       "Vote this post if you agree with early transport movement, or worth a debate. ",
     time: "18:00",
     icon: FaArrowUp,
   },
   {
     id: 4,
     user: "Matthew Akins",
     avatar: profile4,
     action: "replied your post",
     message:
       "Don't check comments, its just too dark lol",
     time: "16:00",
     icon: message,
   },
   {
     id: 5,
     user: "Matthew Akins",
     avatar: profile,
     action: "upvoted your post",
     message:
       "Early bird can also miss the worm, if its early at the wrong place!!",
     time: "3:29",
     icon: FaArrowUp,
   },
   {
     id: 6,
     user: "Matthew Akins",
     avatar: profile2,
     action: "replied your post",
     message:
       "It's correct, but just needs a bit tweaking to enhance usability",
     time: "11:05",
     icon: message,
   },
 ];

const Notify = () => {
  return (
    <div className="">
      <Navbar />
      <div className="flex ">
        <div className="w-1/4 ">
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center image-text my-8">
            <h1 className="text-5xl font-bold uppercase">Notifications</h1>
          </div>
          {/*After Notification*/}
          <div className="w-full h-7 image-background"></div>
          {/*scrollable div*/}
          <div className="w-full h-[calc(100vh-180px)] overflow-y-scroll space-y-5 p-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex flex-col sm:flex-row items-center rounded-2xl bg-gray-100 p-2 sm:p-3 md:p-4 hover:bg-gray-200 transition"
              >
                {/* Icon */}
                {typeof notification.icon === "function" ? (
                  <notification.icon className="text-gray-500 w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-2 mb-2 sm:mb-0" />
                ) : (
                  <img
                    src={notification.icon}
                    alt="notification icon"
                    className="w-6 h-6 sm:w-8 sm:h-8 mr-0 sm:mr-2 mb-2 sm:mb-0"
                  />
                )}

                {/* Avatar */}
                <img
                  src={notification.avatar}
                  alt={`${notification.user}'s avatar`}
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full mb-2 sm:mb-0 sm:mr-4"
                />

                {/* Text Content */}
                <div className="flex-1 space-y-1 text-center sm:text-left">
                  <p className="text-sm sm:text-base md:text-lg">
                    <strong>{notification.user}</strong> {notification.action}
                  </p>
                  <p className="text-gray-800 text-xs sm:text-sm md:text-base">
                    {notification.message}
                  </p>
                </div>

                {/* Time */}
                <span className="text-xs text-gray-500 mt-2 sm:mt-0 sm:ml-4">
                  {notification.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;

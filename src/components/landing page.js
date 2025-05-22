import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/Backgroundimg.png";
import logo from "../assets/logo.png";

const typingText =
  "Find answers to your questions here by connecting with other experts from different fields within the company";

const Landingpage = () => {
  const navigate = useNavigate();
  const [displayedText, setDisplayedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const current = useRef(0);

  useEffect(() => {
    setDisplayedText("");
    setTypingDone(false);
    current.current = 0;
    const interval = setInterval(() => {
      if (current.current < typingText.length) {
        setDisplayedText(typingText.slice(0, current.current + 1));
        current.current++;
      } else {
        clearInterval(interval);
        setTypingDone(true);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const handleGetStartedClick = () => {
    navigate("/Login");
  };

  return (
    <div
      className="min-h-screen flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6 items-center justify-around bg-cover bg-center text-white "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/*Welcome Text and logo */}
      <div className="text-center mb-8 font-custom animate-fadeIn">
        <h1 className="text-4xl md:text-6xl font-landing uppercase">
          Welcome to
        </h1>
        <img
          src={logo}
          alt="AbInbev logo"
          className="mx-auto my-4 w-40 md:w-full transition-transform duration-300 hover:scale-95 "
        />
        <p className="text-3xl md:text-5xl font-landing uppercase">Community</p>
      </div>
      {/*Description Text*/}
      <div className="text-center max-w-md mb-8 space-y-16 font-landing">
        <p className="text-lg md:text-2xl lg:text-4xl md:text-center leading-relaxed min-h-[4rem]">
          <span>{displayedText}</span>
          {!typingDone && <span className="animate-pulse">|</span>}
        </p>
        {/*Get started button*/}
        <button
          className="bg-white border border-black text-black px-6 py-2 rounded-lg hover:bg-gray-400 hover:scale-105 font-custom mb-22"
          onClick={handleGetStartedClick}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Landingpage;

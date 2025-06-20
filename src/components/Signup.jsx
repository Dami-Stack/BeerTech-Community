import React from "react";
import BgImage from "../assets/img3.png";
import User from "../assets/User.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignedup = (e) => {
    e.preventDefault(); // Prevent default form submission
    navigate("/Homepage");
  };

  const handleLoginRedirect = () => {
    navigate("/Login");
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full transition-all duration-500 ease-in-out transform hover:scale-105">
        {/* logo */}
        <div className="flex justify-center mb-2">
          <img src={logo} alt="AbInbev logo" className="h-16" />
        </div>

        {/* Profile icon */}
        <div className="flex justify-center mb-2">
          <img src={User} alt="user" className="h-10" />
        </div>

        {/* sign up header */}
        <h2 className="text-center text-base font-semibold mb-4">SIGN UP</h2>

        {/* sign up form */}
        <form className="space-y-2" onSubmit={handleSignedup}>
          <div className="flex space-x-2 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition "
              
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition "
              
            />
          </div>

          <input
            type="text"
            placeholder="Job Position"
            className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition  mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition  mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition mb-4"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition  mb-4"
          />

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-sky-400 px-4 py-1 rounded-full hover:bg-gray-400 text-white transition duration-200 mt-2 "
            >
              Sign Up
            </button>
            <div
              type="button"
              className="mt-2 text-blue-600 hover:underline text-xs"
              onClick={handleLoginRedirect}
            >
              Already have an account? Log in
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

import React from "react";
import BgImage from "../assets/img3.png";
import User from "../assets/User.png";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignedup = () => {
    navigate("/Homepage");
  };
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md w-full transition-all duration-500 ease-in-out transform hover:scale-105 max-h-fit">
        {/*logo*/}
        <div className="flex justify-center mb-4">
          <img src={logo} alt="AbInbev logo" className="h-28" />
        </div>

        {/*Profile icon*/}
        <div className="flex justify-center mb-6">
          <img src={User} alt="user" />
        </div>

        {/*sign up header*/}
        <h2 className="text-center text-lg font-semibold mb-6">SIGN UP</h2>

        {/*sign up form*/}
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              required
            />
          </div>
          <input
            type="date"
            placeholder="Birthday"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="text"
            placeholder="Job Position"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
        </form>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-gray-400 text-white transitin duration-200 mt-4"
            onClick={handleSignedup}
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;

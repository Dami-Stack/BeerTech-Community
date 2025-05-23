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
      <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-md md:w-full h-2/4 transition-all duration-500 ease-in-out transform hover:scale-105 max-h-fit">
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
        <form className="space-y-4" onSubmit={handleSignedup}>
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

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />

          <div className="flex flex-col items-center">
            <button
              type="submit"
              className="bg-blue-500 px-4 py-2 rounded-lg hover:bg-gray-400 text-white transition duration-200 mt-4 w-full"
            >
              Sign Up
            </button>
            <button
              type="button"
              className="mt-4 text-blue-600 hover:underline text-sm"
              onClick={handleLoginRedirect}
            >
              Already have an account? Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

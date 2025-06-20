import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import User from "../assets/User.png";
import Backimg from "../assets/Backimg.png";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  const handleLogInClick = () => {
    navigate("/Homepage");
  };

  return (
    <div className="flex min-h-screen w-full">
      {/* Left side - Logo and Background */}
      <div
        className="hidden md:flex flex-col justify-center items-center w-1/2 h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${Backimg})` }}
      >
        <img src={logo} alt="AbInbev logo" className="h-32 lg:h-3/5 mx-auto" />
      </div>
      {/* Right side - Login form */}
      <div className="flex flex-1 items-center justify-center bg-white">
        <div className="max-w-md w-full rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105">
          {/* Profile icon */}
          <div className="flex justify-center items-center mb-4">
            <img src={User} alt="User" />
          </div>
          <h2 className="text-center text-lg font-semibold mb-6 uppercase">
            user login
          </h2>
          {/* Login form */}
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email/Username"
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-sky-400 text-white font-bold px-4 py-1 rounded-full hover:bg-gray-400 hover:scale-105 transition duration-200"
            >
              Log in
            </button>
          </form>
          <div className="text-left w-full mt-4">
            <div>
              <a
                href="#"
                className="text-blue-500 hover:underline"
                onClick={handleLogInClick}
              >
                Forgot Password?
              </a>
            </div>
            <span>
              New to ABInBev?
              <span
                className="text-sky-500 hover:underline cursor-pointer ml-1"
                onClick={handleSignUpClick}
              >
                Sign up
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

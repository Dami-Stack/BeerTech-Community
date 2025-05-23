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
    <div className="md:flex min-h-screen">
      {/*Left side -Logo and Background*/}
      <div
        className="h-1/2 md:h-screen md:flex-1 md:flex md:items-center justify-center p-6 md:14 transition duration-500 ease-in-out bg-cover bg-center "
        style={{ backgroundImage: `url(${Backimg})` }}
      >
        <img
          src={logo}
          alt="AbInbev logo"
          className="h-12 md:h-32 lg:h-3/5 mx-auto"
        />
      </div>
      {/*Right side -Login form*/}
      <div className="md:flex-1 flex items-center justify-center p-8 bg-white text-center transition-all duration-500 ease-in-out w-full mx-auto">
        <div className="max-w-md w-full rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 ">
          {/*Profile icon*/}
          <div className="flex justify-center items-center mb-4">
            <img src={User} alt="User" />
          </div>
          <h2 className="text-center text-lg font-semibold mb-6 uppercase">
            user login
          </h2>
          {/*Login form*/}
          <form>
            {/*Email field*/}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Email/Username"
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            {/*password field */}
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                required
              />
            </div>
            {/*Login Btn*/}
            <button
              type="submit"
              className=" bg-blue-400 text-white px-3 py-1 rounded-lg 
                        hover:bg-gray-400  hover:scale-105 transitio duration-200"
            >
              Log in
            </button>
            {/*Additional links*/}
            <div className="text-center mt-4 ">
              <a href="#" className="text-blue-500 hover:underline"
               onClick={handleLogInClick} 
              >
                Forgot Password?
              </a>
            </div>
          </form>
          <div className="text-sm mt-2 space-x-1 flex w-fit mx-auto items-center">
            <p>New to AbInbev Community?</p>
            <button
              className="text-white hover:scale-105 bg-blue-400 py-1 px-3 rounded-lg hover:bg-gray-400"
              onClick={handleSignUpClick}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

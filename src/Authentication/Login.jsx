import React, { useState } from "react";
import Hospital from "../assets/Hospital.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  let navigation = useNavigate();

  const [loginCredentials, setLoginCredentials] = useState({
    username: "",
    password: "",
  });

  let handleEventChange = () => {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 mt-[-2rem]">
      <div className="flex flex-col lg:flex-row items-center bg-white p-6 rounded-2xl shadow-lg space-y-8 lg:space-y-0 lg:space-x-10 max-w-5xl w-full mx-4">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={Hospital}
            alt="Hospital"
            className="w-[60vw] h-[30vh] lg:w-full lg:h-[40vh] object-contain"
          />
        </div>

        <div className="lg:w-1/2 w-full space-y-6">
          <div>
            <h1 className="text-2xl font-semibold">
              Welcome to <br />
              <span className="text-xl font-semibold">
                Hospital Management System
              </span>
            </h1>
            <p className="italic text-sm text-gray-600 mt-2">
              Please login to continue
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Username</label>
              <input
                type="text"
                placeholder="Your Username"
                value={loginCredentials.username}
                onChange={() => handleEventChange()}
                className="border border-black rounded-xl px-3 py-2 w-full"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 font-medium">Password</label>
              <input
                type="password"
                placeholder="Your Password"
                value={loginCredentials.password}
                onChange={() => handleEventChange()}
                className="border border-black rounded-xl px-3 py-2 w-full"
              />
            </div>

            <button className="bg-[#3B0FFF] text-white px-4 py-2 w-full rounded-xl hover:bg-blue-600 transition-all duration-300">
              Login
            </button>

            <p className="text-center text-sm">
              Don't have a user account?{" "}
              <span
                className="underline text-blue-700 cursor-pointer"
                onClick={() => navigation("/signup")}
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

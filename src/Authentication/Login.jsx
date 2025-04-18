import React from "react";
import Hospital from "../assets/Hospital.png";
const Login = () => {
  return (
    <>
      <div className="flex justify-center h-screen items-center mt-[-3rem]">
        <div className="flex flex-col space-y-5">
          <div>
            Welcome to <br /> <span className="text-xl font-semibold">Hospital Management System</span>
            <p className="italic "> Please login to continue</p>
          </div>

          <div className="my-8">
            <img src={Hospital} className="w-[60vw] h-[30vh] mx-auto" />
          </div>

          <div className="flex flex-col">
            <label>Username</label>
            <input
              type="text"
              placeholder=" Your Username"
              className="border border-solid border-black rounded-xl w-[80vw]"
            />
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input
              type="text"
              placeholder=" Your Password "
              className="border border-solid border-black rounded-xl w-[80vw]"
            />
          </div>

          <div>
            <button className="bg-[#3B0FFF] text-white px-4 py-2 w-[80vw] rounded-xl hover:bg-blue-600 cursor-pointer transition-all duration-300">
              Login
            </button>
            <p className="text-center mt-4">Don't have an user account ? <span className="underline text-blue-700  mt-4">Register</span></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

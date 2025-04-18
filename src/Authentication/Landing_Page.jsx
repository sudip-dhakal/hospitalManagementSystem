import React from "react";
import doctor from "../assets/doctor.png";
import { useNavigate } from "react-router-dom";

const Landing_Page = () => {
  let navigation = useNavigate();
  return (
    <>
      <div className="flex flex-col min-h-screen px-4 py-4">
        <nav className="mb-5">
          <ul className="flex justify-evenly sm:justify-end sm:space-x-6 md:mr-10">
            <li
              className="bg-orange-700 px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base cursor-pointer hover:bg-red-950 transition-all duration-500 text-white rounded-[5%]"
              onClick={() => navigation("/login")}
            >
              Login
            </li>
            <li
              className="bg-orange-700 px-3 py-1 text-sm sm:px-4 sm:py-2 sm:text-base cursor-pointer hover:bg-red-950 transition-all duration-500 text-white rounded-[5%]"
              onClick={() => navigation("/signup")}
            >
              Register
            </li>
          </ul>
        </nav>

        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:justify-evenly md:items-center w-full">
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:mt-[-5rem] lg:text-7xl text-[#6662EF] mb-4 leading-tight">
              Hospital at <br /> your fingertips.
            </h1>
            <p className="text-sm sm:text-base mb-2">
              Hospital Management System
            </p>
            <p className="text-sm sm:text-base mb-4">To explore:</p>
            <button
              className="bg-[#4A21FF] text-white w-full sm:w-[60%] md:w-[25vw] px-4 py-2 rounded-xl cursor-pointer hover:bg-red-600 transition-all duration-300 mx-auto md:mx-0"
              onClick={() => navigation("/login")}
            >
              Get Started
            </button>
          </div>

          <div className="w-[70%] sm:w-[50%] md:w-[35%] lg:w-[30%]">
            <img src={doctor} alt="Doctor" className="w-full object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing_Page;

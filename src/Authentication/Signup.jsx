import React from "react";
import hospital from "../assets/hospital.png";

const Signup = () => {
  return (
    <div className="bg-[#d9d9d9] min-h-screen w-full flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between border-b border-gray-300 border-dashed pb-6 mb-6">
          <img
            src={hospital}
            alt="Hospital"
            className="w-full max-w-sm h-auto object-contain mb-4 lg:mb-0"
          />
          <h3 className="text-xl lg:text-2xl font-bold text-center lg:text-left">
            Please fill your details
          </h3>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium mb-1">Full Name:</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address:</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Date of Birth:</label>
            <input
              type="date"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email Address:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Gender:</label>
            <select className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block font-medium mb-1">Contact Number:</label>
            <input
              type="tel"
              placeholder="Enter your contact number"
              className="w-full p-3 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="col-span-1 md:col-span-2 flex flex-col space-y-4 justify-center mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
            >
              Sign Up
            </button>
            <p className="text-center">
              Already have an account ? <span className="text-blue-700 underline">Login</span>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

"use client";
import React from "react";
import { motion } from "framer-motion";
// import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className="md:grid grid-cols-2 mx-3 items-center relative z-[1000]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/mac.png')] bg-cover bg-center opacity-25 z-[-1]"></div>

      {/* 3D Model for larger screens */}
      {/* <div className="md:h-[800px] animate_right max-md:hidden z-[-1000]">
        <Spline
          scene="https://prod.spline.design/sHwURiWMH0BuNdal/scene.splinecode"
          className="absolute right-0"
        />
      </div> */}
       <div className="max-md:hidden">
        <img src="/phone2.png" alt="Phone" className="object-cover w-full" />
      </div>

      {/* Image for smaller screens */}
      <div className="md:hidden">
        <img src="/phone2.png" alt="Phone" className="object-cover w-full" />
      </div>

      {/* Text and Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center md:ml-40"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-blue-600">
          Stock Solutions
        </h1>

        <h1 className="text-2xl md:text-3xl font-bold pt-5">
          For Informed Investment Decisions
        </h1>
        <p className="pt-5 text-gray-700 md:text-lg font-semibold">
          At Sahaj Research Services, we empower investors like you with
          meticulously curated research services tailored for the dynamic world
          of stock market. With years of expertise, we provide comprehensive
          analysis and tools to bring clarity to your decision-making process.
          Our philosophy revolves around empowering you with strategies that you
          truly own, ensuring they work effectively for your goals.
        </p>

        {/* Features Section */}
        <div className="flex flex-wrap gap-5 pt-5">
          <div className="w-full md:w-auto p-3 shadow-xl rounded-xl cursor-pointer text-center">
            <h1 className="text-blue-500 font-semibold">Live support</h1>
            <p className="py-1 text-gray-700">In-person or online</p>
          </div>
          <div className="w-full md:w-auto p-3 shadow-xl rounded-xl cursor-pointer text-center">
            <h1 className="text-blue-500 font-semibold">Latest Track sheet</h1>
            <p className="py-1 text-gray-700">For transparent services</p>
          </div>
          <div className="w-full md:w-auto p-3 shadow-xl rounded-xl cursor-pointer text-center">
            <h1 className="text-blue-500 font-semibold">Weekly Updates</h1>
            <p className="py-1 text-gray-700">Stay connected</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;

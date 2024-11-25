"use client";
import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <div className=" md:grid grid-cols-2     items-center relative z-[1000] ">
      <div className="absolute inset-0 bg-[url('/mac.png')] bg-cover bg-center opacity-25 z-[-1]"></div>
      <div className="md:h-[800px] animate_right max-md:hidden  z-[-1000]">
        <Spline
          scene="https://prod.spline.design/sHwURiWMH0BuNdal/scene.splinecode"
          className=" absolute right-0  "
        />
      </div>
      <div className="md:hidden">
        <img src="/phone2.png" alt="" className=" object-cover"/>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=""
      >
        <h1 className=" text-3xl md:text-5xl font-bold  text-blue-600 md:ml-40">
        Stock Solutions
        </h1>

        <h1 className=" text-2xl md:text-3xl font-bold pt-5  md:ml-40  ">
          For Informed Investment Decisions
        </h1>
        <p className="  pt-5  text-gray-700 md:text-lg  font-semibold md:ml-40">
          At Sahaj Research Services, we empower investors like you with
          meticulously curated research services tailored for the dynamic world
          of stock market . With years of expertise, we provide comprehensive
          analysis and tools to bring clarity to your decision-making process.
          Our philosophy revolves around empowering you with strategies that you
          truly own, ensuring they work effectively for your goals.
        </p>
        <div className="md:flex gap-5 pt-5  md:ml-40">
          <div className="p-3 shadow-xl rounded-xl cursor-pointer  ">
            <h1 className="text-blue-500 font-semibold text-sm md:text-xl ">
              Live support
            </h1>
            <p className="py-1  text-gray-700">In-person or online</p>
          </div>
          <div className=" p-3 shadow-xl rounded-xl cursor-pointer">
            <h1 className="text-blue-500 font-semibold text-sm md:text-xl ">
              Latest Track sheet
            </h1>
            <p className="py-1  text-gray-700">For transparent services</p>
          </div>
          <div className=" p-3 shadow-xl rounded-xl cursor-pointer">
            <h1 className="text-blue-500 font-semibold text-sm md:text-xl ">
              Weakly Updates
            </h1>
            <p className="py-1  text-gray-700">Stay connected</p>
          </div>
        </div>
      </motion.div>
      {/* <div className="h-[700px]">
      <Spline scene='https://prod.spline.design/sHwURiWMH0BuNdal/scene.splinecode' ></Spline>
    </div> */}
    </div>
  );
};

export default Hero;

"use client";
import React from "react";
import { MdOutlineFilter1 } from "react-icons/md";
import { MdOutlineFilter2, MdOutlineFilter3 } from "react-icons/md";

const Work = () => {
  return (
    <div className=" md:h-screen ">
      <h1 className="text-center font-semibold md:pt-28 text-3xl md:text-4xl  mb-5 underline decoration-blue-500 decoration-4 underline-offset-6 leading-tight">
        How does it work...?
      </h1>
      <p className="text-center text-gray-700 mb-10  md:text-xl max-w-5xl mx-auto">
      Connect with the perfect analyst, select a convenient date and time, and enjoy personalized guidance from the comfort of your home, ensuring a seamless and stress-free experience tailored to your needs.
      </p>
      <div className="md:grid grid-cols-2  md:mt-20  ">
      <div className="items-center  mx-10">
          <img
            src="/job-5382501.jpg"
            alt=""
            className=" h-[280px] md:h-[450px] rounded-2xl"
          />
        </div>
        <div className="mx-10 flex flex-col items-center justify-center">
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full">
              {" "}
              {<MdOutlineFilter1 className="text-blue-500"/>}
            </p>
            <div className="ml-3">
              <p className="text-xl md:text-2xl pb-2  font-semibold ">
                Get matched with the right Analyst for you.
              </p>
              <p className="text-gray-700">
                From immunizations to checkups and preventive care, exams, our
                primary care physicians and providers work to keep you and your
                whole family healthy and strong each and every day.
              </p>
            </div>
          </div>
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:scale-105 md:shadow-xl md:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full ">
              {" "}
              {<MdOutlineFilter2  className="text-blue-500"/>}
            </p>
            <div className="ml-3">
              <p className="text-xl md:text-2xl pb-2  font-semibold">
                Choose a date and time.
              </p>
              <p className="text-gray-700">
                From immunizations to checkups and preventive care, exams, our
                primary care physicians and providers work to keep you and your
                whole family healthy and strong each and every day.
              </p>
            </div>
          </div>
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full">
              {" "}
              {<MdOutlineFilter3 className="text-blue-500"/>}
            </p>
            <div className="ml-3">
              <p className="text-xl md:text-2xl pb-2  font-semibold">
                Meet in the comfort of your own home.
              </p>
              <p className="text-gray-700">
                From immunizations to checkups and preventive care, exams, our
                primary care physicians and providers work to keep you and your
                whole family healthy and strong each and every day.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;

"use client";
import React from "react";
import { MdOutlineFilter1 } from "react-icons/md";
import { MdOutlineFilter2, MdOutlineFilter3 } from "react-icons/md";

const Work = () => {
  return (
    <div className=" mb-20 ">
      <h1 className="text-center font-semibold md:pt-28 text-3xl md:text-4xl  mb-5 underline decoration-blue-500 decoration-4 underline-offset-6 leading-tight">
        How does it work...?
      </h1>
      <p className="text-center text-gray-700 mb-10  md:text-xl max-w-5xl mx-auto">
        Connect with the perfect analyst, select a convenient date and time, and
        enjoy personalized guidance from the comfort of your home, ensuring a
        seamless and stress-free experience tailored to your needs.
      </p>
      <div className="md:grid grid-cols-2  md:mt-16  ">
        <div className="items-center  mx-10">
          <img
            src="/job-5382501.jpg"
            alt=""
            className=" h-[280px] md:h-[480px] rounded-2xl object-cover"
          />
        </div>
        <div className="mx-10 flex flex-col items-center justify-center">
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full">
              {" "}
              {<MdOutlineFilter1 className="text-blue-500" />}
            </p>
            <div className="ml-3">
              <p className="text-lg md:text-xl pb-2  font-semibold ">
                Get matched with the right Analyst for you.
              </p>
              <p className="text-gray-700">
                Find your perfect stock market analyst. Receive expert guidance,
                personalized strategies, and insights to achieve your investment
                goals confidently.
              </p>
            </div>
          </div>
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:scale-105 md:shadow-xl md:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full ">
              {" "}
              {<MdOutlineFilter2 className="text-blue-500" />}
            </p>
            <div className="ml-3">
              <p className="text-lg md:text-xl pb-2  font-semibold">
                Choose a date and time.
              </p>
              <p className="text-gray-700">
              Select a convenient date and time for your consultation. Schedule seamlessly to connect with an expert analyst at your preferred availability.
              </p>
            </div>
          </div>
          <div className="flex items-center  md:border p-5 bg md:mt-5 md:rounded-xl md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer">
            <p className="bg-white p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full">
              {" "}
              {<MdOutlineFilter3 className="text-blue-500" />}
            </p>
            <div className="ml-3">
              <p className="text-lg md:text-xl pb-2  font-semibold">
                Meet in the comfort of your own home.
              </p>
              <p className="text-gray-700">
              Enjoy expert consultations from the comfort of your home. Connect online with experienced analysts for personalized guidance and market insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

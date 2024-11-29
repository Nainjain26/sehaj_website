"use client";
import React from "react";

const Choice = () => {
  return (
    <div className="mt-24 bg-blue-50  px-10">
      <div className="max-w-7xl mx-auto items-center">
        <h1 className="text-3xl pt-5 md:text-4xl text-center font-bold mb-7 underline decoration-blue-500 decoration-4 underline-offset-6 leading-tight">
          Why Choose Us..?
        </h1>
        <p className="md:text-xl text-center md:mt-10 text-gray-700">
          At Sahaj Research Services, we deliver reliable, tailored solutions
          with expert precision, swift support, and clear insights. Our secure
          practices ensure your data’s safety, while our simplified reports
          provide actionable results you can trust.
        </p>
      </div>
      <div className="max-w-7xl mx-auto items-center">
        {/* First Row (Two Columns on MD and up, Stack on smaller screens) */}
        <div className="md:grid grid-cols-2 gap-8 mt-14">
          <div className="p-10 shadow-blue-2xl rounded-2xl transition-all md:h-[280px] md:w-[430px] hover:scale-105 hover:bg-white mb-8 bg">
            <img
              src="/Animation - 1731751207438.gif"
              alt="Qualified Researcher"
              width={130}
              height={130}
              className="mx-auto"
            />
            <h1 className="text-xl md:text-2xl font-semibold pb-2 text-center">
              Qualified Researcher
            </h1>
            <p className="text-gray-700 text-center">
              Expert analyst delivering insights through data-driven market
              research.
            </p>
          </div>
          <div className="p-10 shadow-blue-2xl rounded-2xl transition-all md:h-[280px] md:w-[430px] hover:scale-110 hover:bg-white mb-8 bg">
            <img
              src="/preview-32-p-500 1.png"
              alt="Fast Response"
              width={135}
              height={135}
              className="mx-auto bounce-animation"
            />
            <h1 className="text-xl md:text-2xl font-semibold pb-2 pt-2 text-center">
              Fast Response
            </h1>
            <p className="text-gray-700 text-center">
              Quick and reliable support for all your stock market needs.
            </p>
          </div>
        </div>

        {/* Second Row (Two Columns on MD and up, Stack on smaller screens) */}
        <div className="md:grid grid-cols-2 gap-8">
          <div className="p-10 shadow-blue-2xl rounded-2xl transition-all md:h-[280px] md:w-[430px] hover:scale-110 hover:bg-white mb-8 bg">
            <img
              src="/Animation - 1731923954405.gif"
              alt="Easy Reports"
              width={110}
              height={110}
              className="mx-auto"
            />
            <h1 className="text-xl md:text-2xl font-semibold pb-2 text-center">
              Easy Reports
            </h1>
            <p className="text-gray-700 text-center">
              Simplified, clear reports for smarter investment decisions and
              insights.
            </p>
          </div>
          <div className="p-10 shadow-blue-2xl rounded-2xl transition-all md:h-[280px] md:w-[430px] hover:scale-110 hover:bg-white mb-8 bg">
            <img
              src="/Animation - 1731924047290.gif"
              alt="Safe & Secure"
              width={150}
              height={150}
              className="mx-auto"
            />
            <h1 className="text-xl md:text-2xl font-semibold pt-3 pb-2 text-center">
              Safe & Secure
            </h1>
            <p className="text-gray-700 text-center">
              Your data and investments are protected with top-notch security.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;

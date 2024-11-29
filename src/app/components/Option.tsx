import React from "react";
import Link from "next/link";

const Option = () => {
  return (
    <div className="mt-10 bg-blue-50 px-5 py-10">
      <h1 className="text-center text-3xl sm:text-4xl font-semibold underline decoration-blue-500 decoration-4 underline-offset-6 leading-tight">
        Our Services
      </h1>
      <p className="max-w-7xl mx-auto text-center pt-5 text-gray-700 sm:text-xl mb-20">
        Sahaj Research Services offers expert financial solutions in stocks,
        futures, options, and commodities. Our dedicated team ensures
        personalized guidance, simplifying market complexities for secure,
        goal-oriented investments and lasting prosperity.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mx-5">
        {/* Cash/Equity */}
        <div className="p-8 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-105 hover:bg-white mb-8 text-center bg">
          <img
            src="/Promoting Generosity Through Charitable Giving Initiatives 3D Scene.png"
            alt="Cash/Equity"
            className="mx-auto h-[120px] sm:h-[180px] md:h-[220px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-5">
            Cash/Equity
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Cash indices are a Contract for Difference instrument that tracks
            the performance of some of the world&apos;s biggest companies.
          </p>
        </div>

        {/* Index */}
        <div className="p-8 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-105 hover:bg-white mb-8 text-center bg">
          <img
            src="/Cryptocurrency Trading 3D Scen.png"
            alt="Index"
            className="mx-auto h-[120px] sm:h-[180px] md:h-[220px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-5">
            Index
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Stock market index, is an index that measures the performance of a
            stock market, or of a subset of a stock market.
          </p>
        </div>

        {/* Option */}
        <div className="p-8 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-105 hover:bg-white mb-8 text-center bg">
          <img
            src="/Ensuring Security For Cryptocurrencies Holdings 3D Scene.png"
            alt="Option"
            className="mx-auto h-[120px] sm:h-[180px] md:h-[220px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-5">
            Option
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            An index call option allows for unlimited profit potential, while
            the downside loss is limited to the premium paid for the call
            option.
          </p>
        </div>

        {/* Future */}
        <div className="p-8 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-105 hover:bg-white mb-8 text-center bg">
          <img
            src="/Utilizing Cryptocurrencies In Cloud Computing 3D Scene.png"
            alt="Future"
            className="mx-auto h-[120px] sm:h-[180px] md:h-[220px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-blue-500 font-semibold py-5">
            Future
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Stock index futures, also referred to as equity index futures or
            just index futures, are futures contracts based on a stock index.
          </p>
        </div>
      </div>
      
      <p className="text-center text-xl pb-10 sm:text-2xl mt-5 transition-all md:mb-11">
        <Link
          href={"/pricing"}
          className="mx-auto border p-3 rounded-2xl bg-blue-500 text-white hover:bg-blue-600"
        >
          Know More
        </Link>
      </p>
    </div>
  );
};

export default Option;

import React from "react";
import Link from "next/link";
const Option = () => {
  return (
    <div className="mt-20 ">
        <h1 className="text-center text-3xl md:text-5xl font-semibold">Our Services</h1>
        <p className="max-w-7xl mx-auto text-center pt-5 text-gray-500 md:text-xl mb-20">At Sahaj Research Services , we specialize in comprehensive financial services, including stocks, futures, options, cash, and commodities. Our expert team is dedicated to guiding you through the complexities of the financial markets, ensuring tailored solutions to meet your investment goals. Trust us to provide the insights and support you need for a secure and prosperous financial future.</p>
      <div className="md:flex justify-evenly m-10 gap-10">
        <div className=" p-10 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-110 hover:bg-white mb-8 text-center bg-blue-50 ">
          <img
            src="/Promoting Generosity Through Charitable Giving Initiatives 3D Scene.png"
            alt=""
            
            className="mx-auto h-[120px] md:h-[250px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold py-5">
            Cash
          </h1>
          <p className="text-gray-700">
            Cash indices are a Contract for Difference instrument that tracks
            the performance of some of the world&apos;s biggest companies.
          </p>
        </div>
        <div className=" p-10 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-110 hover:bg-white mb-8 text-center bg-blue-50 ">
          <img
            src="/Utilizing Cryptocurrencies In Cloud Computing 3D Scene.png"
            alt=""
            
            className="mx-auto h-[120px] md:h-[250px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold py-5">
            Future
          </h1>
          <p className="text-gray-700">
            Stock index futures, also referred to as equity index futures or
            just index futures, are futures contracts based on a stock index.
          </p>
        </div>
        <div className=" p-10 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-110 hover:bg-white mb-8 text-center bg-blue-50 ">
          <img
            src="/Cryptocurrency Trading 3D Scen.png"
            alt=""
            // width={200}
            // height={200}
            className="mx-auto h-[120px] md:h-[250px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold py-5">
            Index
          </h1>
          <p className="text-gray-700">
            stock market index, is an index that measures the performance of a
            stock market, or of a subset of a stock market.
          </p>
        </div>
        <div className=" p-10 shadow-xl cursor-pointer rounded-2xl transition-all hover:scale-110 hover:bg-white mb-8 text-center bg-blue-50 ">
          <img
            src="/Ensuring Security For Cryptocurrencies Holdings 3D Scene.png"
            alt=""
            // width={200}
            // height={200}
            className="mx-auto h-[120px] md:h-[250px] transform transition-transform duration-500 hover:scale-110 hover:rotate-6"
          />
          <h1 className="text-2xl md:text-4xl text-blue-500 font-semibold py-5">
            Option
          </h1>
          <p className="text-gray-700">
            An index call option allows for unlimited profit potential, while
            the downside loss is limited to the premium paid for the call
            option.
          </p>
        </div>
      </div>
     <p className="text-center text-xl mb-4  md:text-3xl transition-all hover:scale-105 duration-150 md:mb-11 "> <Link href={"/Pricing"} className="mx-auto border p-3 rounded-2xl bg-blue-400 text-white  hover:bg-blue-500 "> Know More</Link></p>
    </div>
  );
};

export default Option;
 
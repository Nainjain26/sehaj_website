"use client"
import React from "react";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion";


const page = () => {
  return (
    <div>
      <div className="md:grid grid-cols-2 max-w-[1240px] mx-auto  ">
        <div>
          <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
            src="/Private Online Course 3D Illustration (1).png"
            alt=""
            className="md:w-[400px] md:h-[400px] h-[200px] w-[200px] "
          />
        </div>
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} className="flex flex-col justify-center items-center">
          <h1 
          className="md:text-5xl text-2xl font-semibold text-center md:mb-5 mb-2 text-blue-600">
            Index Future
          </h1>
          <div 
          
          className="md:text-xl text-sm text-gray-500  ">
            Index Future is specially designed for the traders who has focus on
            index. This is most popular segment for traders where they take
            advantage of the short-term price movements of Bank Nifty and nifty.
          </div>
          <p className="md:text-2xl text-sm bg-blue-500 md:my-5 my-3 flex text-white md:p-3 p-2 rounded-2xl shadow-xl font-semibold hover:bg-blue-400 text-center">
            <IoMdArrowDropright className="md:text-3xl text-xl" />
            <Link href={"/Contact-Us"}>Contact-Us</Link>
          </p>
        </motion.div>
      </div>
      <hr className="max-w-[1240px] mx-auto mt-5" />
      <div className="max-w-[1240px] mx-auto gap-5 mt-10 ">
        <h1 className="md:text-4xl font-semibold text-blue-600 text-center text-2xl ">Service charge</h1>
        <div className="flex gap-5 justify-center my-5">
          <h1 className="md:text-xl text-sm font-semibold border md:p-4 p-1 shadow-md bg-blue-50">Rs. 9999 +GST (Monthly)</h1>
          <h1 className="md:text-xl text-sm font-semibold border md:p-4 p-1 shadow-md bg-blue-50">Rs. 24999 +GST (Monthly)</h1>
        </div>
      </div>
      <div className=" md:grid grid-cols-2 my-10 max-w-[1240px] mx-auto gap-5">
        <div className="mb-5 ">
          <h1 className="md:text-4xl text-2xl font-semibold text-blue-600 text-center">
            Product Details
          </h1>
          <div className="border p-5 shadow-2xl mt-5 rounded-2xl hover:bg-blue-50">
            <h1 className="text-gray-600 text-sm md:text-lg">
              Index Future is specially designed for the traders who has focus
              on index. This is most popular segment for traders where they take
              advantage of the short-term price movements of Bank Nifty and
              nifty.
            </h1>
            <h1 className="my-3 text-xl font-semibold">What You Will Get:</h1>

            <p className="text-gray-600 text-sm md:text-lg">
              ⦁ 1-2 Intraday cash signal with set Target & SL.
            </p>
            <p className="text-gray-600 text-sm md:text-lg"> ⦁ Follow-up on trade signals.</p>
            <p className="text-gray-600 text-sm md:text-lg">
              
              ⦁ Global market & Economic data update.
            </p>
            <p className="text-gray-600 text-sm md:text-lg">
              
              ⦁ Stock in News, RBI Policy, IIP, CPI update.
            </p>
            <p className="text-gray-600 text-sm md:text-lg"> ⦁ 24/7 Customer support</p>
          </div>
        </div>
        <div className="mb-5 ">
          <h1 className="md:text-4xl text-2xl font-semibold text-blue-600 text-center ">
            Investment Rules
          </h1>
          <div className="border p-5 shadow-2xl mt-5 rounded-2xl hover:bg-blue-50">
            <h1 className="my-3 text-xl font-semibold">Trading Rule</h1>
            <p className="text-gray-600 text-sm md:text-lg">
              ⦁ Do not trade without Stop loss order ever
            </p>
            <p className="text-gray-600 text-sm md:text-lg"> ⦁ Don&apos;t take loan or borrow money from anyone and trade in stock market.</p>
            <p className="text-gray-600 text-sm md:text-lg">
              
              ⦁ Always take risk of your spare capital only.
            </p>
            <p className="text-gray-600 text-sm md:text-lg">
              
              ⦁ Don&apos;t be emotional or greedy while trading. Always take profit home whenever you see good profit.
            </p>
            <p className="text-gray-600 text-sm md:text-lg"> ⦁ Don&apos;t panic in case of any reverse situation because ups and downs are part of market and hold your position with proper Stoploss.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default page;

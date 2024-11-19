import Link from "next/link";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";

import { IoCall } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-blue-100 p-10 ">
      <div className="md:grid grid-cols-3 md:gap-10 ">
        <div className="md:ml-20">
          <div className="flex items-center">
            <img
              src="/Frame 2.svg"
              alt=""
              className="md:h-[110px] md:w-[100px] h-[30px] w-[30px] mr-2"
            />

            <h1 className=" md:text-3xl font-semibold md:pt-4  ">
              
              Sahaj Research Services
            </h1>

          </div>
          <p className="text-gray-600 md:text-xl ">Sehej Research delivers real-time data, analytics, and strategies to help investors make informed decisions and unlock opportunities in the ever-evolving stock market.</p>
          
        </div>
        <div>
          <h1 className=" text-xl md:text-3xl font-semibold items-center pt-8 md:text-center">Quick Links</h1>
          <div className="md:py-5 py-3 md:text-xl   md:gap-6 gap-3 md:text-center text-gray-700">
            <p className=" hover:text-blue-400 pt-4">
              <Link href={"/"}>Home</Link>
            </p>
            <p className="   hover:text-blue-400 pt-3">
              <Link href={"/Contact-Us"}>Contact-Us</Link>
            </p>
           
            
            <p className="   hover:text-blue-400 pt-3">
              <Link href={"/Index-Future"}>Index-Future</Link>
            </p>
           
          </div>
        </div>

        <div>
         
          <div className="py-5">
            
            <h1 className="py-5 font-semibold text-xl md:text-3xl">
              Get In Touch
            </h1>
            <div className="flex">
              <p className="mr-2 text-lg md:text-3xl text-blue-600">
                {<IoCall />}
              </p>
              <h1 className="md:text-xl text-sm text-gray-600">
                {" "}
                +91-9993-985722 , +91-8839-349383{" "}
              </h1>
            </div>
            <div className="flex mt-3 ">
              <p className="mr-2 text-lg md:text-3xl text-blue-600">
                {<IoMdMailUnread />}
              </p>
              <h1 className="md:text-xl text-sm">
                <span className="text-black  ">E-mail</span> -
                <a
                  href="mailto:84himanshuvyas@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  84himanshuvyas@gmail.com
                </a>
              </h1>
            </div>
          </div>


        </div>
      </div>
      <hr className="custom-hr" />
      <div className=" md:flex justify-between  text-gray-500 mt-5 text-sm md:text-lg">
        <div>Copyright &copy; 2024 SahajResearchServices | All Right Reserved</div>
        <div className="flex  ">
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2 md:mr-5 ">
                <Link
                  href={"https://www.instagram.com/sahajresearch/"}
                  className=" text-pink-500 text-xl md:text-3xl  hover:text-blue-800"
                >
                  <BsInstagram />
                </Link>
              </h1>
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2 md:mr-5">
                <Link
                  href={"https://www.facebook.com/sahajresearch/"}
                  className=" text-blue-600 text-xl md:text-3xl  hover:text-blue-800"
                >
                  <FaFacebookF />
                </Link>
              </h1>
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl">
                <Link
                  href={
                    "https://x.com/i/flow/login?redirect_after_login=%2Fsahajresearch"
                  }
                  className=" text-black text-xl md:text-3xl  hover:text-blue-800"
                >
                  <FaXTwitter />
                </Link>
              </h1>
            </div>
      </div>
    </div>
  );
};

export default Footer;

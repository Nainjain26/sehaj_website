import Link from "next/link";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {/* Logo and Description */}
        <div className="sm:ml-10 md:ml-20">
          <div className="flex justify-center items-center mb-4">
            <img
              src="/logo1.png"
              alt="Logo"
              className="h-8 w-8 sm:h-12 sm:w-12 md:h-[80px] md:w-[120px] mr-2 object-cover"
            />
            <h1 className="text-lg sm:text-lg font-semibold pt-4">Sahaj Research Services</h1>
          </div>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Sahaj Research delivers real-time data, analytics, and strategies to help investors make informed decisions and unlock opportunities in the ever-evolving stock market.
          </p>
          <p className="pt-3">SEBI No. - INH000014854</p>
        <p>GST No.- 23AHJPV6186G1ZW </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl font-semibold  pt-8">Quick Links</h1>
          <div className="py-3 text-gray-700">
            <p className="hover:text-blue-400 pt-4">
              <Link href={"/"}>Home</Link>
            </p>
            <p className="hover:text-blue-400 pt-3">
              <Link href={"/Contact-Us"}>Contact Us</Link>
            </p>
            {/* <p className="hover:text-blue-400 pt-3">
              <Link href={"/Index-Future"}>Index-Future</Link>
            </p> */}
            <p className="hover:text-blue-400 pt-3">
              <Link href={"/pricing"}>Pricing</Link>
            </p>
           
            <p className="hover:text-blue-400 pt-3">
              <Link href={"/Servicee"}>Service</Link>
            </p>
            
            <p className="hover:text-blue-400 pt-3">
              <Link href={"/login"}>login</Link>
            </p>
           
          </div>
        </div>

        {/* Explore More */}
        <div className="text-center">
          <h1 className="text-lg sm:text-xl font-semibold pt-8">Explore More</h1>
          <div className="py-3 text-gray-700">
            <p className="hover:text-blue-400 pt-4">
              <Link href={"/Disclosure"}>Disclosure</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Refund-policies"}>Refund Policies</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Privacy-policy"}>Privacy Policy</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Terms-&-condition"}>Terms & Conditions</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Invester-charter"}>Investor Charter</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Grievance-Redressal-Process"}>Grievance Redressal</Link>
            </p>
            <p className="hover:text-blue-400 pt-2">
              <Link href={"/Escalation"}>Escalation Matrix/Grievance Redressal
              </Link>
            </p>
          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h1 className="py-6 font-semibold text-lg sm:text-xl text-center">Get In Touch</h1>
          <div className="flex justify-center items-center mb-3">
            <p className="mr-2 text-xl sm:text-2xl text-blue-600">
              <IoCall />
            </p>
            <h1 className="text-sm sm:text-base text-gray-600">+91-9993-985722, +91-8839-349383</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="mr-2 text-xl sm:text-2xl text-blue-600">
              <IoMdMailUnread />
            </p>
            <h1 className="text-sm sm:text-base">
              <span className="text-black">E-mail</span> -{" "}
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

      {/* Horizontal Line */}
      <hr className="my-5 border-gray-300" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          Copyright &copy; 2024 SahajResearchServices | All Rights Reserved
        </div>
        <div className="flex justify-center mt-4 sm:mt-0">
          <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2">
            <Link
              href={"https://www.instagram.com/sahajresearch/"}
              className="text-pink-500 text-2xl sm:text-3xl hover:text-blue-800"
            >
              <BsInstagram />
            </Link>
          </h1>
          <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2">
            <Link
              href={"https://www.facebook.com/sahajresearch/"}
              className="text-blue-600 text-2xl sm:text-3xl hover:text-blue-800"
            >
              <FaFacebookF />
            </Link>
          </h1>
          <h1 className="bg-white w-max p-3 rounded-full shadow-xl">
            <Link
              href={"https://x.com/i/flow/login?redirect_after_login=%2Fsahajresearch"}
              className="text-black text-2xl sm:text-3xl hover:text-blue-800"
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

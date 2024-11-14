import Link from "next/link";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className=" bg-blue-50 p-10 ">
      <div className="md:grid grid-cols-3 gap-10 ">
        <div className="">
          <h1 className="text-xl md:text-3xl font-semibold">sahajresearchservices.com</h1>
          <div className="py-10 text-gray-700 md:text-xl">
            <h1>SEBI REGISTRATION - INH000014854</h1> 
            <div className="flex ">
            <p className="mr-2 text-xl md:text-2xl text-blue-600">{<IoMdMailUnread/>}</p>
            <h1 >
              <span className="text-black font-semibold">E-mail</span> -
              <a
                href="mailto:84himanshuvyas@gmail.com"
                className="text-blue-500 hover:underline"
              >
                84himanshuvyas@gmail.com
              </a>
            </h1>
            </div>
            <div className="flex">
            <p className="mr-2 text-xl md:text-2xl text-blue-600">{< IoLocation />}</p>
             <h1>
             <span className="text-black font-semibold">Address</span> - Correspondence Address 6th Floor,Unit no. 611, Princess
              Business skypark, opposite Orbit Mall,A.B Road, Indore, Madhya
              Pradesh,452001
            </h1>
            </div>
              
          </div>
          <div>
            <h1 className="md:text-xl text-gray-700">
              SEBI Office Details : SEBI Bhavan BKC
              <div className="flex">
              <p className="mr-2 text-xl md:text-2xl text-blue-600">{< IoLocation />}</p>
              <h1>  <span className="text-black font-semibold">Address</span> - Plot No.C4-A, &apos;G&apos;
              Block Bandra-Kurla Complex,Bandra(East),Mumbai - 400051
              ,Maharashtra </h1>
              </div>
              <div className="flex">
              <p className="mr-2 text-xl md:text-2xl text-blue-600">{< IoCall />}</p>
               <h1>Tel:+91-22-26449000/40459000/ Fax:
              +91-22-26449019-22 /40459019-22</h1>
              </div>
              <div className="flex">
              <p className="mr-2 text-xl md:text-2xl text-blue-600">{<IoMdMailUnread/>}</p>
              <h1> <span className="text-black font-semibold">E-mail</span> - 
              <a
                href="mailto:sebi@sebi.gov.in"
                className="text-blue-500 hover:underline"
              >
                sebi@sebi.gov.in
              </a>
              </h1>
              </div>
               
              <h1 className="mb-5">Toll Free investor Helpline: 1800 22 75 7575</h1>
            </h1>
          </div>
        </div>
        <div>
          <h1 className=" text-xl md:text-3xl font-semibold">Quick Links</h1>
          <div className="py-5 md:text-xl text-gray-700">
           <p className=" hover:text-blue-400"><Link href={"/"}>Home</Link></p> 
           <p className=" pt-1 md:pt-3  hover:text-blue-400"><Link href={"/"}>Commodity</Link></p>
            <p className=" pt-1 md:pt-3  hover:text-blue-400"><Link href={"/"}>Equity</Link></p>
            <p className=" pt-1 md:pt-3  hover:text-blue-400"><Link href={"/Bank-details"}>Bank Details</Link></p>
            <div className="flex mt-5 md:mt-10 ">
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2 md:mr-5 "><Link href={"https://www.instagram.com/sahajresearch/"} className=" text-pink-500 text-xl md:text-3xl  hover:text-blue-800">< BsInstagram/></Link></h1>
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2 md:mr-5"><Link href={"https://www.facebook.com/sahajresearch/"} className=" text-blue-600 text-xl md:text-3xl  hover:text-blue-800"><  FaFacebookF/></Link></h1>
              <h1 className="bg-white w-max p-3 rounded-full shadow-xl"><Link href={"https://x.com/i/flow/login?redirect_after_login=%2Fsahajresearch"} className=" text-black text-xl md:text-3xl  hover:text-blue-800">< FaXTwitter/></Link></h1>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl md:text-3xl font-semibold">Address</h1>
          <div className="py-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5260583780764!2d75.89048597560362!3d22.745850679368704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd56993c50d5%3A0xbdcc27d0aa89f45b!2sPrinces%27%20Business%20Skypark!5e0!3m2!1sen!2sin!4v1731412679940!5m2!1sen!2sin"
              // width="350"
              // height="350 "
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy" className="md:w-[350px] md:h-[350px] h-[250px] w-[250px]"
            />
            <h1 className="py-3 font-semibold text-xl md:text-2xl">Get In Touch</h1>
            <div className="flex">
              <p className="mr-2 text-xl md:text-3xl text-blue-600">{< IoCall />}</p>
               <h1 className="md:text-xl text-gray-600"> +91-9993-985722 , +91-8839-349383 </h1>
              </div>
              <div className="flex ">
            <p className="mr-2 text-xl md:text-3xl text-blue-600">{<IoMdMailUnread/>}</p>
            <h1 className="md:text-xl" >
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
      <div className="text-center text-gray-500">
        <h1>Copyright &copy; 2024 SahajReseachServices | All Right Reserved</h1>
      </div>
    </div>
  );
};

export default Footer;

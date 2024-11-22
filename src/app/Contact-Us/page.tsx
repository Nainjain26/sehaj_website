import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
// import Spline from "@splinetool/react-spline";
const page = () => {
  return (
    <div className="bg-blue-50">
      <div className=" h-[250px] mt-5 flex flex-col justify-center">
        <h1 className=" text-2xl md:text-5xl font-semibold text-center text-blue-700">Contact us</h1>
        <p className="text-center max-w-[1240px] mx-auto mt-5  md:text-xl text-sm text-gray-600">Contact us for any questions, support, or feedback. Our team is dedicated to assisting you and addressing your needs promptly. We value your input and look forward to helping you with your inquiries.</p>
      </div>
      <div className="md:grid grid-cols-2  max-w-[1240px] gap-8 md:h-[400px] mx-auto mt-5 md:mt-10">
      <div>
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.5260583780764!2d75.89048597560362!3d22.745850679368704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd56993c50d5%3A0xbdcc27d0aa89f45b!2sPrinces%27%20Business%20Skypark!5e0!3m2!1sen!2sin!4v1731412679940!5m2!1sen!2sin"
          // width="350"
          // height="350 "
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="  md:h-[350px] h-[250px] w-full"
        />
      </div >
        <div className=" max-sm:mt-5 ">
          <div className="flex">
            <p className="mr-2 text-xl md:text-4xl text-blue-600">
              {<IoLocation />}
            </p>
            <h1 className="md:text-2xl text-gray-700">
              <span className="text-black font-semibold  ">Address</span> - 6th
              Floor,Unit no. 611, Princess Business skypark, opposite Orbit
              Mall,A.B Road, Indore, Madhya Pradesh,452001
            </h1>
          </div>
          <div className="flex mt-2 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<IoMdMailUnread />}
            </p>
            <h1 className="md:text-2xl">
              <span className="text-black font-semibold ">E-mail</span> -
              <a
                href="mailto:84himanshuvyas@gmail.com"
                className="text-blue-500 hover:underline"
              >
                84himanshuvyas@gmail.com
              </a>
            </h1>
          </div>
          <div className="flex mt-2 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<MdAddLocationAlt />}
            </p>
            <h1 className="md:text-2xl text-gray-700">
              <span className="text-black font-semibold ">
                Correspondence Address
              </span>{" "}
              - Ratlam Road, Vyas Gali, Kushalgarh, Banswara, UDAIPUR,
              RAJASTHAN, 327801
            </h1>
          </div>
          <div className="flex mt-2 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<IoCall />}
            </p>
            <h1 className="md:text-2xl text-gray-700">
              +91-9993-985722 , +91-8839-349383
            </h1>
          </div>
        </div>
      </div>
      <hr className="max-w-[1240px] mx-auto my-5" />
      
      <div className="max-w-[1240px] mx-auto mt-10">
        <h1 className=" md:text-2xl font-semibold my-5">
          {" "}
          SEBI Office Details : SEBI Bhavan BKC
        </h1>
        <h1 className="md:text-xl  text-gray-700 mt-5">
          <span className="text-black font-semibold ">SEBI REGISTRATION</span> -
          INH000014854
        </h1>
        <div className="flex items-center">
          <p className="mr-2 text-xl md:text-4xl text-blue-600">
            {<IoLocation />}
          </p>
          <h1 className="md:text-2xl  text-gray-700 mt-5">
            <span className="text-black font-semibold ">Address</span> - Plot
            No.C4-A, &apos;G&apos; Block Bandra-Kurla
            Complex,Bandra(East),Mumbai - 400051 ,Maharashtra{" "}
          </h1>
        </div>
        <div className="flex mt-5">
          <p className="mr-2 text-xl md:text-4xl text-blue-600">{<IoCall />}</p>
          <h1 className="md:text-2xl  text-gray-700">
            Tel:+91-22-26449000/40459000/ Fax: +91-22-26449019-22 /40459019-22
          </h1>
        </div>
        <div className="flex mt-5">
          <p className="mr-2 text-xl md:text-4xl text-blue-600">
            {<IoMdMailUnread />}
          </p>
          <h1 className="md:text-2xl  text-gray-700">
            <span className="text-black font-semibold">E-mail</span> -
            <a
              href="mailto:sebi@sebi.gov.in"
              className="text-blue-500 hover:underline"
            >
              sebi@sebi.gov.in
            </a>
          </h1>
        </div>
        <h1 className="pb-5 md:text-2xl text-gray-700 mt-5">
          <span className="text-black font-semibold">
            {" "}
            Toll Free investor Helpline:{" "}
          </span>
          1800 22 75 7575
        </h1>
      </div>
    </div>
  );
};

export default page;

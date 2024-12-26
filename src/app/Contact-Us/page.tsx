// components/ContactForm.tsx
"use client";

import React, { useState, useRef, useEffect, FormEvent } from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";
import { FaFax } from "react-icons/fa";



const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  
  const [errors, setErrors] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [isDisable, setIsDisable] = useState<boolean>(false);

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsDisable(true);
    setErrors('');
    setSuccess('');
    
    const data = {
      name: nameRef.current?.value,
      email: emailRef.current?.value,
      phone: phoneRef.current?.value,
    };

    const validation = (email: string): boolean => {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(email);
    };

    if (!validation(data.email || "")) {
      return setErrors("Enter valid email address");
    }

    try {
      const response = await fetch("https://sahaj-3xvx.onrender.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed form submission. Check server response for details");
      }

      // Clear form after successful submission
      if (nameRef.current) nameRef.current.value = "";
      if (emailRef.current) emailRef.current.value = "";
      if (phoneRef.current) phoneRef.current.value = "";

      setSuccess('Form submitted successfully!');
      setIsDisable(false);
    } catch (error:unknown) {
      if (error instanceof Error) {
        // Now TypeScript knows error is an instance of Error
        setErrors(error.message);
      } else {
        // Fallback in case it's not an instance of Error
        setErrors('An unknown error occurred');
      }
      
      setIsDisable(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [success]);

  return (
    <div className="bg-blue-50 px-5">
      <div className="py-6 flex flex-col justify-center">
        <h1 className="text-2xl md:text-5xl font-semibold text-center text-blue-700">
          Contact us
        </h1>
        <p className="text-center max-w-[1240px] mx-auto mt-5 md:text-lg text-sm text-gray-800">
          Contact us for any questions, support, or feedback. Our team is
          dedicated to assisting you and addressing your needs promptly. We
          value your input and look forward to helping you with your inquiries.
        </p>
      </div>
      <div className="md:grid grid-cols-2 max-w-[1240px] mx-auto pt-5 md:py-20">
        <div>
          <form className="max-w-sm mx-auto border border-blue-500 md:p-10 p-5 rounded-xl bg-blue-500  " onSubmit={handleFormSubmit}>
            <div className="mb-5">
              <label className="block mb-2 text-white text-sm font-semibold  dark:text-white">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                ref={nameRef}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm  text-white font-semibold dark:text-white">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                ref={emailRef}
                placeholder="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                required
              />
            </div>
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-white dark:text-white">
                Number
              </label>
              <input
                type="text"
                id="phone"
                ref={phoneRef}
                placeholder=" Mobile Number"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="text-white font-semibold bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              disabled={isDisable}
            >
              Submit
            </button>
            {errors && <div>{errors}</div>}
            {success && <div>{success}</div>}
          </form>
        </div>
        <div>
          <img src="/svg1.svg" alt="Contact Illustration" className="md:w-[430px] md:h-[360px] rounded-lg py-5"/>
        </div>
      </div>

      {/* Google Map */}
      <div className="bg-blue-50 px-5">
      
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
          className="  md:h-[320px] h-[230px] w-full"
        />
      </div >
        <div className=" max-sm:mt-5 ">
          <div className="flex">
            <p className="mr-2 text-lg md:text-4xl text-blue-600">
              {<IoLocation />}
            </p>
            <h1 className=" text-gray-700">
              <span className="text-black font-semibold  ">Correspondence Address</span> - 6th
              Floor,Unit no. 611, Princess Business skypark, opposite Orbit
              Mall,A.B Road, Indore, Madhya Pradesh,452001
            </h1>
          </div>
          <div className="flex mt-2 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<IoMdMailUnread />}
            </p>
            <h1 className="">
              <span className="text-black font-semibold ">E-mail</span> -
              <a
                href="mailto:84himanshuvyas@gmail.com"
                className="text-blue-500 hover:underline"
              >
                84himanshuvyas@gmail.com
              </a>
            </h1>
          </div>
          <hr className="mt-6" />
          <div className="flex mt-2 md:pt-6 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<MdAddLocationAlt />}
            </p>
            <h1 className=" text-gray-700 ">
              <span className="text-black font-semibold ">
                 Address
              </span>{" "}
              - Ratlam Road, Vyas Gali, Kushalgarh, Banswara, UDAIPUR,
              RAJASTHAN, 327801
            </h1>
          </div>
          <div className="flex mt-2 ">
            <p className="mr-2 text-xl md:text-4xl text-blue-700">
              {<IoCall />}
            </p>
            <h1 className=" text-gray-700">
              +91-9993-985722 , +91-8839-349383
            </h1>
          </div>
        </div>
      </div>
      <hr className="max-w-[1240px] mx-auto my-3" />
      
      <div className="max-w-[1240px] mx-auto mt-10">
        <h1 className=" md:text-xl font-semibold my-5">
          {" "}
          SEBI Office Details : SEBI Bhavan BKC
        </h1>
        <h1 className=" text-gray-700 mt-5">
          <span className="text-black font-semibold ">SEBI REGISTRATION</span> -
          INH000014854
        </h1>
        <div className="flex items-center">
          <p className="mr-2 text-xl md:text-3xl text-blue-600">
            {<IoLocation />}
          </p>
          <h1 className="  text-gray-700 mt-5">
            <span className="text-black font-semibold ">Address</span> - Plot
            No.C4-A, &apos;G&apos; Block Bandra-Kurla
            Complex,Bandra(East), <br />Mumbai - 400051 ,Maharashtra{" "}
          </h1>
        </div>
        <div className="flex mt-5">
          <p className="mr-2 text-xl md:text-3xl text-blue-600">{<IoCall />}</p>
          <h1 className="  text-gray-700">
          <span className="text-black font-semibold ">Tel</span>:+91-22-26449000/40459000
          </h1>
        </div>
        <div className="flex mt-5">
          <p className="mr-2 text-xl md:text-3xl text-blue-600">{<FaFax />}</p>
          <h1 className="  text-gray-700">
          <span className="text-black font-semibold ">Fax</span>: +91-22-26449019-22 /40459019-22
          </h1>
        </div>
        <div className="flex mt-5">
          <p className="mr-2 text-xl md:text-3xl text-blue-600">
            {<IoMdMailUnread />}
          </p>
          <h1 className="  text-gray-700">
            <span className="text-black font-semibold">E-mail</span> -
            <a
              href="mailto:sebi@sebi.gov.in"
              className="text-blue-500 hover:underline"
            >
              sebi@sebi.gov.in
            </a>
          </h1>
        </div>
        <h1 className="pb-5  text-gray-700 mt-5">
          <span className="text-black font-semibold">
            {" "}
            Toll Free investor Helpline:{" "}
          </span>
          1800 22 75 7575
        </h1>
      </div>
    </div>
    </div>
  );
};

export default ContactForm;

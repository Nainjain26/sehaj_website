import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdAddLocationAlt } from "react-icons/md";

const page = () => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-5xl text-blue-500 font-semibold mb-10 mt-10 ">
        Contact & Support
      </h1>
      <div className="md:flex justify-evenly">
        <div>
          <div>
            <div className="flex mt-10">
              <p className="mr-2 text-3xl md:text-5xl text-blue-700">
                {<IoLocation />}
              </p>
              <h1 className="md:text-2xl text-gray-500">
              6th Floor, Unit no. 611, Princess Business Skypark, Opposite Orbit Mall, A.B Road, INDORE, MADHYA PRADESH, 452001. 
               
              </h1>
            </div>

            <div className="flex mt-5 ">
              <p className="mr-2 text-3xl md:text-5xl text-blue-700">
                {<IoMdMailUnread />}
              </p>
              <h1 className="md:text-2xl" >
                <span className="text-black font-semibold ">E-mail</span> -
                <a
                  href="mailto:84himanshuvyas@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  84himanshuvyas@gmail.com
                </a>
              </h1>
            </div>
            <div className="flex mt-5">
              <p className="mr-2 text-3xl md:text-5xl text-blue-700">
                {<IoCall />}
              </p>
              <h1 className="md:text-2xl text-gray-600">
                {" "}
                +91-9993-985722 , +91-8839-349383
              </h1>
            </div>
            <div className="flex mt-5 mb-20">
              <p className="mr-2 text-3xl md:text-5xl text-blue-700">
                {<MdAddLocationAlt />}
              </p>
              <h1 className="md:text-2xl text-gray-500">
                
               <span className="text-black font-semibold ">Correspondence Address</span> -  Ratlam Road, Vyas Gali, Kushalgarh, Banswara, UDAIPUR,
               RAJASTHAN, 327801
              </h1>
            </div>
          </div>
        </div>
        <div className="">
        <form className="bg-blue-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-2xl text-gray-700  font-bold mb-2" htmlFor="username">
        FullName
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Name"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
        Contact-no.
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Contact-No." type="text" placeholder="Contact-No."/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="username">
        E-mail
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="E-mail" placeholder="E-mail"/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
     
    </div>
  </form>
  \
        </div>
      </div>
    </div>
  );
};

export default page;

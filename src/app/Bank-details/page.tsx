import React from "react";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto px-3">
      <h1 className="mt-10 text-3xl font-semibold text-center text-blue-600 md:text-5xl">
        Bank Account Details
      </h1>
      {/* <div className="md:flex justify-evenly gap-8 items-center  md:h-[80vh]">
        <div className="flex flex-col justify-center text-center md:text-left ">
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">
              Account Holder Name:
             </span>{" "}
            Himanshu vyas
          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">
              Account Number:
             </span>{" "}
            50200089617078
          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">IFSC Code: </span>
            HDFC0007594
          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">UPI-ID: </span>{" "}
            9993985722@hdfcbank
          </h1>
        </div>

        <div className="flex flex-col items-center my-5">
          <div className="flex gap-5">
            <h1 className="mb-5 text-3xl font-semibold text-blue-700">
              QR Transfer
            </h1>
            <img src="/HDB.svg" alt="" className="w-10 h-10 object-contain" />
          </div>
          <img
            src="/hdfc2.jpg"
            alt="QR Code"
            className="w-60 md:w-60 md:h-60"
          />
        </div>

        <div className="my-5">
          <h1 className="mb-2 text-blue-600">Without these details service won't activate</h1>
          <form className="max-w-md mx-auto border border-black md:p-14 p-5 rounded-lg shadow-lg ">
            
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="Name"
                id="name"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
               Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Email address
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="floating_phone"
                  id="floating_phone"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  Phone number 
                </label>
              </div>
            <div className="grid md:grid-cols-2 md:gap-6">
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="State"
                  id="State"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                  State
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  name="Today's date"
                  id="Today's_date"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Today's date
                </label>
              </div>
            </div>
            <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="PAN"
                id="PAN"
                className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              PAN
              </label>
            </div>
             
              <div className="relative z-0 w-full mb-5 group">
                <input
                  type="date"
                  name="Date Of Birth"
                  id="Date_Of_Birth"
                  className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                Date Of Birth
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        
      </div>
  <hr /> */}
      <div className="md:grid grid-cols-2 md:my-32 my-10">
      <div className="flex flex-col justify-center text-center md:text-left ">
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">
              Account Holder Name:
             </span>{" "}
            Himanshu vyas
          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">
              Account Number:
             </span>{" "}
             924020030441032

          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">IFSC Code: </span>
            UTIB0004367

          </h1>
          <h1 className="mt-5 text-xl text-gray-700 md:text-xl">
            <span className="text-lg font-semibold text-black md:text-2xl">UPI-ID: </span>{" "}
            9993985722-4@ybl

          </h1>
        </div>

        <div className="flex flex-col items-center my-5">
          <div className="flex gap-5">
            <h1 className="mb-5 text-3xl font-semibold text-blue-700">
              QR Transfer
            </h1>
            <img src="/AXIS.svg" alt="" className="w-10 h-10 object-contain" />
          </div>
          <img
            src="/hdfc2.jpg"
            alt="QR Code"
            className="w-60 md:w-60 md:h-60"
          />
        </div>

      </div>
    </div>
  );
};

export default page;

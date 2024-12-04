import React from 'react';

const page = () => {
  return (
    <div className="overflow-x-hidden mb-10">
      <h1 className="mt-10 text-3xl font-semibold text-center text-blue-500 md:text-5xl">
        Bank Account Details
      </h1>

      <div className='flex flex-col gap-36'>
      <div className="grid items-center gap-10 px-5 mt-20 md:grid-cols-3">
        {/* Bank Logo */}
        <div className="flex justify-center">
          <img
            src="/hdfc.png"
            alt="HDFC Bank Logo"
            className="w-40 md:w-72"
          />
        </div>

        {/* Bank Details */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">Account Holder Name:</span> Saksham Shrotriya
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">Account Number:</span> 50100311315845
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">IFSC Code:</span> HDFC0001781
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">UPI-ID:</span> sakshamshrotriyahcc@ybl
          </h1>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center">
          <h1 className="mb-5 text-3xl font-semibold text-blue-700">QR Transfer</h1>
          <img
            src="/QR.jpg"
            alt="QR Code"
            className="w-40 md:w-60"
          />
        </div>
      </div>
      



      <div className="grid items-center gap-10 px-5 mt-20 md:grid-cols-3">
       
        <div className="flex justify-center">
          <img
            src="/axis.png"
            alt="HDFC Bank Logo"
            className="w-40 md:w-72"
          />
        </div>

       
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">Account Holder Name:</span> NA
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">Account Number:</span> NA
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">IFSC Code:</span> NA
          </h1>
          <h1 className="mt-5 text-xl text-gray-500 md:text-xl">
            <span className="text-xl text-black md:text-2xl">UPI-ID:</span> NA
          </h1>
        </div>

        
        <div className="flex flex-col items-center">
          <h1 className="mb-5 text-3xl font-semibold text-blue-700">QR Transfer</h1>
          <img
            src="/QR.jpg"
            alt="QR Code"
            className="w-40 md:w-60"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default page;
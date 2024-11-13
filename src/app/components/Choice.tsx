import React from "react";

const Choice = () => {
  return (
    <div className="mt-20  md:grid grid-cols-2 ">
    <div className="md:grid grid-cols-2  m-10 gap-10">
      {/* Left Side Cards */}
      <div className="p-10  shadow-blue-2xl rounded-2xl transition-all hover:scale-110 hover:bg-blue-50 mb-8">
        <img src="/preview-9 1.png" alt="" width={150} height={150} className="bounce-animation" />
        <h1 className=" text-xl md:text-2xl font-semibold pb-2">Qualified Researcher</h1>
        <p className="text-gray-500">We fight the hardest conditions with hardest resources.</p>
      </div>
      <div className="p-10 shadow-blue-2xl rounded-2xl transition-all hover:scale-110 hover:bg-blue-50 mb-8">
        <img src="/preview-32-p-500 1.png" alt="" width={150} height={150} className="bounce-animation" />
        <h1 className="text-xl md:text-2xl font-semibold pb-2">Fast Response</h1>
        <p className="text-gray-500">Help your most hard working muscle keep working.</p>
      </div>
      <div className="p-10 shadow-blue-2xl rounded-2xl transition-all hover:scale-110 hover:bg-blue-50 mb-8">
        <img src="/preview-1 7.png" alt="" width={150} height={150} className="bounce-animation" />
        <h1 className="text-xl md:text-2xl font-semibold pb-2">Easy Reports</h1>
        <p className="text-gray-500">Detailed and easy to understand Weekly & on-time reporting.</p>
      </div>
      <div className="p-10 shadow-blue-2xl rounded-2xl transition-all hover:scale-110 hover:bg-blue-50 mb-8">
        <img src="/preview-6 1.png" alt="" width={150} height={150} className="bounce-animation" />
        <h1 className="text-xl md:text-2xl font-semibold pb-2">Safe & Secure</h1>
        <p className="text-gray-500">Your data will be taken care of in the best possible way.</p>
      </div>
    </div>
    
    {/* Right Side Content */}
    <div className=" flex flex-col order-1 md:order-2 items-center justify-center ml-10">
      <h1 className="text-3xl md:text-5xl font-semibold mb-10">Why Choose Us..?</h1>
      <p className="md:text-xl text-gray-500">
        At Sahaj Research Services, we pride ourselves on delivering top-notch, reliable services tailored to meet your unique needs. With a team of qualified researchers, we ensure every project is backed by expertise and precision. Our fast response times mean you can count on us to be there when it matters most, providing swift support and updates. We simplify complex information with easy-to-understand reports, so you get clear insights without the hassle. And with our commitment to being safe and secure, your data is always protected, giving you peace of mind as we work together.
      </p>
    </div>
  </div>
  
  );
};

export default Choice;

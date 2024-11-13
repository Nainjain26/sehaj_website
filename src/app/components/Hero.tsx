import React from "react";

const Hero = () => {
  return (
    <div className=" md:flex  justify-evenly max-w-7xl mx-auto pt-28">
    
      <div>
        <h1 className=" text-3xl md:text-6xl font-bold  text-blue-600 ">
          Harnessing Data 
        </h1>
       
        <h1 className=" text-2xl md:text-4xl font-bold pt-5  ">
          For Informed Investment Decisions
        </h1>
        <p className="  pt-5  text-gray-600 ">
          At Sahaj Research Services, we empower investors like you with
          meticulously curated research services tailored for the dynamic world
          of stock market . With years of expertise, we provide comprehensive
          analysis and tools to bring clarity to your decision-making process.
          Our philosophy revolves around empowering you with strategies that you
          truly own, ensuring they work effectively for your goals.{" "}
        </p>
        <div className="flex gap-5 pt-5">
          <div className="p-3 shadow-xl rounded-xl ">
            <h1 className="text-blue-500 font-semibold text-xl ">
              Live support
            </h1>
            <p className="py-1  text-gray-500">In-person or online</p>
          </div>
          <div className=" p-3 shadow-xl rounded-xl">
            <h1 className="text-blue-500 font-semibold text-xl ">
            Latest Track sheet
            </h1>
            <p className="py-1  text-gray-500">For transparent services</p>
          </div>
          <div className=" p-3 shadow-xl rounded-xl">
            <h1 className="text-blue-500 font-semibold text-xl ">
            Weakly Updates
            </h1>
            <p className="py-1  text-gray-500">Stay connected</p>
          </div>
        </div>
      </div>
      {/* <div>
      <img src="/preview-19 1.png" alt="" width={3000} height={3000} />
      </div> */}

    </div>
   
    
  );
};

export default Hero;

"use client"
import React from 'react'



const Work = () => {
  return (
    <div className='my-20 bg-blue-50'>
      <h1 
       className='text-center font-semibold text-2xl md:text-4xl pt-10 mb-5'>How does it work...?</h1>
      <p className='text-center text-gray-500 mb-10  md:text-xl max-w-5xl mx-auto'>From immunizations to checkups and  preventive care,  exams, our primary care physicians and providers work to keep you and your whole family healthy and strong each and every day.</p>
      <div className='md:grid grid-cols-2  gap-10  '>
       <div className='mx-10 flex flex-col items-center justify-center'>
        <div className='flex items-center  md:border p-3 md:mt-5 md:rounded-full  md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer'>
            <p className='bg-blue-500 p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full'>1</p>
            <div className='ml-3'>
                <p className='text-xl md:text-2xl pb-2  font-semibold '>Get matched with the right Analyst for you.</p>
                <p className='text-gray-500'>From immunizations to checkups and  preventive care,  exams, our primary care physicians and providers work to keep you and your whole family healthy and strong each and every day.</p>
            </div>
        </div>
        <div className='flex pt-5 items-center md:border p-3 md:mt-5 md:rounded-full  md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer'>
            <p className='bg-blue-500 p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full'>2</p>
            <div className='ml-3'>
                <p className='text-xl md:text-2xl pb-2  font-semibold'>Choose a date and time.</p>
                <p className='text-gray-500'>From immunizations to checkups and  preventive care,  exams, our primary care physicians and providers work to keep you and your whole family healthy and strong each and every day.</p>
            </div>
        </div>
        <div className='flex pt-5 items-center  md:border p-3 md:mt-5 md:rounded-full  md:transition md:hover:scale-105 md:hover:shadow-xl md:hover:bg-slate-50 cursor-pointer'>
            <p className='bg-blue-500 p-5 shadow-xl text-center text-white text-2xl md:text-4xl font-semibold mx-auto rounded-full'>3</p>
            <div className='ml-3'>
                <p className='text-xl md:text-2xl pb-2  font-semibold'>Meet in the comfort of your own home.</p>
                <p className='text-gray-500'>From immunizations to checkups and  preventive care,  exams, our primary care physicians and providers work to keep you and your whole family healthy and strong each and every day.</p>
            </div>
        </div>
       </div>
       <div className='items-center order-1 md:order-2 mx-10' >
        
        <img src="/Work From Home 3D Model.png" alt="" className=' h-[300px] md:h-[600px]' />
       </div>
      </div>
    </div>
  )
}

export default Work

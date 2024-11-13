import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='md:text-5xl text-3xl text-blue-500 font-semibold mt-10 text-center'>Bank Account Details</h1>
      <div className='md:flex justify-evenly mt-20'>
          <div className=' flex flex-col justify-center'>
            <h1 className='text-gray-500 text-xl md:text-2xl'>
                <span className='text-2xl md:text-3xl text-black'>Bank Name</span>- HDFC Bank
            </h1>
            <h1 className='text-gray-500 mt-5 text-xl md:text-2xl'>
                <span className='text-2xl md:text-3xl text-black'>Account Holder Name</span>- Himanshu Vyas
            </h1>
            <h1 className='text-gray-500 mt-5 text-xl md:text-2xl'>
                <span className='text-2xl md:text-3xl text-black'>Account Number</span>- 50200089617078
            </h1>
            <h1 className='text-gray-500 mt-5 mb-20 text-xl md:text-2xl'>
                <span className='text-2xl md:text-3xl text-black'>IFSC Code</span>- HDFC0007594
            </h1>
            
          </div>
          <div>
            <h1 className='mb-5 text-3xl text-blue-700 font-semibold'>QR Transfer</h1>
            <img src="/QR-IMG.webp" alt="" className='mb-20' />
          </div>
      </div>
    </div>
  )
}

export default page

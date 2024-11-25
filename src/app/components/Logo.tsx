import React from 'react'
import Cards from './Cards'

const Logo = () => {
  return (
    <div className='my-20'>
    <div className='max-w-7xl mx-auto  md:grid-cols-4 grid grid-cols-2  gap-4 mt-10 '>
      <div><Cards image={"1.svg"} name={"Coal India"} /></div>
      <div><Cards image={"sail.svg"} name={"Sail"} /></div>
      <div><Cards image={"tata.svg"} name={"Tata"} /></div>
      <div><Cards image={"4.svg"} name={"BOI"} /></div></div>
      <div className='max-w-7xl mx-auto md:grid-cols-4  mt-10 grid grid-cols-2 gap-4'>
      <div><Cards image={"ITC.NS.png"} name={"ITC"} /></div>
      <div><Cards image={"hdfc.svg"} name={"HDFCBank"} /></div>
      <div><Cards image={"infosys.svg"} name={"Infosys"} /></div>
      <div><Cards image={"BANDHAN.svg"} name={"Bandhan"} /></div></div>
      
    
    </div>
  )
}

export default Logo
"use client";

// import Image from "next/image";
import Hero from "./components/Hero";
import Choice from "./components/Choice";
import Option from "./components/Option";
import Work from "./components/Work";
import Logo from "./components/Logo";



export default function Home() {
  return (
    <div>
      
      <Hero />
      <Choice />
      
      <Work />
      <Option />
      <Logo/>
      
    </div>
  );
}

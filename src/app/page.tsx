"use client";

// import Image from "next/image";
import Hero from "./components/Hero";
import Choice from "./components/Choice";
import Option from "./components/Option";
import Work from "./components/Work";
// import Alert from "./components/Alert";
// import { useState } from "react";

export default function Home() {
  return (
    <div>
      
      <Hero />
      <Choice />
      <Work />
      <Option />
    </div>
  );
}

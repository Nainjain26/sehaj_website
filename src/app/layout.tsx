// "use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Random from "./components/Random";
// import { useState } from "react";
// import Alert from "./components/Alert";
// import Hero from "./components/Hero";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sahaj Research Services",
  description:
    "Sehej Research delivers real-time data, analytics, and strategies to help investors make informed decisions and unlock opportunities in the ever-evolving stock market.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const [alert, setAlert] = useState(true);
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {alert && <Alert setAlert={setAlert} />} */}
      
        <Random>{children}</Random>
      </body>
    </html>
  );
}

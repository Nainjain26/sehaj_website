"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
};

const navItems: NavItem[] = [
  { label: "Home", link: "/" },
  { label: "Complaint-status", link: "/complaint-status" },
  { label: "Pricing", link: "/pricing" },
  { label: "Bank-details", link: "/Bank-details" },
  { label: "Contact-Us", link: "/Contact-Us" },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);

  const openSideMenu = () => setSideMenue(true);
  const closeSideMenu = () => setSideMenue(false);

  return (
    <div className="flex justify-evenly items-center px-10 py-5 text-sm z-[2000]">
      
      {/* Left side with logo */}
       
      <section ref={animationParent} className="flex items-center">
        <Link href={"/"}>
          <Image src="/logo1.png" alt="logo" height={150} width={150} />
        </Link>
      </section>
      <section className="">
        <h1 className="text-xl font-semibold">Himanshu vyas</h1>
        <p className="text-sm">SEBI No. - INH000014854</p>
        <p className="text-sm">GST No.- 23AHJPV6186G1ZW </p>
        
      </section>

      {/* Desktop Navigation */}
      <section className="hidden md:flex items-center gap-4 transition-all">
        {navItems.map((d, i) => (
          <Link key={i} href={d.link ?? "/"} className="relative group px-2 py-3 transition-all">
            <p className="flex cursor-pointer items-center text-xl pt-5 font-semibold gap-2 text-black hover:text-blue-500">
              <span>{d.label}</span>
              {d.children && <IoIosArrowDown className="rotate-180 transition-all group-hover:rotate-0" />}
            </p>

            {/* Dropdown */}
            {d.children && (
              <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex z-[2000]">
                {d.children.map((ch, i) => (
                  <Link key={i} href={ch.link ?? "/"} className="flex cursor-pointer items-center font-semibold text-xl py-1 pl-6 pr-8 text-black hover:text-blue-500">
                    <span className="whitespace-nowrap pl-3">{ch.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </Link>
        ))}
      </section>

      {/* Mobile Menu Button */}
      <FiMenu onClick={openSideMenu} className="cursor-pointer text-4xl md:hidden" />

      {/* Mobile Navigation */}
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden z-[2000]">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem key={i} label={d.label} link={d.link}>
              {d.children}
            </SingleNavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  const toggleItem = () => setItem(!isItemOpen);

  return (
    <Link ref={animationParent} onClick={toggleItem} href={d.link ?? "#"} className="relative px-2 py-3 transition-all">
      <p className="flex cursor-pointer items-center gap-2 font-semibold text-black hover:text-blue-500">
        <span>{d.label}</span>
        {d.children && <IoIosArrowDown className={`text-xs transition-all ${isItemOpen && "rotate-180"}`} />}
      </p>

      {/* Dropdown */}
      {isItemOpen && d.children && (
        <div className="w-auto flex-col gap-1 rounded-lg bg-white py-3 transition-all flex">
          {d.children.map((ch, i) => (
            <Link key={i} href={ch.link ?? "/"} className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-black hover:text-blue-500">
              <span className="whitespace-nowrap pl-3">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}

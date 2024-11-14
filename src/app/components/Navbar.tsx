/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

// import logo from "@/assets/images/logo.svg";
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
  
  {
    label: "Home",
    link: "/"
  },
  
  {
    label: "complaint-status",
    link: "/complaint-status",
    
  },
  {
    label: "pricing",
    link: "/pricing"
  },
  {
    label: "Bank-details",
    link: "/Bank-details"
  },
 
  {
    label: "Contact-Us",
    link: "/Contact-Us"
  },
  // {
  //   label: "Refund-policies",
  //   link: "/Refund-policies"
  // },
  {
    label: "More",
    link: "/",
    children: [
      // {
      //   label: "Disclaimer",
      //   link: "/Disclaimer",
       
      // },
      {
        label: "Disclosure",
        link: "/Disclosure",
       
      },
      {
        label: "Refund-policies",
        link: "/Refund-policies"
      },
      {
        label: "Privacy-policy",
        link: "/Privacy-policy",
        
      },
      {
        label: "Terms-&-condition",
        link: "/Terms-&-condition",
        
      },
      
      {
        label: "Invester-charter",
        link: "/Invester-charter",
       
      },
      {
        label: "Grievance Redressal Process",
        link: "/Grievance-Redressal-Process"
       
      }
    ]
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  justify-evenly px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center ">
        {/* logo */}
        <Image src="/Frame 2.svg" alt=" logo" height={150} width={150}/>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />} 
        </section>
        <section>
        <div className="hidden md:flex items-center gap-4 transition-all ">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "/"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center text-xl font-semibold gap-2 text-black hover:text-blue-500 ">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>

              {/* dropdown */}
              {d.children && (
                <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "/"}
                      className=" flex cursor-pointer items-center font-semibold text-xl  py-1 pl-6 pr-8  text-black hover:text-blue-500  "
                    >
                      
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
        {/* navitems */}
      </section>

      

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              // iconImage={d.iconImage}
              link={d.link}
            >
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

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 font-semibold text-black hover:text-blue-500 ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "/"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-black hover:text-blue-500   "
            >
              
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
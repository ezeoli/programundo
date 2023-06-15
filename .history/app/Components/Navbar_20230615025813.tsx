import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [navbar, setNavbar] = useState (false);

  return (
    <div>
    <nav className="w-full bg-gray-500 fixed top-0 left-0 right-0 z-10">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
                <div className="flex items-center justify-between py-3 md:py-4 md:block">
                    <Link href={"/"}>
                      <Image
                        src="/Logo.png"
                        width={60}
                        height={60}
                        sizes="100vw"
                        alt="programundo"
                      />
                    </Link>
                    <h1 className="md:hidden" >Programundo</h1>
                    <div className="md:hidden">
                      
                      <button 
                        className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border" 
                        onClick={()=>setNavbar(!navbar)}>
                        {navbar ? (
                          <Image src="/Close.png" width={30} height={30} alt="close icon button"/>
                        ):(
                          <Image src="/Menu.png" width={30} height={30} alt="menu icon button" className="focus:border-none active:border-none"/>
                        )}
                      </button>
                    </div>
                </div>
          </div>  
          <div>
              <div 
                  className={`flex-1 justify-self-center pb-3 mt-6 md:block md:pb-0 md:mt-0 
                  ${navbar?'p-12 md:p-0 block':'hidden'}`}>
                    <ul className="h-screen md:h-auto items-center justify-center md:flex">
                      <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                        <Link href="#aboutUs" onClick={()=>setNavbar(!navbar)}>About us</Link>
                      </li>
                      <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                        <Link href="#products" onClick={()=>setNavbar(!navbar)}>Our products</Link>
                      </li>
                      <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                        <Link href="#clients" onClick={()=>setNavbar(!navbar)}>Clients</Link>
                      </li>
                      <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                      <Link href="#Contact" onClick={()=>setNavbar(!navbar)}>Contact</Link>
                      </li>
                    </ul>
              </div>
          </div>
      </div>
      
    </nav>
    </div>
  );
}

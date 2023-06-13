import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useState } from "react";

type Props = {};

export default function Navbar({}: Props) {
  const [navbar, setNavbar] = useState (false);

  const links = <div className={`md:block ${navbar?'block':'hidden'}`} >
                  <ul className="md:h-auto md:flex cursor-pointer h-screen ">
                      <Link href="/#aboutUs" onClick={()=>setNavbar(!navbar)}>
                        <li className="text-xl px-5 text-center py-3 hover:bg-white md:hover:bg-transparent hover:text-black">About us</li>
                      </Link>
                      <Link href="/products" onClick={()=>setNavbar(!navbar)}>
                        <li className="text-xl px-5 text-center py-3 hover:bg-white md:hover:bg-transparent hover:text-black">Our products</li>
                      </Link>
                      <Link href="/#clients" onClick={()=>setNavbar(!navbar)}>
                        <li className="text-xl px-5 text-center py-3 hover:bg-white md:hover:bg-transparent hover:text-black">Clients</li>
                      </Link>
                      <Link href="/contact" onClick={()=>setNavbar(!navbar)}>
                        <li className="text-xl px-5 text-center py-3 hover:bg-white md:hover:bg-transparent hover:text-black">Contact</li>
                      </Link>
                  </ul>
                </div>;

  return (
    <nav className="w-full bg-gray-500 p-4 text-white">
      <div className="flex justify-between md:flex md:align-middle">
          <div className="flex items-center justify-left">
                <Link href={"/"}>
                  <Image
                    src="/Logo.png"
                    width={60}
                    height={60}
                    sizes="100vw"
                    alt="programundo"
                  />
                </Link>
          </div>
          <div className="md:hidden">
            <button className="rounded" onClick={()=>setNavbar(!navbar)}>
              {navbar ? (
                <Image src="/Close.png" width={50} height={50} alt="close icon button"/>
              ):(
                <Image src="/Menu.png " width={50} height={50} alt="menu icon button"/>
              )}
            </button>
          </div>
          {navbar?"":links}
      </div>
      {navbar?links:""}
    </nav>
  );
}

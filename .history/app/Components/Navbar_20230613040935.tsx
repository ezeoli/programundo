import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="flex bg-gray-400 h-16">
      <Link href={"/"}>
        <Image
          src="/Logo.png"
          width="0"
      height="0"
      sizes="100vw"
      className="w-1/8 h-auto p-2" 
          
          alt="programundo"
        />
      </Link>
      <Link href="/#aboutUs" className="flex-auto text-blue-800 ml-20 p-5">
        About us
      </Link>
      <Link href="/products" className="flex-auto text-blue-800 p-5">
        Our products
      </Link>
      <Link href="/#clients" className="flex-auto text-blue-800 p-5">
        Clients
      </Link>
      <Link href="/contact" className="flex-auto text-blue-800 p-5">
        Contact
      </Link>
    </nav>
  );
}

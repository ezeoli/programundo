import React from 'react'
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className="flex  bg-gray-400 h-16">
          <Image src="/LOGO.png" width={70} height={70} alt="programundo" />
          <Link href="/aboutUs" className="flex-auto text-blue-800 p-2">
            About us
          </Link>
          <Link href="/products" className="flex-auto text-blue-800 p-2">
            Our products
          </Link>
          <Link href="/clients" className="flex-auto text-blue-800 p-2">
            Clients
          </Link>
          <Link href="/contact" className="flex-auto text-blue-800 p-2">
            Contact
          </Link>
        </nav>
  )
}
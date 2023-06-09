import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";

type Props = {};

export default function contact({}: Props) {
  return (
    <>
      <nav className="flex  bg-gray-400 h-16">
        <Link href={"/"}>
          <Image src="/LOGO.png" width={70} height={70} alt="programundo" />
        </Link>
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
      <section id="contact">
        <h2 className="text-2xl font-bold text-center">Contact</h2>
        <Image
          src="/programundo4.jpg"
          width={500}
          height={500}
          alt="programundo"
        />
        <p>
          This is the Contact section. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Id dicta dolore, facere quisquam aliquid alias
          nostrum qui, aut tenetur nam fuga provident minima enim magni
          cupiditate excepturi modi, hic accusantium.
        </p>
      </section>
    </>
  );
}

import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";

type Props = {};

export default function contact({}: Props) {
  return (
    <>
      <Navbar />
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

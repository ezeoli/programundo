import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";

type Props = {};

export default function AboutUs({}: Props) {
  return (
    <>
      <Navbar />

      
      <section id="about">
        <h2 className="text-2xl font-bold">About us</h2>

        <Image
          src="/programundo2.jpg"
          width={500}
          height={500}
          alt="programundo"
        />
        <p>
          This is the About section. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolorem rerum eveniet fuga praesentium asperiores
          eos deleniti doloremque quibusdam consectetur sunt similique tempora
          architecto obcaecati maiores, tempore natus aperiam ipsum totam.
        </p>
        <Link href={"/"}>Go to Home</Link>
      </section>
    </>
  );
}

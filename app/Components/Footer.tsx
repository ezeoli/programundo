import React from 'react'
import Image from "next/image";
import "../globals.css";
import Link from 'next/link';

type Props = {}

export default function Footer({}: Props) {
  return (
    <>
        <h1 className="text-blue-800 text-center text-2xl ">
          We are the next generation of code solutions
        </h1>
        <Image
          src="/programundo3.jpg"
          width={500}
          height={500}
          alt="programundo"
          className=" rounded "
          style={{ display: "block", margin: "0 auto" }}
          />
    </>
  )
}
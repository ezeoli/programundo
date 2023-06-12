import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className=" flex justify-around bg-slate-300">

        <div className="m-5">
          <Image
            src="/programundo3.jpg"
            width={100}
            height={100}
            alt="programundo"
            className="rounded "
            style={{ display: "block", margin: "0 auto" }}
          />
          <h1 className="text-blue-800 text-center text-sm ">
            We are the next generation <br /> of code solutions
          </h1>
        </div>

        <div className="m-5">
          servicio
        </div>

        <div className="m-5">
          Newsletter
        </div>
      </div>
    </>
  );
}

import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import about from "../Data/aboutUs.json"

type Props = {};

export default function About({}: Props) {
  return (
    <section id="about">
      <h2 className="text-4xl font-bold p-5">{about.title}</h2>

      <div className="sm:flex">
        <Image
          className="rounded-md mx-5 w-1/2 h-auto"
          src={about.image}
          width="0"
          height="0"
          sizes="100vw"
          alt="programundo"
        />

        <div>
          <p className="p-10 m-10">
            {about.description}
          </p>
          <Link href={"#Contact"}>
            <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md flex m-20">
             {about.buttonContact}
            </button>
          </Link>
        </div>
      
      </div>
      <br />
    </section>
  );
}

import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

type Props = {};

export default function About({}: Props) {
  return (
    <section id="about">
      <h2 className="text-4xl font-bold p-5">About us</h2>

      <div className="sm:flex">
        <Image
          className="rounded-md mx-5 w-1/3 h-auto"
          src="/programundo2.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="programundo"
        />

        <div>
          <p className="p-10 m-10">
            This is the About section. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem rerum eveniet fuga praesentium asperiores
            eos deleniti doloremque quibusdam consectetur sunt similique tempora
            architecto obcaecati maiores, tempore natus aperiam ipsum totam.
          </p>
          <Link href={"/contact"}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded-md flex m-20">
              Contact
            </button>
          </Link>
        </div>
      
      </div>
      <br />
    </section>
  );
}

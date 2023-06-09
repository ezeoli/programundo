import React from 'react'
import Image from "next/image";
import "../globals.css";
import Link from 'next/link';


type Props = {}

export default function About({}: Props) {
  return (
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
          
          <Link href={'/contact'}>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Contact</button>
          </Link>
        </section>
  )
}
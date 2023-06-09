import React from 'react'
import Image from "next/image";
import "../globals.css";


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
        </section>
  )
}
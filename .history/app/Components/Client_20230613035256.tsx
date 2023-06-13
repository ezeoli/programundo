import React from 'react'
import Image from "next/image";
import "../globals.css";


type Props = {}

export default function Client({}: Props) {
  return (
    <section id="clients">
    <h2 className="text-2xl font-bold ">Clients</h2>
    <Image
      src="/programundoLOGO.jpg"
      width={500}
      height={500}
      
      alt="programundo"
    />

    <p>
      This is the Clients section. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Iste ab amet quo autem quisquam officia earum illo,
      eaque repellat hic esse quos molestias veniam voluptates, eius at
      similique quibusdam aperiam?
    </p>
  </section>
  )
  
}
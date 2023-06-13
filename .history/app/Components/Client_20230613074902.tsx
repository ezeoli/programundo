import React from 'react'
import Image from "next/image";
import "../globals.css";


type Props = {}

export default function Client({}: Props) {
  return (
    <section id="clients">
    <h2 className="text-2xl font-bold ">Clients</h2>
    
    <div className="sm:flex">
    <Image
      src="/programundoLOGO.jpg"
      width="0"
      height="0"
      sizes="100vw"
      className="rounded-md mx-5 w-1/2 h-auto" 
      alt="programundo"
    />

    <p className="p-10 m-10">
      This is the Clients section. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Iste ab amet quo autem quisquam officia earum illo,
      eaque repellat hic esse quos molestias veniam voluptates, eius at
      similique quibusdam aperiam?
    </p>
    </div>
  </section>
  )
  
}
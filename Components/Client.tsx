import React from 'react'
import Image from "next/image";
import "../app/globals.css";
import { useRouter } from 'next/router';
import { useIdiomas } from '@/hooks/idiomas';


type Props = {}

export default function Client({}: Props) {
  const t = useIdiomas({});

  return (
    <section id={t.id.clients}>
    <h2 className="text-4xl font-bold p-5">Clients</h2>
    
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
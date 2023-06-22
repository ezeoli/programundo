import React from 'react'
import Image from "next/image";
import "../globals.css";
import { useIdiomas } from '@/hooks/idiomas';

type Props = {}

export default function Products({}: Props) {
  const t = useIdiomas({});


  return (
    <section id={t.id.products}>
    <h2 className="text-4xl font-bold p-5">Our Works</h2>
    
    <div className="sm:flex">
    <Image
      src="/programundo4.jpg"
      width="0"
      height="0"
      sizes="100vw"
      className="rounded-md mx-5 w-1/2 h-auto" 
      alt="programundo"
    />
    <div>
    <p className="p-10 m-10">
      This is the Products section. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Iste ab amet quo autem quisquam officia earum
      illo, eaque repellat hic esse quos molestias veniam voluptates, eius
      at similique quibusdam aperiam?
    </p>
    </div>
    </div>
  </section>
  )
}
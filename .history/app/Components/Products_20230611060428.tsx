import React from 'react'
import Image from "next/image";
import "../globals.css";

type Props = {}

export default function Products({}: Props) {
  return (
    <section id="products">
    <h2 className="text-2xl font-bold">Our Products</h2>
    <Image
      src="/programundo4.jpg"
      width={500}
      height={500}
      alt="programundo"
    />

    <p>
      This is the Products section. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Iste ab amet quo autem quisquam officia earum
      illo, eaque repellat hic esse quos molestias veniam voluptates, eius
      at similique quibusdam aperiam?
    </p>
  </section>
  )
}
import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { useIdiomas } from "@/hooks/idiomas";

type Props = {};

export default function About({}: Props) {
  
  const t = useIdiomas({});
  
  return (
    <section id={t.id.about}>
      <h2 className="text-4xl font-bold p-5">{t.about.title}</h2>
      <div className="sm:flex">
        <Image
          className="rounded-md mx-5 w-1/2 h-auto"
          src={t.about.image}
          width="0"
          height="0"
          sizes="100vw"
          alt="programundo"
        />

        <div>
          <p className="p-10 m-10">
            {t.about.description}
          </p>
        </div>
      
      </div>
      <br />
    </section>
  );
}

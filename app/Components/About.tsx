import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import { useIdiomas } from "@/hooks/idiomas";
import imagen from '../../public/programundo2.png'

type Props = {};

export default function About({}: Props) {
  const t = useIdiomas({});

  return (
    <section id={t.id.about}>
      <div className="p-4  mt-20 md:mt-30">
          <h2 className="text-3xl md:text-4xl pt-15 font-bold text-blue-800 text-center">
              {t.about.title}
          </h2>
      </div>
      <div className="flex xs:flex-col-reverse md:grid md:grid-cols-2 m-2 p-4 items-center">
        <div className="md:col-span-1 items-center md:block xs:hidden">
        <Image
          key={t.id.about}
          src={imagen}
          alt={t.about.title}
          className="rounded-[100%] p-20"
        />
        </div>
        <div className="flex flex-col p-2 m-2 md:col-span-1 items-center text-lg">
          <h3 className="m-4 text-2xl">{t.about.subtitle}</h3><br/>
          <p>{t.about.paragraph1}</p><br/>
          <p>{t.about.paragraph2}</p><br/>
          <Link href={"#Contact"} className='xs:w-full md:w-fit justify-center'>
              <button 
                  className="xs:w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md justify-center " 
                  aria-label={t.about.button}>
                  {t.about.button}
              </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

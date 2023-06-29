import React from 'react'
import Image from "next/image";
import "../globals.css";
import { useIdiomas } from '@/hooks/idiomas';
import Link from 'next/link';

type Props = {}

export default function Products({}: Props) {
  const t = useIdiomas({});


  return (
    <section id={t.id.products} className='p-2 m-2'>
      <div className="p-4 mt-20 md:mt-30 ">
          <h2 className="text-4xl pt-15 font-bold text-blue-800 text-center">
              {t.products.title}
          </h2><br/>
          <h1 className="text-2xl text-center">{t.products.subtitle}</h1>
      </div>
      <div className="flex flex-wrap md:flex-row items-center justify-around p-2 m-2 ">
          {t.works.map((b:any)=>(
                              <Link
                                href={b.href}
                                key={b.button}
                                className= "p-2 m-4 items-center align-center text-center cursor-pointer text-primary font-medium hover:text-secondary"
                              >
                                <Image
                                  key={b.button}
                                  src={b.imagen}
                                  width={350}
                                  height={0}
                                  alt={t.products.title}
                                  aria-label={b.button}
                                  className="rounded-md shadow-md hover:drop-shadow-xl"
                                /> 
                                <h3 className= "p-2">{b.button}</h3>
                              </Link>
                          ))} 
      
      </div>
      <div className="flex flex-col p-2 m-2 items-center text-lg">
          <p>{t.products.paragraph1}</p><br/>
          <p>{t.products.paragraph2}</p><br/>
      </div>
      <Link href={"#Contact"} className="flex justify-center align-center p-2 m-2 ">
              <button 
                  className=" w-full md:w-fit bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md" 
                  aria-label={t.products.button}>
                  {t.products.button}
              </button>
          </Link>
    </section>
  );
}

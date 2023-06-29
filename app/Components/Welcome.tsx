import React from 'react'
import { useIdiomas } from '@/hooks/idiomas';
import "../globals.css";
import Carrusel from './Carrusel';
import Link from 'next/link';

type Props = {}

export default function Welcome({}: Props) {

  const t = useIdiomas({});
  
  return (
        <React.Fragment>
            <div className="p-4 m-2">
                <h1 className="text-4xl mt-20 md:mt-30 pt-10 font-bold text-blue-800 text-center">
                    {t.welcome.title}
                </h1>
            </div>
            <div className="flex xs:flex-col-reverse md:grid md:grid-cols-2 m-2 p-4">
                <div className="flex flex-col p-2 m-4 md:col-span-1 items-center text-lg">
                    <h2 className="m-4 text-2xl">{t.welcome.subtitle}</h2>
                    <p>{t.welcome.paragraph1}</p><br/>
                    <p>{t.welcome.paragraph2}</p><br/>
                    <Link href={"#Contact"} className='xs:w-full md:w-fit justify-center'>
                        <button className="xs:w-full bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md justify-center " aria-label={t.welcome.button}>
                            {t.welcome.button}
                        </button>
                    </Link>
                </div>
                <div className="md:col-span-1 items-center md:mt-12">
                    <Carrusel/>
                </div>
            </div>
            
        </React.Fragment>
        )
};
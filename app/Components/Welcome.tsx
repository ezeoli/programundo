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
            <div className="flex xs:flex-col-reverse md:flex-row p-2 m-2 p-4">
                <div className="p-2 m-4">
                    <h2>{t.welcome.paragraph1}</h2><br/>
                    <h2>{t.welcome.paragraph2}</h2><br/>
                    <Link href={"#Contact"}>
                        <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md flex m-20" aria-label={t.about.buttonContact}>
                            {t.about.buttonContact}
                        </button>
                    </Link>
                </div>
                <Carrusel/>
            </div>
        </React.Fragment>
        )
};
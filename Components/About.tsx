import React from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import { useIdiomas } from "@/hooks/idiomas";

type Props = {};

export default function About({}: Props) {
  const t = useIdiomas({});

  return (
    <section id={t.id.about}>
      <h2 className="text-5xl font-bold px-10 py-20  ">{t.about.title}</h2>
      <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-34  mx-8">
        <img
          src={t.about.image}
          alt=""
          className=" rounded-lg  xs:px-10 md:px-20 "
        />
        <div className="lg:max-w-lg">
          <p className="text-lg  text-darkBlueGray-400 ml-5 leading-loose">
            {t.about.description}
          </p>
        </div>
      </div>
    </section>
  );
}

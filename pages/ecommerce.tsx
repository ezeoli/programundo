import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useIdiomas } from "@/hooks/idiomas"


type Props = {};

export default function Ecommerce({}: Props) {

    const t = useIdiomas({});

  return (
    <>
      <h2 className="text-4xl font-bold p-5">{t.ecommerce.title}</h2>

      <div className="sm:flex">
        <Image
          className="rounded-md mx-5 w-1/2 h-auto"
          src={t.ecommerce.image} //
          width="0"
          height="0"
          sizes="100vw"
          alt="programundo"
        />

        <div>
          <p className="p-10 m-10">{t.ecommerce.description}</p>
          <Link href={"/#Contact"}>
            <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-10 rounded-md flex m-20">
              {t.ecommerce.button}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

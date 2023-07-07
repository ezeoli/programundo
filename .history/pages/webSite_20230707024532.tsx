import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useIdiomas } from "@/hooks/idiomas";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function webSite({}: Props) {

    const t = useIdiomas({});

  return (
    <>
    <Navbar/>
    <div className="md:px-20 px-4 mx-auto">
      <div className="mt-20 text-center">
        <a className="mb-5 py-20 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-500">
          {t.webSite.title}

        </a>
      </div>
      <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-44 mt-20">
        <Image
          src={t.webSite.image}
          priority={true}   
          width={200}
          height={200}
          alt=""
          className="rounded-md"
        />
        <div className="lg:max-w-lg">
          <h2 className="mb-10 font-heading font-medium text-7xl xl:text-8xl leading-snug">
          {t.webSite.title1}

          </h2>
          <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
          {t.webSite.descriptiont1}

          </p>
          
          
          
          <Link
            href={"/#"+t.id.contact}
            className="mb-6 mt-3 px-2 py-2 w-48 bg-[#BB2649] border-b border-gray-100 text-white hover:bg-[#A8133A] rounded text-sm text-center items-center font-semibold drop-shadow-lg"
          >
            {t.webSite.button1}

          </Link>
        </div>
      </div>
      <div className="md:px-20 px-4 mx-auto">
        <div className="mb-20 lg:mb-0 w-full lg:w-1/2">
          <div className="pb-14 xl:pb-20 mb-10 xl:mb-16 border-b border-gray-200">
            <h2 className="font-heading font-medium text-7xl xl:text-8xl leading-snug">
            {t.webSite.title2}

            </h2>
          </div>
          <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
          {t.webSite.descriptiont2}

          </p>
          <div className="flex items-center"></div>
        </div>
        <ul className="mb-8">
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
             {t.webSite.item1}

            </span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
             {t.webSite.item2}

            </span>
          </li>
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
            {t.webSite.item3}

            </span>
          </li>
        </ul>
        <div className="relative lg:relative top-0 right-0 lg:mt-12 lg:w-1/2">
          <Image
            src={t.webSite.image2}

            width={200}
            height={200}
            alt=""
            className="w-full md:mt-48 mt-10 md:px-20 px-4"
          />
        </div>
        <div className="mt-10 px-4">
          <a
            href="/#Contact"
            className="mb-6 md:mt-3 md:px-2 px-4 py-2 w-48 bg-[#BB2649] border-b border-gray-100 text-white hover:bg-[#A8133A] rounded text-sm text-center items-center font-semibold drop-shadow-lg"
          >
            {t.webSite.button2}
          </a>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

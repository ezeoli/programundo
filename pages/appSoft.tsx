import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";
import { useIdiomas } from "@/hooks/idiomas";
import Image from "next/image";
import React from "react";

type Props = {};

export default function appSoft({}: Props) {
  const t = useIdiomas({});

  return (
    <>
      <Navbar />
      <div className="md:px-20 pb-20 mx-auto">
        <div className="mt-28 text-center">
          <a className="mb-5 py-20 block font-medium uppercase tracking-widest text-xl leading-4 text-gray-500">
            {t.appSoft.title}
          </a>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-44  mx-8">
          
          <img src={t.appSoft.image} alt="" className=" rounded-md" />

          <div className="lg:max-w-lg">
            <h2 className="mb-10 font-heading font-medium text-4xl xl:text-5xl leading-snug">
              {t.appSoft.title1}
            </h2>
            <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
              {t.appSoft.descriptiont1}
            </p>
            <a
              href="/#Contact"
              className="mb-6 mt-3 px-2 py-2 w-48 bg-primary border-b border-gray-100 text-white hover:bg-secondary rounded text-sm text-center items-center font-semibold drop-shadow-lg"
            >
              {t.appSoft.button1}
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-44 mt-20 mx-20">
          <div className="">
            <div className="">
              <div className="pb-14 xl:pb-10 mb-10 xl:mb-6 mt-32 ">
                <h2 className="font-heading font-medium text-4xl xl:text-5xl leading-snug ">
                  {t.appSoft.title2}
                </h2>
              </div>
              <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
                {t.appSoft.descriptiont2}
              </p>
              <div className="flex items-center"></div>
            </div>
            <ul className="mb-8">
              <li className="flex items-center mb-4">
                <span className="text-md md:text-md font-heading text-darkBlueGray-400">
                  {t.appSoft.item1}
                </span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-md md:text-md font-heading text-darkBlueGray-400">
                  {t.appSoft.item2}
                </span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-md md:text-md font-heading text-darkBlueGray-400">
                  {t.appSoft.item3}
                </span>
              </li>
              <li className="flex items-center mb-4">
                <span className="text-md md:text-md font-heading text-darkBlueGray-400">
                  {t.appSoft.item4}
                </span>
              </li>
            </ul>
              <div className="mt-10 px-4">
              <a
                href="/#Contact"
                className="mb-6 md:mt-3 md:px-2 px-4 py-2 w-48 bg-primary border-b border-gray-100 text-white hover:bg-secondary rounded text-sm text-center items-center font-semibold drop-shadow-lg"
              >
                {t.appSoft.button2}
              </a>
            </div>
          </div>
          
          
          <div className="mb-20">
            <div className="md:mt-8 xl:mt-32">
              <img src={t.appSoft.image2} alt="" className="rounded-md" />
            </div>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

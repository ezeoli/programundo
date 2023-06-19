import Image from "next/image";
import React from "react";

type Props = {};

export default function seo({}: Props) {
  return (
    <div className="md:px-20 px-4 mx-auto">
      <div className="mt-20 text-center">
        <a className="mb-5 py-20 block font-medium uppercase tracking-widest text-xs leading-4 text-gray-500">
          Apps y Software a medida
        </a>
      </div>{" "}
      <div className="grid lg:grid-cols-2 lg:items-center gap-14 lg:gap-16 xl:gap-44 mt-20">
        <Image
          src="/_nuxt/img/software2.5bea3ea.png"
          width={200}
          height={200}
          alt=""
          className="rounded-md"
        />{" "}
        <div className="lg:max-w-lg">
          <h2 className="mb-10 font-heading font-medium text-7xl xl:text-8xl leading-snug">
            Creamos el software que necesites
          </h2>{" "}
          <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
            Diseñamos y construimos software corporativo a medida. Creamos
            soluciones especialmente pensadas para optimizar los procesos
            propios de su empresa.
          </p>{" "}
          <a
            href="/contacto/"
            className="mb-6 mt-3 px-2 py-2 w-48 bg-[#BB2649] border-b border-gray-100 text-white hover:bg-[#A8133A] rounded text-sm text-center items-center font-semibold drop-shadow-lg"
          >
            Contactanos
          </a>
        </div>
      </div>
      <div className="md:px-20 px-4 mx-auto">
        <div className="mb-20 lg:mb-0 w-full lg:w-1/2">
          <div className="pb-14 xl:pb-20 mb-10 xl:mb-16 border-b border-gray-200">
            <h2 className="font-heading font-medium text-7xl xl:text-8xl leading-snug">
              Apps, Web Apps
            </h2>
          </div>{" "}
          <h3 className="mb-6 text-lg leading-6 text-darkBlueGray-400">
            Desarrollamos aplicaciones móviles nativas (iOS / Android) o
            híbridas, y Web Apps combinando diseño y tecnología.
          </h3>{" "}
          <p className="mb-6 text-lg leading-6 text-darkBlueGray-400">
            Una aplicación móvil puede ayudar a los clientes a obtener acceso a
            los beneficios de tu empresa de forma rápida.
          </p>{" "}
          <div className="flex items-center"></div>
        </div>{" "}
        <ul className="mb-8">
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
              Analizamos los requerimientos de tu proyecto.
            </span>
          </li>{" "}
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
              Diseñamos una estrategia y un plan de desarrollo.
            </span>
          </li>{" "}
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
              Implementamos el desarrollo.
            </span>
          </li>{" "}
          <li className="flex items-center mb-4">
            <span className="text-md md:text-md font-heading text-darkBlueGray-400">
              Testeamos y lanzamos eL producto final
            </span>
          </li>
        </ul>{" "}
        <div className="relative lg:absolute top-0 right-0 lg:mt-12 lg:w-1/2">
          <Image
            src="/_nuxt/img/apps.43fad93.png"
            width={200}
            height={200}
            alt=""
            className="w-full md:mt-48 mt-10 md:px-20 px-4"
          />
        </div>{" "}
        <div className="mt-10 px-4">
          <a
            href="/contacto/"
            className="mb-6 md:mt-3 md:px-2 px-4 py-2 w-48 bg-[#BB2649] border-b border-gray-100 text-white hover:bg-[#A8133A] rounded text-sm text-center items-center font-semibold drop-shadow-lg"
          >
            Pedinos un presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}

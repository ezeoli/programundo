import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="px-5">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <a href="#" className="inline-block mb-4">
              <Image
                src="/Logo.png"
                width={150}
                height={150}
                alt=""
                className="rounded"
              />
            </a>{" "}
            <p className="text-base md:text-lg text-gray-500 font-medium lg:w-64 pl-2">
              Hacemos realidad tu proyecto.
            </p>
          </div>{" "}
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Links</h3>{" "}
            <ul>
              <li className="mb-4">
                <a
                  href="/#nosotros"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Nosotros
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/#servicios"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Servicios
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/portfolio/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Portfolio
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/#blog"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Blog
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/contacto/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Servicios</h3>{" "}
            <ul>
              <li className="mb-4">
                <a
                  href="/sitios-web/"
                  aria-current="page"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium nuxt-link-exact-active nuxt-link-active"
                >
                  Sitios Web
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/app-y-software-a-medida/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  App y Software a medida
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/seo/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Posicionamiento SEO
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/ux-ui/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  UX/UI
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/ecommerce/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Ecommerce
                </a>
              </li>{" "}
              <li className="mb-4">
                <a
                  href="/software-de-gestion/"
                  className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                >
                  Software Gestión
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="w-full md:w-1/3 lg:w-4/12 px-4">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Newsletter</h3>{" "}
            <div className="flex flex-wrap">
              <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                <input
                  placeholder="Tu email"
                  className="px-3 w-full h-12 text-gray-900 outline-none placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-[#BB2649] focus:ring-opacity-50 rounded-lg shadow-xsm"
                />
              </div>{" "}
              <div className="w-full lg:w-auto py-1 lg:py-0">
                <a
                  href="#"
                  className="inline-block py-4 px-5 w-full leading-4 text-white font-medium text-center bg-[#BB2649] hover:bg-[#BB2649] focus:ring-2 focus:ring-[#BB2649] focus:ring-opacity-50 rounded-md shadow-sm"
                >
                  Suscribirse
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

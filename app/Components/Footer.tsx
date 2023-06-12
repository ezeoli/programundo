import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import footer from "../Data/Footer.json";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div className="px-5">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <a href="#" className="inline-block mb-4">
              <Image
                src={footer.logo}
                width={150}
                height={150}
                alt=""
                className="rounded mx-8"
              />
            </a>
            <p className="text-base md:text-lg text-black font-medium lg:w-64 pl-2">
              {footer.descriptionLogo}
            </p>
          </div>
          
          {/* Links */}
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Links</h3>{" "}
            <ul>
              {footer.links.map((l) => (
                <>
                  <li className="mb-4">
                    <a
                      href={l.href}
                      className="inline-block text-gray-500 hover:text-[#BB2649] font-medium"
                    >
                      {l.name}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>

          {/* services */}
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 className="mb-5 text-lg font-bold text-gray-900">Services</h3>{" "}
            <ul>
              {footer.services.map((l) => (
                <>
                  <li className="mb-4">
                    <a
                      href={l.href}
                      aria-current="page"
                      className="inline-block text-gray-500 hover:text-[#BB2649] font-medium nuxt-link-exact-active nuxt-link-active"
                    >
                      {l.name}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>{" "}
          
          {/*  Newsletter  */}
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

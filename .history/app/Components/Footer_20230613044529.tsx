"use client"
import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import footer from "../Data/Footer.json";
import Newsletter from "./Newsletter";

type Props = {};

export default function Footer({}: Props) {
  return (
    <>
      <div id="image_footer" className="px-5">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <a href="#" className="inline-block mb-4">
              <Image
                src={footer.logo}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto p-2 rounded mx-8" 
                alt="logo"
                
              />
            </a>
            <p className="text-base md:text-lg text-black font-medium lg:w-64 pl-2">
              {footer.descriptionLogo}
            </p>
          </div>
          
          {/* Links */}
          <div id="footer_links_div" className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 id="footer_links_h3" className="mb-5 text-lg font-bold text-gray-900">Links</h3>{" "}
            <ul id="footer_links">
              {footer?.links?.map((l) => (
                <>
                  <li key={l.href}  className="mb-4">
                   <div><a
                      href={l.href}
                      className="inline-block text-gray-500 hover:text-tertiary font-medium"
                    >
                      {l.name}
                    </a></div>
                    
                  </li>
                </>
              ))}
            </ul>
          </div>

          {/* services */}
          <div id="footer_services_div" className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3 id="footer_services_h3" className="mb-5 text-lg font-bold text-gray-900">Services</h3>{" "}
            <ul id="footer_services">
              {footer?.services?.map((l) => (
                <>
                  <li key={l.href} className="mb-4">
                    <div> <a
                      href={l.href}
                      aria-current="page"
                      className="inline-block text-gray-500 hover:text-tertiary font-medium"
                    >
                      {l.name}
                    </a></div>
                   
                  </li>
                </>
              ))}
            </ul>
          </div>{" "}
          
          {/*  Newsletter  */}
         <Newsletter/>
        </div>
      </div>
    </>
  );
}

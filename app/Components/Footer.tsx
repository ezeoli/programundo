import React from "react";
import Image from "next/image";
import "../globals.css";
import Link from "next/link";
import f from "../Data/Footer.json";
import Newsletter from "./Newsletter";
import { useIdiomas } from "@/hooks/idiomas";
import { useRouter } from "next/router";

type Props = {};

export default function Footer({}: Props) {
  
  const t = useIdiomas({});
 
  return (
    <>
      <div id="image_footer" className="bg-light px-5">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4">
          <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <Link href={`${useRouter().locale}${"/"}`} className="inline-block mb-4">
              <Image
                src={t.footer.logo}
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto p-2 rounded mx-8"
                alt="logo"
              />
            </Link>
            <p className="text-base md:text-lg text-black font-medium lg:w-64 pl-2">
              {t.footer.descriptionLogo}
            </p>
          </div>
          {/* Links */}
          <div
            id="footer_links_div"
            className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0"
          >
            <h3
              id="footer_links_h3"
              className="mb-5 text-lg font-bold text-gray-900"
            >
            {t.footer.title1}
            </h3>{" "}
            <ul id="footer_links">
              {t.footer.links1.map((l:any)=>
              <React.Fragment key={l.name}>
              <li key={l.href} className="mb-4">
                <div>
                  {" "}
                  <Link
                    href=  {`${useRouter().locale}${l.href}`}
                    aria-current="page"
                    className="inline-block text-gray-500 hover:text-primary font-medium"
                  >
                    {l.name}
                  </Link>
                </div>
              </li>
            </React.Fragment>)}
            </ul>
          </div>
          {/* services */}
          <div
            id="footer_services_div"
            className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0"
          >
            <h3
              id="footer_services_h3"
              className="mb-5 text-lg font-bold text-gray-900"
            >
              {t.footer.title2}
            </h3>
            <ul id="footer_services">
              {t.footer.links2.map((l) => (
                <React.Fragment key={l.name}>
                  <li key={l.href} className="mb-4">
                    <div>
                      <Link
                        href={`${useRouter().locale}${l.href}`}
                        aria-current="page"
                        className="inline-block text-gray-500 hover:text-primary font-medium"
                      >
                        {l.name}
                      </Link>
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>{" "}
          {/*  Newsletter  */}
          <Newsletter />
        </div>
      </div>
    </>
  );
}

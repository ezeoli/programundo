import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import React, { useState } from "react";
import { useIdiomas } from "@/hooks/idiomas";
import { useRouter } from "next/router";
import logo from "../../public/Logo.png";

type Props = {};

export default function Navbar({}: Props) {
  const t = useIdiomas({});
  let router = useRouter();

  const handleLang = () => {
    let t = router.locale === "es" ? "en" : "es";
    router.push(router.pathname, router.pathname, { locale: t });
    setNavbar(!navbar);
  };

  const lang = (
    <button onClick={handleLang}>
      <Image
        src={useRouter().locale === "es" ? t.lang : t.lang}
        width={30}
        height={30}
        alt="idioma"
        className="focus:border-none active:border-none"
        aria-label="menu"
      />
    </button>
  );

  const [navbar, setNavbar] = useState(false);

  return (
    <React.Fragment>
      <nav className="w-full bg-gray-500 fixed top-0 left-0 right-0 z-10 shadow-[0_30px_60px_-3px_rgba(0,0,0,0.5)]">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              <div className="flex flex-col align-center items-center">
                <Link href={`${useRouter().locale}${"/"}`}>
                  <Image
                    src={logo}
                    alt="programundo"
                    aria-label="Logo de Programundo"
                  />
                </Link>
                <h2 className="hidden md:block text-md font-bold items-center text-white">
                  PROGRAMUNDO
                </h2>
              </div>
              <div>
                <div className="md:hidden">
                  {lang}
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image
                        src="/Close.png"
                        width={30}
                        height={30}
                        alt="close icon button"
                        aria-label="close menu"
                      />
                    ) : (
                      <Image
                        src="/Menu.png"
                        width={30}
                        height={30}
                        alt="menu icon button"
                        className="focus:border-none active:border-none"
                        aria-label="menu"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-6 md:block md:pb-0 md:mt-0 
              ${navbar ? "p-12 md:p-0 block" : "hidden"}`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                <li className="group relative dropdown" data-v-6dd71848="">
                  <a
                    className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black"
                    data-v-6dd71848=""
                  >
                    SERVICIOS{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-4 h-4 inline-block"
                      data-v-6dd71848=""
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        data-v-6dd71848=""
                      ></path>
                    </svg>
                  </a>{" "}
                  <div
                    className="z-30 rounded-lg group-hover:block dropdown-menu absolute hidden h-auto"
                    data-v-6dd71848=""
                  >
                    <ul
                      className="top-2 w-48 bg-gray-500 shadow py-2 rounded-xl"
                      data-v-6dd71848=""
                    >
                      <li
                        className="hover:bg-primary py-2 px-4 block whitespace-no-wrap"
                        data-v-6dd71848=""
                      >
                        <a
                          href="/webSite"
                          className="block text-black font-normal text-base hover:text-white cursor-pointer"
                          data-v-6dd71848=""
                        >
                          Sitios Web
                        </a>
                      </li>{" "}
                      <li
                        className="hover:bg-primary py-2 px-4 block whitespace-no-wrap"
                        data-v-6dd71848=""
                      >
                        <a
                          href="/appSoft"
                          className="block text-black font-normal text-base hover:text-white cursor-pointer"
                          data-v-6dd71848=""
                        >
                          App y Software a medida
                        </a>
                      </li>{" "}
                      <li
                        className="hover:bg-primary py-2 px-4 block whitespace-no-wrap"
                        data-v-6dd71848=""
                      >
                        <a
                          href="/seo"
                          className="block text-black font-normal text-base hover:text-white cursor-pointer"
                          data-v-6dd71848=""
                        >
                          Posicionamiento SEO
                        </a>
                      </li>{" "}
                      
                      <li
                        className="hover:bg-primary py-2 px-4 block whitespace-no-wrap"
                        data-v-6dd71848=""
                      >
                        <a
                          href="/ecommerce"
                          className="block text-black font-normal text-base hover:text-white cursor-pointer"
                          data-v-6dd71848=""
                        >
                          Ecommerce
                        </a>
                      </li>{" "}
                     
                    </ul>
                  </div>
                </li>
                {t.navbar.map((b: any) => (
                  <Link
                    href={b.href}
                    onClick={() => setNavbar(!navbar)}
                    key={b.button}
                  >
                    <li
                      className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black"
                      aria-label={b.button}
                    >
                      {b.button}
                    </li>
                  </Link>
                ))}

                {lang}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

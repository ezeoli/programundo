import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import React, { useState } from "react";
import { SlArrowDown } from 'react-icons/sl';
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
  const handleToggleNavbar = () => { 
    setNavbar(!navbar);
  };

  return (
    <React.Fragment>
      <nav className="w-full bg-gray-500 fixed top-0 left-0 right-0 z-10 shadow-[0_30px_60px_-3px_rgba(0,0,0,0.5)] bg-gradient-to-r from-blue-300 via-indigo-400 to-white-200">
        <div className="justify-between  px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
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
                    onClick={handleToggleNavbar}
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
          <div >
            <div
              className={`flex-1  justify-self-center pb-3 mt-6 md:block md:pb-0 md:mt-0 
              ${navbar ? "p-12 md:p-0 block h-auto" : "hidden "}  `}
            >
              <ul className="flex flex-col md:flex-row h-screen md:h-auto md:justify-center items-center  ">
                <li className="group relative dropdown">
                  <a
                    className=" pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black flex gap-2 items-center" >
                    {t.service} <SlArrowDown/>
                  </a>
                  <div className="z-30 rounded-lg group-hover:block dropdown-menu relative hidden h-auto mt-2 left-0 right-0  md:mt-0" >
                    <ul className="top-2 w-48 bg-gray-500 shadow py-2 rounded-xl">
                        {t.services.map((b:any)=>(
                          <Link
                            href={b.href}
                            onClick={handleToggleNavbar}
                            key={b.button}
                            className= "block text-white font-normal text-base hover:text-white cursor-pointer"
                          >
                          <li
                              className="hover:bg-primary py-2 px-4 block whitespace-no-wrap"
                              aria-label={b.button}>
                              {b.button}
                          </li>
                          </Link>
                        ))}
                    </ul>
                  </div>
                </li>
                {t.navbar.map((b: any) => (
                  <Link
                    href={b.href}
                    onClick={handleToggleNavbar}
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
                <div className="xs:hidden md:block align-middle	">
                {lang}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

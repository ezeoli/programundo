import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import { useState } from "react";
import { useIdiomas } from "@/hooks/idiomas";
import { useRouter } from "next/router";

type Props = {};

export default function Navbar({}: Props) {
  const t = useIdiomas({});
  let router = useRouter();

  const handleLang = () => {
    let t = router.locale === "es" ? "en" : "es";
    router.push(router.pathname, router.pathname, { locale: t });
    setNavbar(!navbar);
  };

  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gray-500 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-4 md:block">
              <div className="flex flex-col align-center items-center">
                <Link href={`${useRouter().locale}${"/"}`}>
                  <Image
                    src="/Logo.png"
                    width={60}
                    height={60}
                    alt="programundo"
                  />
                </Link>
                <h2 className="hidden md:block text-md font-bold items-center text-white ">
                  PROGRAMUNDO
                </h2>
              </div>
              <div className="md:hidden">
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
                    />
                  ) : (
                    <Image
                      src="/Menu.png"
                      width={30}
                      height={30}
                      alt="menu icon button"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-6 md:block md:pb-0 md:mt-0 
                  ${navbar ? "p-12 md:p-0 block" : "hidden"}`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex">
                {t.navbar.map((b:any)=>
                  <React.Fragment key={b.button}>
                      <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                        <Link href={b.href} onClick={() => setNavbar(!navbar)}>
                          {b.button}
                        </Link>
                      </li>
                  </React.Fragment>
                  )}
                <li className="pb-2 text-xl text-white py-2 md:px-4 text-center hover:bg-white md:hover:bg-transparent hover:text-black">
                  <button
                    className="bg-primary hover:bg-secondary text-white font-bold py-2 px-3 rounded-md text-center"
                    onClick={handleLang}
                  >
                    {useRouter().locale === "es"
                      ? "en".toLocaleUpperCase()
                      : "es".toLocaleUpperCase()}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

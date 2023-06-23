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
    <button onClick={handleLang} className="xs:hidden">
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
                <select
                  name=""
                  id=""
                  className="appearance-none bg-gray-500 pb-2 text-xl text-white py-2  md:px-4 text-center hover:bg-grey-500 md:hover:bg-grey-500 hover:text-black"
                >
                  <option disabled selected value="">
                    Selecciona una opción
                  </option>
                  <option value="">UNO</option>
                  <option value="">DOS</option>
                  <option value="">TRES</option>
                  <option value="">CUATRO</option>
                </select>
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

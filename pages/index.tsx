"use client"
import Navbar from "../app/Components/Navbar";
import React, { useState } from 'react';
import Client from "../app/Components/Client";
import Products from "../app/Components/Products";
import Contact from "../app/Components/Contact";
import About from "../app/Components/About";
import Footer from "../app/Components/Footer";
import Carrusel from "../app/Components/Carrusel";
import ButtonWsp from "../app/Components/ButtonWsp";
import {useIdiomas} from "@/hooks/idiomas";



export default function Home() {

   const t = useIdiomas({});
   
  

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="">
        <h1 className="text-4xl mt-20 pt-10 font-bold text-blue-800 text-center">
          {t.home.title}
        </h1><br />
        <Carrusel/><br />
        <About/> <br />
        <Products/><br />
        <Client/><br />
        <Contact/><br />
      </main>
      <footer>
        <Footer/>
      </footer>
      <ButtonWsp/>
    </div>
  );
}
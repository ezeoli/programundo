"use client"
import Navbar from "../app/Components/Navbar";
import React, { useState } from 'react';
import Client from "../app/Components/Client";
import Products from "../app/Components/Products";
import Contact from "../app/Components/Contact";
import About from "../app/Components/About";
import Footer from "../app/Components/Footer";
import ButtonWsp from "../app/Components/ButtonWsp";
import Welcome from "@/app/Components/Welcome";
import {useIdiomas} from "@/hooks/idiomas";


export default function Home() {

   const t = useIdiomas({});
   
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="bg-gradient-to-r from-blue-200 via-indigo-200 to-stone-200">
        <Welcome/><br />
        <About/> <br />
        <Products/><br />
        <Client/><br />
        <Contact/><br />
      </main>
      <footer>
        <Footer/>
      </footer>
      <ButtonWsp/>
    </>
  );
}
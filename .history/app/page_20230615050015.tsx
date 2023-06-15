"use client"
import Navbar from "./Components/Navbar";
import React, { useState } from 'react';
import Client from "./Components/Client";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Carrusel from "./Components/Carrusel";
import ButtonWsp from "./Components/ButtonWsp";

export default function Home() {

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="">
        <h1 className="text-4xl mt-20 pt-10 font-bold text-blue-800 text-center">
          Welcome to the Homepage
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









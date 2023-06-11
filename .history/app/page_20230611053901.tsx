"use client"
import Navbar from "./Components/Navbar";
import React, { useState } from 'react';
import Client from "./Components/Client";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import NextLink from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {

 

  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main className="">
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Welcome to the Homepage
        </h1>
        <br />
        <About/>
        <br />
        <Products/><br />
        <Client/><br />
        <Contact/><br />
      </main>
      <footer>
        <Footer/>
      </footer>
      <div className="fixed bottom-4 right-4 z-50">
    <NextLink href="https://api.whatsapp.com/send?phone=5491136317470">
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        <FaWhatsapp className="text-white text-2xl" />
        <span className="ml-2 hidden md:inline-block">Call us</span>
      </a>
    </NextLink>
  </div>
    </div>
  );
}








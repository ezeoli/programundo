"use client"
import Navbar from "../Components/Navbar";
import React from 'react';
import Client from "../Components/Client";
import Products from "../Components/Products";
import Contact from "../Components/Contact";
import About from "../Components/About";
import Footer from "../Components/Footer";
import ButtonWsp from "../Components/ButtonWsp";
import Welcome from "../Components/Welcome";
import {useIdiomas} from '../hooks/idiomas';


export default function Home() {

   const t = useIdiomas({});
   
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="">
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
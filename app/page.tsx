import Image from "next/image";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import Client from "./Components/Client";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <h1 className="text-4xl font-bold text-blue-800 text-center">
          Welcome to the Homepage
        </h1>
        <About/>
        <Products/>
        <Client/>
        <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

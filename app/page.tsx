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
        <Link href={'https://api.whatsapp.com/send?phone=5491136317470'}>
            <button className="sticky top-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Call us logo de wsp</button>
          </Link>
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
    </>
  );
}

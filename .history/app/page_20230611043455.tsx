import Navbar from "./Components/Navbar";
import Client from "./Components/Client";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Link from "next/link";
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
      <div className="fixed bottom-0 right-0">
      <Link href={'https://api.whatsapp.com/send?phone=5491136317470'}>
            <button className="   bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            <FaWhatsapp className="mr-2" />
              Call us logo de wsp</button>
      </Link>
      </div>
    </div>
  );
}

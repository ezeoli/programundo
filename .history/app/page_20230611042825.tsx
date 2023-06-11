import Navbar from "./Components/Navbar";
import Client from "./Components/Client";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Link from "next/link";

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
      <div className="flex justify-end">
      <Link href={'https://api.whatsapp.com/send?phone=5491136317470'}>
            <button className="sticky bottom-0  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Call us logo de wsp</button>
      </Link>
      </div>
    </div>
  );
}

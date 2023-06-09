import Image from "next/image";
import Link from "next/link";
import Navbar from "./Components/Navbar";

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
        <section id="about">
          <h2 className="text-2xl font-bold">About us</h2>
          <Image
            src="/programundo2.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
          <p>
            This is the About section. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dolorem rerum eveniet fuga praesentium asperiores
            eos deleniti doloremque quibusdam consectetur sunt similique tempora
            architecto obcaecati maiores, tempore natus aperiam ipsum totam.
          </p>
        </section>
        <section id="products">
          <h2 className="text-2xl font-bold">Our Products</h2>
          <Image
            src="/programundo4.jpg"
            width={500}
            height={500}
            alt="programundo"
          />

          <p>
            This is the Products section. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste ab amet quo autem quisquam officia earum
            illo, eaque repellat hic esse quos molestias veniam voluptates, eius
            at similique quibusdam aperiam?
          </p>
        </section>
        <section id="clients">
          <h2 className="text-2xl font-bold">Clients</h2>
          <Image
            src="/programundoLOGO.jpg"
            width={500}
            height={500}
            alt="programundo"
          />

          <p>
            This is the Clients section. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iste ab amet quo autem quisquam officia earum
            illo, eaque repellat hic esse quos molestias veniam voluptates, eius
            at similique quibusdam aperiam?
          </p>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-bold text-center">Contact</h2>
          <Image
            src="/programundo4.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
          <p>
            This is the Contact section. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Id dicta dolore, facere quisquam aliquid alias
            nostrum qui, aut tenetur nam fuga provident minima enim magni
            cupiditate excepturi modi, hic accusantium.
          </p>
        </section>
      </main>
      <footer>
        <h1 className="text-blue-800 text-center text-2xl ">
          We are the next generation of code solutions
        </h1>
        <Image
          src="/programundo3.jpg"
          width={500}
          height={500}
          alt="programundo"
          className=" rounded "
          style={{ display: "block", margin: "0 auto" }}
        />
      </footer>
    </>
  );
}

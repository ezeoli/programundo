
import Image from 'next/image';
import Link from 'next/link';




export default function Home() {
  
  return (
          <>   
    <header>
     <nav className='flex  bg-gray-400 h-16'> 
     

           <Image
            src="/programundoLOGO.jpg"
            width={100}
            height={100}
            alt="programundo"
          />
       <Link href="#about"
            className='flex-auto text-blue-800 p-2'>About us
          </Link>
          <Link href="#products"
             className='flex-auto text-blue-800 p-2'>Our products
          </Link>
          <Link href="#clients"
             className='flex-auto text-blue-800 p-2'>Clients
          </Link>
          <Link href="#contact"
            className='flex-auto text-blue-800 p-2'>Contact
          </Link>
       </nav>
    </header>
    <main>
      
      
             <h1 className="text-4xl font-bold text-blue-800 text-center">Welcome to the Homepage</h1>
        <section id="about">
        <h2 className="text-2xl font-bold">About</h2>
        <Image
            src="/programundo2.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
          
          <p>This is the About section.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rerum eveniet fuga praesentium asperiores eos deleniti doloremque quibusdam consectetur sunt similique tempora architecto obcaecati maiores, tempore natus aperiam ipsum totam.
          </p>
        </section>

        <section id="products">
        <h2 className="text-2xl font-bold">Products</h2>
        <Image
            src="/programundo4.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
          
          <p>This is the Products section.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ab amet quo autem quisquam officia earum illo, eaque repellat hic esse quos molestias veniam voluptates, eius at similique quibusdam aperiam?
          </p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-bold">Contact</h2>
          <Image
            src="/programundo.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
          <p>This is the Contact section.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id dicta dolore, facere quisquam aliquid alias nostrum qui, aut tenetur nam fuga provident minima enim magni cupiditate excepturi modi, hic accusantium.
          </p>
        </section>
    </main>
    <footer  >
       <h1 className="text-blue-800 text-center text-2xl ">We are the next generation of code solutions</h1>  </footer>
    <Image
            src="/programundo3.jpg"
            width={500}
            height={500}
            alt="programundo"
            className="flex justify-center items-center rounded "
          />
    </>
    
  )
}

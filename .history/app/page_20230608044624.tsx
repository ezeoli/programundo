
import Image from 'next/image';
import Link from 'next/link';




export default function Home() {
  
  return (
          <>   
    <header>
     <nav className='flex  bg-gray-400 h-16'> 
     

           <Image
            src="/programundo.jpg"
            width={100}
            height={100}
            alt="programundo"
          />
       <Link href="#about">
            <a className='flex-auto text-white'>About us</a>
          </Link>
          <Link href="#products">
            <a className='flex-auto text-blue-800'>Our products</a>
          </Link>
          <Link href="#clients">
            <a className='flex-auto text-white'>Clients</a>
          </Link>
          <Link href="#contact">
            <a className='flex-auto text-white'>Contact</a>
          </Link>
       </nav>
    </header>
    <main>
      
      <Image
            src="/programundo.jpg"
            width={500}
            height={500}
            alt="programundo"
          />
    </main>
    </>
    
  )
}

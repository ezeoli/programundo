
import Image from 'next/image';




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
      <p className='flex-auto text-blue-800 p-2'>About us</p>
      <p className='flex-auto text-blue-800 p-2'  >Our products</p>
      <p className='flex-auto  text-blue-800 p-2 '>Clients</p>
      <p className='flex-auto  text-blue-800 p-2'>Contact</p>

       </nav>
    </header>
    <main>
      <h1 className='text-blue-800  '> Programundo</h1>
    </main>
    </>
    
  )
}

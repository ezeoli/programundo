
import Image from 'next/image';


export default function Home() {
  return (
    <>
    <header>
     <nav className='flex'> 
     <img  src="../public/programundo.jpg" 
     width={500}
     height={500} 
     "alt:string"=" programundo" />
      <p className='flex-auto'>About us</p>
      <p className='flex-auto text-blue-800'  >Our products</p>
      <p className='flex-auto  '>Clients</p>
      <p className='flex-auto'>Contact</p>

       </nav>
    </header>
    <main>
      <h1 className='text-blue-800  '> Programundo</h1>
    </main>
    </>
    
  )
}

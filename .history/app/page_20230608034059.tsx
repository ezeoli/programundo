
import Image from 'next/image';
import logo from "../public/programundo.jpg"

export default function Home() {
  return (
    <>
    <header>
     <nav className='flex'> 
     <image className='flex-auto' src="logo" alt=" programundo" />
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

import { Fragment_Mono } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Home() {
  return (
    <>
    <header>
     <nav className='flex-auto'> 
      <p>About us</p>
      <p>Our products</p>
      <p>CLients</p>
      <p>Contact</p>

       </nav>
    </header>
    <main>
      <h1 className='text-blue-800  '> Programundo</h1>
    </main>
    </>
    
  )
}

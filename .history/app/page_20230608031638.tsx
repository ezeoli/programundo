import { Fragment_Mono } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Home() {
  return (
    <>
    <header>
     <nav className='flex-auto row-auto'> 
      <p className='flex-auto'>About us</p>
      <p className='flex-auto' >Our products</p>
      <p className='flex-auto'>CLients</p>
      <p className='flex-auto'>Contact</p>

       </nav>
    </header>
    <main>
      <h1 className='text-blue-800  '> Programundo</h1>
    </main>
    </>
    
  )
}

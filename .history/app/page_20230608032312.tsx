import { Fragment_Mono } from 'next/font/google'
import Image from 'next/image'
import { Fragment } from 'react'

export default function Home() {
  return (
    <>
    <header>
     <nav className='flex'> 
     <img className='flex-auto' src="../public/programundo.jpg" alt="" />
      <p className='flex-auto'>About us</p>
      <p className='flex-auto text-blue-800'  >Our products</p>
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

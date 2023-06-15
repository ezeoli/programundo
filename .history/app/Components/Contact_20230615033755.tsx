'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "../globals.css";
import contact from '../Data/contact.json'

export default function Contact() {
  
    const [state, handleSubmit] = useForm("xnqybkro");
    if (state.succeeded) {
        return <p>Thanks for Send your!</p>;
    }
    return (
      <section id="Contact">
          <h1 className='text-4xl font-bold p-5' >{contact.title}</h1>
          <h2 className='text-2xl font-bold p-5'>{contact.subtitle}</h2>
          <form onSubmit={handleSubmit} id="contact_form" className="flex flex-col p-5 mx-5 space-y-2 border border-gray-600 rounded-md w-full md:w-6/12">
          <label htmlFor="Name" className="flex-col">{contact.nameForm}</label>
            <input id="Name" type="text" name="Name" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={contact.nameFormPlaceholder} autoComplete="Your Name" />

            <label htmlFor="email" className="flex-col">{contact.emailForm}</label>
            <input id="email" type="email" name="email"   className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={contact.emailFormPlaceholder} autoComplete="email"  />
            
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="flex-col ">{contact.messageForm}</label>
            <textarea id="message" name="message" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={contact.messageFormPlaceholder} />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <div className=" grid justify-items-end">
              <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex content-center w-fit">{contact.buttonSubmit}</button>
            </div>
          </form>
        </section>
    );
  }
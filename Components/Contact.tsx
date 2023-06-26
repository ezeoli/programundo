'use client'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import "../app/globals.css";
import contact from '../Data/contact.json'
import { useIdiomas } from '@/hooks/idiomas';

export default function Contact() {
  const t = useIdiomas({});

    const [state, handleSubmit] = useForm("xnqybkro");
    if (state.succeeded) {
        return <p>Thanks for Send your!</p>;
    }
    return (
      <section id={t.id.contact}>
          <h1 className='text-4xl font-bold p-5' >{t.contact.title}</h1>
          <h2 className='text-2xl font-bold p-5'>{t.contact.subtitle}</h2>
          <form onSubmit={handleSubmit} id="contact_form" className="flex flex-col p-6 px-4 mx-5 space-y-2 border border-gray-600 rounded-md w-10/12 md:w-6/12" >
          <label htmlFor="Name" className="flex-col">{t.contact.name}</label>
            <input id="Name" type="text" name="Name" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={t.contact.nameph} autoComplete="Your Name" />

            <label htmlFor="email" className="flex-col">{t.contact.email}</label>
            <input id="email" type="email" name="email"   className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={t.contact.emailph} autoComplete="email"  />
            
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
            <label htmlFor="message" className="flex-col ">{t.contact.message}</label>
            <textarea id="message" name="message" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 w-full" placeholder={t.contact.messageph} />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
            <div className=" grid justify-items-end">
              <button type="submit" disabled={state.submitting} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md flex content-center w-fit">{t.contact.submit}</button>
            </div>
          </form>
        </section>
    );
  }
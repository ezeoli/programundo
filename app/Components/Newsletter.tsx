import { useIdiomas } from '@/hooks/idiomas';
import Link from 'next/link';
import React from 'react'

type Props = {}

export default function Newsletter({}: Props) {
  
  const t = useIdiomas({});


  return (
    <div className="w-full md:w-1/3 lg:w-4/12 px-4">
    <h2 className="mb-5 text-lg font-bold text-gray-900">{t.newsletter.title}</h2>
    <div className="flex flex-wrap">
      <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
        <input
          name="newletter"
          placeholder={t.newsletter.placeholder}
          className="px-3 w-full h-12 text-gray-900 outline-none placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-primary focus:ring-primary rounded-lg shadow-xsm"
        />
      </div>
      <div className="w-full lg:w-auto py-1 lg:py-0">
        <Link
          href=""
          className="inline-block py-4 px-5 w-full leading-4 text-white font-medium text-center bg-primary hover:bg-secondary focus:ring-2 focus:ring-primary focus:primary rounded-md shadow-sm"
        >
          {t.newsletter.subscribe}
        </Link>
      </div>
    </div>
  </div>
  )
}
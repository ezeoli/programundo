import React from 'react'

type Props = {}

export default function Newsletter({}: Props) {
  return (
    <div className="w-full md:w-1/3 lg:w-4/12 px-4">
    <h3 className="mb-5 text-lg font-bold text-gray-900">Newsletter</h3>
    <div className="flex flex-wrap">
      <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
        <input
          name="newletter"
          placeholder="Tu email"
          className="px-3 w-full h-12 text-gray-900 outline-none placeholder-gray-500 border border-gray-200 focus:ring-2 focus:ring-tertiary focus:ring-opacity-50 rounded-lg shadow-xsm"
        />
      </div>
      <div className="w-full lg:w-auto py-1 lg:py-0">
        <a
          href=""
          className="inline-block py-4 px-5 w-full leading-4 text-white font-medium text-center bg-primary hover:bg-tertiary focus:ring-2 focus:ring-secundary focus:ring-opacity-50 rounded-md shadow-sm"
        >
          Suscribirse
        </a>
      </div>
    </div>
  </div>
  )
}
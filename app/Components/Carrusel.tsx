"use client"
import "../globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useIdiomas } from "@/hooks/idiomas";
import image1 from '../../public/programundo2.jpg'
import image2 from '../../public/programundo3.jpg'
import image3 from '../../public/programundo4.jpg'


export default function Carrusel() {
  const t = useIdiomas({});

  const images = [
    image1,
    image2,
    image3,
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    const startAutoRotate = () => {
      intervalId = setInterval(nextSlide, 5000); // Cambia el valor '5000' al intervalo deseado en milisegundos
    };

    const stopAutoRotate = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    startAutoRotate();

    const carousel = document.querySelector("[data-carousel]");
    carousel?.addEventListener("mouseenter", stopAutoRotate);
    carousel?.addEventListener("mouseleave", startAutoRotate);

    return () => {
      stopAutoRotate();
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div id={t.id.carousel} className="relative w-full " data-carousel="slide" >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={500}
              alt="programundo carrousel slides"
              className={`absolute top-0 left-0 w-full h-fit transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 rounded-lg left-0 w-full h-8 bg-gray-900 bg-opacity-50">
          <ul className="flex justify-center space-x-2">
            {images.map((_, index) => (
              <li
                key={index}
                className={`w-4 h-4 rounded-full cursor-pointer ${
                  index === currentIndex ? "bg-white" : "bg-gray-300"
                }`}
                onClick={() => goToSlide(index)}
              ></li>
            ))}
          </ul>
        </div>

        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
          <button
            className="p-2 bg-gray-900 bg-opacity-50 text-white rounded-full focus:outline-none"
            onClick={prevSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
          <button
            className="p-2 bg-gray-900 bg-opacity-50 text-white rounded-full focus:outline-none"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

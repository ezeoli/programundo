import "../app/globals.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";

export default function Products() {
  const images = [
    
    "/programundo2.jpg",
    "/programundo3.jpg",
    "/programundo4.jpg",
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
      <Navbar />

      <nav
        aria-label="Page navigation example"
        className="p-2 flex justify-center"
      >
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              4
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              5
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>

      <section id="products">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <Image
          src={"/programundo4.jpg"}
          width={500}
          height={500}
          priority={true}
          alt="programundo"
        />

        <p>
          This is the Products section. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iste ab amet quo autem quisquam officia earum illo,
          eaque repellat hic esse quos molestias veniam voluptates, eius at
          similique quibusdam aperiam?
        </p>
      </section>

      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={500}
              height={500}
              alt="programundo"
              className={`absolute top-0 left-0 w-2/3 h-full transition-opacity duration-500 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute bottom-0 left-0 w-full h-8 bg-gray-900 bg-opacity-50">
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

        <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
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
                d="M9 5l7-7-7 7-7"
              />
            </svg>
          </button>
        </div>

        <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
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
                d="M15 19l 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from "react";
import Image from "next/image";
import "../app/globals.css";
import Link from "next/link";
import Navbar from "@/app/Components/Navbar";

type Props = {};

export default function products({}: Props) {
  useEffect(() => {
    const carousel = document.querySelector("#default-carousel");
    const carouselItems = carousel?.querySelectorAll("[data-carousel-item]");
    const prevButton = carousel?.querySelector("[data-carousel-prev]");
    const nextButton = carousel?.querySelector("[data-carousel-next]");
    let currentIndex = 0;

    const showSlide = (index: number) => {
      carouselItems?.forEach((item) => {
        item.classList.add("hidden");
      });

      carouselItems?.[index]?.classList.remove("hidden");
    };

    const goToSlide = (index: number) => {
      if (index < 0) {
        currentIndex = carouselItems.length - 1;
      } else if (index >= carouselItems.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      showSlide(currentIndex);
    };

    const nextSlide = () => {
      goToSlide(currentIndex + 1);
    };

    const prevSlide = () => {
      goToSlide(currentIndex - 1);
    };

    nextButton?.addEventListener("click", nextSlide);
    prevButton?.addEventListener("click", prevSlide);

    showSlide(currentIndex);

    return () => {
      nextButton?.removeEventListener("click", nextSlide);
      prevButton?.removeEventListener("click", prevSlide);
    };
  }, []);

  return (
    <>
      <div>
        <Navbar />

        {/* Resto del código del componente */}
      </div>
    </>
  );
}

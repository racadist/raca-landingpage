"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const segments = [
  { name: "Organic Wheat", img: "/img/homem_raça.png", alt: "Organic Wheat" },
  { name: "Agro", img: "/img/homem_raça.png", alt: "Agro" },
  { name: "The Ferm", img: "/img/homem_raça.png", alt: "The Ferm" },
  { name: "Natural Rices", img: "/img/homem_raça.png", alt: "Natural Rices" },
  { name: "Agric", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "g", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "f", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "e", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "d", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "c", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "b", img: "/img/homem_raça.png", alt: "Agric" },
  { name: "a", img: "/img/homem_raça.png", alt: "Agric" },
];

// Configurações de responsividade
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

export function SegmentsSection() {
  return (
    <section className="bg-[#fafcff] py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold font-comic-neue text-[#7c8493] mb-10">
        Nossos Segmentos
      </h2>

      <div className="px-4">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          infinite={true}
          arrows={false}
          showDots={false}
          draggable={false}
          pauseOnHover={false}
        >
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="flex mx-4"
            >
              <img
                src={segment.img}
                alt={segment.alt}
                draggable={false}
                className="rounded-lg"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

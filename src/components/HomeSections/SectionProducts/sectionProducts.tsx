"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Produto 1",
    image: "/img/products.png",
  },
  {
    id: 2,
    name: "Produto 2",
    image: "/img/products.png",
  },
  {
    id: 3,
    name: "Produto 3",
    image: "/img/products.png",
  },
];

export function SectionProducts() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="my-10 px-4">
      <div
        className={`
          flex gap-4 sm:gap-6 md:gap-8
          overflow-x-auto sm:overflow-visible
          snap-x sm:snap-none
          scrollbar-hide
        `}
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`
              relative flex-shrink-0 sm:flex-1
              w-[260px] sm:min-w-[320px] sm:h-[320px] h-[300px]
              cursor-pointer overflow-hidden transition-all duration-300 rounded-xl
              ${
                hovered === idx && window.innerWidth >= 640
                  ? "scale-105 z-20 shadow-2xl"
                  : "scale-100 z-10"
              }
              snap-center
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-[#EAF3FF80]/80 flex flex-col px-4 sm:px-6">
              <span className="text-xl sm:text-4xl font-poppins font-extrabold mb-6 sm:mb-8 drop-shadow-lg text-left self-start">
                {product.name}
              </span>
              <button className="px-6 py-2 sm:px-8 sm:py-3 bg-gray-500/80 text-white font-semibold font-poppins rounded transition hover:bg-[#BB1717] cursor-pointer self-start">
                Veja mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

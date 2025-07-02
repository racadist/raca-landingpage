"use client";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Produto 1",
    image: "/img/homem_raça.png",
  },
  {
    id: 2,
    name: "Produto 2",
    image: "/img/homem_raça.png",
  },
  {
    id: 3,
    name: "Produto 3",
    image: "/img/homem_raça.png",
  },
];

export function SectionProducts() {
    const [hovered, setHovered] = useState<number | null>(null);
  
    return (
      <div className="flex justify-center items-stretch gap-0 my-10">
        {products.map((product, idx) => (
          <div
            key={product.id}
            className={`relative flex-1 min-w-[320px] h-[320px] cursor-pointer overflow-hidden transition-all duration-300
              ${hovered === idx ? "scale-105 z-20 shadow-2xl" : "scale-100 z-10"}
            `}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
            <div className="absolute inset-0 bg-[#EAF3FF80]/30 flex flex-col justify-center items-center">
              <span className="text-white text-3xl font-serif font-semibold mb-8 drop-shadow-lg text-center">
                {product.name}
              </span>
              <button className="px-8 py-3 bg-gray-500/80 text-white font-medium rounded transition hover:bg-gray-700/90">
                Veja mais
              </button>
            </div>
          </div>
        ))}
      </div>
    );
}

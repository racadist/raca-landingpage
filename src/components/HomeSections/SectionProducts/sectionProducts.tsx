"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Charque, ProdutosLeites, ProdutosEnlatados } from "@/assets";

const products = [
  {
    id: 1,
    name: "Charque",
    image: Charque,
  },
  {
    id: 2,
    name: "Itambé",
    image: ProdutosLeites,
  },
  {
    id: 3,
    name: "Enlatados",
    image: ProdutosEnlatados,
  },
];

export function SectionProducts() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="my-10 px-6">
    <div
      className={`
        flex sm:gap-4 gap-0
        overflow-x-auto 
        snap-x sm:snap-none
        scrollbar-hide md:overflow-x-auto
      `}
    >
      {products.map((product, idx) => (
        <div
          key={product.id}
          className="
            relative flex-shrink-0 sm:flex-1
            w-[230px] sm:max-h-[400px]
            cursor-pointer overflow-hidden transition-all duration-300
            snap-center"
          onMouseEnter={() => setHovered(idx)}
          onMouseLeave={() => setHovered(null)}
        >
          <Image
            src={product.image}
            alt={product.name}
            className={`
              w-full h-full object-cover
              relative -mt-6
              ${hovered === idx ? "transition-all scale-120 duration-300" : "z-0"}
            `}
          />
          <div className="absolute inset-0  flex flex-col px-4 sm:px-6">
            <span className="text-xl sm:text-4xl font-gilroy font-extrabold text-[#223872] mb-6 sm:mb-8 mt-4 drop-shadow-lg text-left self-start">
              {product.name}
            </span>
            <button className="px-6 py-2 sm:px-8 sm:py-3 bg-[#223872] text-white font-semibold font-poppins rounded transition hover:bg-[#BB1717] cursor-pointer self-start">
              Veja mais
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

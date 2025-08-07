"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Charque, ProdutosEnlatados, ProdutosLaticinios } from "@/assets";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "Charque",
    image: Charque,
  },
  {
    id: 2,
    name: "Itambé",
    image: ProdutosLaticinios,
  },
  {
    id: 3,
    name: "Enlatados",
    image: ProdutosEnlatados,
  },
];

export function SectionProducts() {
  const [hovered, setHovered] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div className="my-10 px-4 sm:px-6">
      <div
        className={`
          flex overflow-x-auto
          snap-x snap-mandatory
          scrollbar-hide pb-2 gap-4
        `}
      >
        {products.map((product, idx) => (
          <div
            key={product.id}
            className="
              relative flex sm:flex-wrap snap-center
              min-w-[380px] sm:min-w-[400px]
              h-[300px] md:h-[400px]
              cursor-pointer overflow-hidden transition-all duration-300
            "
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
          >
            <Image
              src={product.image}
              alt={product.name}
              className={`
                w-full h-full object-cover
                ${hovered === idx ? "transition-transform scale-110 duration-300" : ""}
              `}
            />
            <div className="absolute inset-0 flex flex-col px-4 sm:px-6 justify-between py-6">
              <span className="text-xl sm:text-3xl font-gilroy font-extrabold text-[#223872] drop-shadow-lg">
                {product.name}
              </span>
              <button
                onClick={() => router.push("/products")}
                className="px-4 py-2 bg-[#223872] text-white font-semibold font-poppins rounded hover:bg-[#BB1717] transition cursor-pointer"
              >
                Veja mais
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

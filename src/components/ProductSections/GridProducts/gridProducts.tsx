"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./types";

export function GridProducts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
              openIndex === idx ? 'row-span-2' : ''
            }`}
          >
            <div className="relative group">
              <Image
                src={cat.image}
                alt={cat.name}
                width={500}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute inset-0 bg-gray-400/30 transition-opacity duration-300 group-hover:opacity-75 rounded-xl" />

              <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-poppins font-bold text-white drop-shadow-md">{cat.name}</h3>
              </div>

              <div className="absolute top-4 right-4 z-20">
                <Button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="bg-white text-sm font-semibold font-poppins text-[#bb1717] px-4 py-1 rounded-full shadow hover:bg-[#26294D] hover:text-white transition cursor-pointer"
                >
                  {openIndex === idx ? "Fechar" : "Ver mais"}
                </Button>
              </div>
            </div>

            {/* Conteúdo expandido */}
            {openIndex === idx && (
              <div className="bg-white text-sm text-gray-700 p-4 animate-fade-in flex-1">
                <ul className="list-disc ml-5 mt-2 space-y-1">
                  {cat.products.map((product) => (
                    <li key={product.slug} style={{ listStyleType: "none" }}>
                      <Link
                        href={`/products/${product.slug}`}
                        className="text-[#0B1A2A] text-lg hover:underline font-bold font-poppins"
                      >
                        {product.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
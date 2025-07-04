"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./types";

export function GridProducts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 flex flex-wrap gap-6">
      {categories.map((cat, idx) => (
        <div
          key={idx}
          className="w-full sm:w-[48%] md:w-[31%] flex flex-col rounded-xl overflow-hidden shadow-lg transition-all duration-300"
        >
          <div className="relative group">
            <Image
              src={cat.image}
              alt={cat.name}
              width={500}
              height={300}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />

            <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-75 rounded-xl" />

            <div className="absolute bottom-4 left-4 z-20">
              <h3 className="text-3xl font-semibold text-white font-poppins">
                {cat.name}
              </h3>
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
            <div className="bg-white text-sm text-gray-700 p-4 animate-fade-in">
              <p>Produtos da categoria {cat.name}:</p>
              <ul className="list-disc ml-5 mt-2 space-y-1">
                {cat.products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-blue-600 hover:underline"
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
  );
}

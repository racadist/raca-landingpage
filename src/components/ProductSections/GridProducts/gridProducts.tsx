"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "./types";

export function GridProducts() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex justify-center py-12">
  <div className="w-full max-w-6xl px-4 grid xl:grid-cols-1 gap-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card grande no topo */}
          <div className="md:col-span-2 flex flex-col overflow-hidden shadow-lg transition-all duration-300">
            <div className="relative group">
              <Image
                src={categories[0].image}
                alt={categories[0].name}
                width={800}
                height={400}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gray-400/30 transition-opacity duration-300 group-hover:opacity-75" />
              <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-2xl font-poppins font-bold text-white drop-shadow-md">
                  {categories[0].name}
                </h3>
              </div>
              <div className="absolute top-4 right-4 z-20">
                <Button
                  onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
                  className="bg-white text-sm font-semibold font-poppins text-[#bb1717] px-4 py-1 rounded-full shadow hover:bg-[#26294D] hover:text-white transition cursor-pointer"
                >
                  {openIndex === 0 ? "Fechar" : "Ver mais"}
                </Button>
              </div>
            </div>
            {openIndex === 0 && (
              <div className="bg-white text-sm text-gray-700 p-4 animate-fade-in flex-1">
              {categories[0].products.length > 10 ? (
                <div className="flex gap-8">
                <ul className="list-disc ml-5 mt-2 space-y-1 flex-1">
                  {categories[0].products
                  .slice(0, Math.ceil(categories[0].products.length / 2))
                  .map((product) => (
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
                <ul className="list-disc ml-5 mt-2 space-y-1 flex-1">
                  {categories[0].products
                  .slice(Math.ceil(categories[0].products.length / 2))
                  .map((product) => (
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
              ) : (
                <ul className="list-disc ml-5 mt-2 space-y-1">
                {categories[0].products.map((product) => (
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
              )}
              </div>
            )}
          </div>
          {/* Dois cards menores embaixo */}
          {categories.slice(1, 3).map((cat, idx) => (
            <div
              key={idx + 1}
              className={`flex flex-col overflow-hidden shadow-lg transition-all duration-300 ${
                openIndex === idx + 1 ? 'row-span-2' : ''
              }`}
            >
              <div className="relative group">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  width={500}
                  height={300}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-400/30 transition-opacity duration-300 group-hover:opacity-75" />
                <div className="absolute bottom-0 left-0 w-full px-5 py-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-2xl font-poppins font-bold text-white drop-shadow-md">
                    {cat.name}
                  </h3>
                </div>
                <div className="absolute top-4 right-4 z-20">
                  <Button
                    onClick={() =>
                      setOpenIndex(openIndex === idx + 1 ? null : idx + 1)
                    }
                    className="bg-white text-sm font-semibold font-poppins text-[#bb1717] px-4 py-1 rounded-full shadow hover:bg-[#26294D] hover:text-white transition cursor-pointer"
                  >
                    {openIndex === idx + 1 ? "Fechar" : "Ver mais"}
                  </Button>
                </div>
              </div>
              {openIndex === idx + 1 && (
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
    </div>
  );
}

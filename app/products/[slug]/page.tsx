"use client";
import React, { useState } from "react";
import Image from "next/image";
import { products } from "@/data/products"; 
import { TopBar } from "@/components";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";
import { representatives } from "@/components/ProductSections/ContactSection/contactSection";

export default function ProdutoPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full font-poppins">
      <TopBar/>
        {/* Seção principal */}
        <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full mt-70 h-[320px] bg-[#0152A6] z-0" />
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="relative z-50 mt-16"
        />
        {/* Conteúdo sobre a barra azul */}
        <div className="relative z-10 flex flex-col items-center w-full mb-20">
          <h1 className="text-5xl font-bold font-poppins text-center text-white">{product.name}</h1>
          <p className="text-xl font-poppins text-center px-4 mt-2 text-white">{product.description}</p>
          <Button className="bg-[#24306B] text-white mt-4 text-xl px-6 py-2 rounded-full hover:bg-[#bb1717] transition">
            Informações Nutricionais
            <ChevronDown className="inline mr-2 size-6" />
          </Button>
        </div>
      </div>

      {/* Mapa */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#0B1A2A] font-poppins mb-6 sm:mb-0">
          Entre em contato com nossos representantes
        </h2>
      <section className="relative px-4 bg-[#0152A6] w-full">

        <div className="relative max-w-2xl sm:max-w-3xl mx-auto w-full">
          {/* Mapa de Pernambuco */}
          <div className="relative w-full">
            <img
              src="/img/mapa_pernambuco_cinza.png"
              alt="Mapa de Pernambuco"
              className="w-full h-auto"
            />

          {/* Pins de localização */}
          {representatives.map((rep) => (
            <div
              key={rep.id}
              className="absolute z-10"
              style={{ top: rep.top, left: rep.left, transform: "translate(-50%, -100%)" }}
              onMouseEnter={() => setHoveredId(rep.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex flex-col items-center group cursor-pointer">
                <MapPin className="w-16 h-16 text-[#0B1A2A] drop-shadow-md" />

                <div
                  className={`mt-2 bg-white rounded-lg shadow-lg px-4 py-2 text-sm text-left transition-opacity duration-300 ease-in-out
                    ${hoveredId === rep.id ? "opacity-100 visible" : "opacity-0 invisible"}
                  `}
                >
                  <p className="font-bold text-[#BB1717]">{rep.name}</p>
                  <p className="text-gray-700">{rep.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </div>
  );
}

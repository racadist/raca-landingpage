"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { products } from "@/data/products"; 
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { representantes } from "@/components/ProductSections/ContactSection/contactSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full font-poppins">
        {/* Seção principal */}
        <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full mt-70 h-[320px] bg-[#223872] z-0" />
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
          <Button className="bg-white text-[#24306B] mt-4 text-xl px-6 py-2 rounded-full hover:bg-[#bb1717] transition cursor-pointer">
            Informações Nutricionais
            <ChevronDown className="inline mr-2 size-6" />
          </Button>
        </div>
      </div>

      {/* Mapa */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#223872] font-gilroy mb-6 sm:mb-0">
          Entre em contato com nossos representantes
        </h2>
      <section className="relative px-4 w-full p-6">
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center">
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image
                src="/img/mapa_pernambuco.png" 
                alt="Mapa de Pernambuco"
                width={500}
                height={350}
                className="object-contain"
              />
            </div>
    
             {/* Cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {representantes.map((rep, index) => (
            <motion.div
              key={rep.nome}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              className="bg-[#223872] shadow p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-extrabold text-white">
                {rep.nome}
              </h3>
              <p className="text-sm text-white mt-1">📍 {rep.regiao}</p>
              <a
                href={`https://wa.me/${rep.whatsapp}`}
                target="_blank"
                className="inline-block mt-4 bg-white text-[#26294D] font-poppins px-4 py-2 rounded-full text-sm hover:bg-[#bb1717] transition"
              >
                Entrar em contato
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
}
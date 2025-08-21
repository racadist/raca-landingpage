"use client";
import React, { useState, useRef } from "react";
import { useParams } from "next/navigation";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { representantes } from "@/components/ProductSections/ContactSection/contactSection";
import { NutritionSection } from "@/components/NutritionModal/nutritionModal";

export default function ProductPage() {
  const params = useParams<{ slug: string }>();
  const product = products.find((p) => p.id === params.slug);
  const [showNutrition, setShowNutrition] = useState(false);

  const contactSectionRef = useRef(null);
  const isInView = useInView(contactSectionRef, { once: true, margin: "-100px" });

  if (!product) {
    return (
      <div className="text-center mt-10 text-red-600 font-semibold">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full font-poppins overflow-x-hidden">
      {/* Seção principal */}
      <div className="relative w-full flex flex-col items-center">
        <div className="absolute top-0 left-0 w-full mt-70 h-[320px] bg-[#223872] z-0" />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="relative z-50 mt-16"
            priority
          />
        </motion.div>
        <div className="relative z-10 flex flex-col items-center w-full mb-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl font-bold text-center text-white"
          >
            {product.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl text-center px-4 mt-2 text-white"
          >
            {product.description}
          </motion.p>
        </div>
      </div>
      {/* Botão de informações nutricionais */}
      {(product.nutrition || product.ingredients) && (
        <Button
          onClick={() => setShowNutrition(!showNutrition)}
          className="bg-[#bb1717] text-white mt-4 text-xl px-6 py-2 hover:bg-[#bb1717] rounded-full cursor-pointer"
        >
          Informações Nutricionais
          {showNutrition ? (
            <ChevronUp className="inline ml-2 size-6" />
          ) : (
            <ChevronDown className="inline ml-2 size-6" />
          )}
        </Button>
      )}
      {/* Seção expansível */}
      {showNutrition && (
        <NutritionSection
          nutrition={product.nutrition}
          ingredients={product.ingredients}
        />
      )}

      {/* Mapa */}
      <section ref={contactSectionRef} className="relative px-4 w-full p-6">
        <h2
          className={`
            text-3xl sm:text-4xl font-extrabold text-center text-[#223872] font-gilroy mb-6 sm:mb-0 mt-10
            transition-all duration-1000 ease-out
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
          `}
        >
          Entre em contato com nossos representantes
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center mt-8">
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
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
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
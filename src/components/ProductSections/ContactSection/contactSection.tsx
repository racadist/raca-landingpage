"use client";

import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const representantes = [
  {
    nome: "Maria Oliveira",
    cidade: "Recife",
    regiao: "Região Metropolitana",
    whatsapp: "5581999999999",
  },
  {
    nome: "João Silva",
    cidade: "Caruaru",
    regiao: "Agreste",
    whatsapp: "5581988888888",
  },
];

export function ContactMapSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 py-12 bg-[#F9FAFB] font-gilroy"
    >
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-[#223872]">
        Entre em contato com nossos representantes
      </h2>

      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center">
        {/* Mapa */}
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
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 * index, duration: 0.6 }}
              className="bg-[#223872] shadow p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-extrabold text-white">
                {rep.nome}
              </h3>
              <p className="text-sm text-white mt-1">{rep.regiao}</p>
              <p className="text-sm text-white mt-1">📍 {rep.cidade}</p>
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
  );
}
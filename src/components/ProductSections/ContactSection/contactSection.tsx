"use client";

import Image from "next/image";
import { motion } from "motion/react";

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
  return (
    <section className="w-full px-4 py-12 bg-[#F9FAFB] font-poppins">
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-10 text-[#26294D]">
        Entre em contato com nossos representantes
      </h2>

      {/* Layout responsivo */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-center">
        {/* Imagem do mapa */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/img/mapa_pernambuco.png" 
            alt="Mapa de Pernambuco"
            width={500}
            height={350}
            className="object-contain"
          />
        </div>

        {/* Lista de representantes */}
        <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {representantes.map((rep, index) => (
            <motion.div
              key={rep.nome}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 2, y: 0 }}
              transition={{ delay: 0.6 * index, duration: 0.5 }}
              className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#bb1717]">
          {rep.nome}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{rep.regiao}</p>
              <p className="text-sm text-gray-600 mt-1">📍 {rep.cidade}</p>
              <a
                href={`https://wa.me/${rep.whatsapp}`}
                target="_blank"
                className="inline-block mt-4 bg-[#26294D] text-white px-4 py-2 rounded-full text-sm hover:bg-[#bb1717] transition"
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

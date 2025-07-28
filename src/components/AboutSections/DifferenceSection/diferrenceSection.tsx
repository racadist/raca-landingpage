"use client";
import React from "react";
import Image from "next/image";
import { User, Forklift, Handshake, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
import { HexagonImage } from "@/components/HexagonImage/hexagonImage";

const features = [
  {
    icon: <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Qualidade",
    red: false,
  },
  {
    icon: <Forklift className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Eficiência",
    red: true,
  },
  {
    icon: <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Dedicação",
    red: false,
  },
];

export function DifferenceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-44 md:gap-24 px-4">

        <HexagonImage />
        {/* Conteúdo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6 font-gilroy font-extrabold">
            O que nos diferencia
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-4 font-poppins">
            Na Raça Distribuidora, nosso diferencial vai muito além de entregar produtos,
            entregamos confiança, compromisso e parceria de verdade.          
          </p>
          <p className="text-gray-500 text-base sm:text-lg mb-8 font-poppins">
            Sempre atuando com uma logística ágil e cobertura regional eficaz.
          </p>

           {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.6 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center justify-center px-6 py-6 sm:px-8 sm:py-8 w-[160px] sm:w-[180px] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-default ${
                  feature.red ? "bg-[#bb1717] text-white" : "bg-[#0B1623] text-white"
                }`}
              >
                {feature.icon}
                <span className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center">
                  {feature.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

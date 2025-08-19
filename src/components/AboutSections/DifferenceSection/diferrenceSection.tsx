"use client";
import React from "react";
import { Forklift, Handshake, BadgeCheck } from "lucide-react";
import { motion } from "motion/react";
import { SquareImage } from "@/components/AboutSections/SquareImage/squareImage";

const features = [
  {
    icon: <BadgeCheck className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Qualidade",
  },
  {
    icon: <Forklift className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Eficiência",
  },
  {
    icon: <Handshake className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Dedicação",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-44 md:gap-40">

      <SquareImage />
      {/* Conteúdo */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-[#223872] mb-4 sm:mb-6 font-gilroy font-extrabold text-center">
        O que nos diferencia
        </h2>
        <div className="max-w-2xl self-center px-3">
          <p className="text-muted-foreground font-semibold text-base sm:text-lg mb-4 font-poppins text-center lg:text-end">
          Na Raça Distribuidora, nosso diferencial vai muito além de entregar produtos,
          entregamos confiança, compromisso e parceria.          
          </p>
          <p className="text-muted-foreground font-semibold text-base sm:text-lg mb-8 font-poppins text-center lg:text-end">
          Sempre atuando com uma logística ágil e cobertura regional eficaz.
          </p>
        </div>
         {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center px-6 py-6 sm:px-8 sm:py-8 w-[200px] sm:w-[200px] sm:h-[200px] transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-default bg-[#223872] text-white hover:bg-[#BB1717] shadow-lg"
          >
          {feature.icon}
          <span className="mt-3 sm:mt-4 text-base sm:text-xl font-semibold text-center">
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

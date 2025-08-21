"use client";
import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { motion } from "motion/react";

const seals = [
  {
    name: "Qualidade Logistíca",
    image: "/img/seal_1.png",
  },
  {
    name: "Distribuidor Itambé",
    image: "/img/seal_2.png",
  },
  {
    name: "Experiência de Mercado",
    image: "/img/seal_3.png",
  },
];

export function SealSection() {
  return (
    <div className="w-full py-12 px-4">
      {/* Título */}
      <motion.div
        className="text-center mb-14"
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#223872] font-gilroy">
          Selos de Confiança
        </h2>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex sm:flex-wrap sm:justify-center gap-12 overflow-x-auto sm:overflow-x-visible px-2 sm:px-0 snap-x"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {seals.map((seal, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center flex-shrink-0 snap-center"
            variants={{
              hidden: { opacity: 0, scale: 0.8, y: 40 },
              show: { opacity: 1, scale: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Imagem redonda */}
            <motion.div
              className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl bg-white"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            >
              <Image
                src={seal.image}
                alt={seal.name}
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </motion.div>

            {/* Card com selo */}
            <motion.div
              className="flex items-center gap-2 bg-white rounded-xl shadow-md px-6 py-3 -mt-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="bg-[#bb1717] rounded-full p-2 flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[#bb1717] font-bold text-lg leading-tight">
                  {seal.name}
                </span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

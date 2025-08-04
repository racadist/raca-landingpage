import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

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
      <div className="text-center mb-14">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#223872] font-gilroy">
          Selos de Confiança
        </h2>
      </div>

      {/* Cards */}
      <div className="flex sm:flex-wrap sm:justify-center gap-12 overflow-x-auto sm:overflow-x-visible px-2 sm:px-0 snap-x">
        {seals.map((seal, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center flex-shrink-0 snap-center"
          >
            {/* Imagem redonda */}
            <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-xl bg-white">
              <Image
                src={seal.image}
                alt={seal.name}
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Card com selo */}
            <div className="flex items-center gap-2 bg-white rounded-xl shadow-md px-6 py-3 -mt-6 z-10">
              <span className="bg-[#bb1717] rounded-full p-2 flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[#bb1717] font-bold text-lg leading-tight">
                  {seal.name}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

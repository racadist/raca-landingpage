import React from "react";
import Image from "next/image";
import { BadgeCheck } from "lucide-react";

const seals = [
  {
    name: "Jessica Brown",
    role: "Farmer",
    image: "/img/seal_1.png",
  },
  {
    name: "Jessica Brown",
    role: "Farmer",
    image: "/img/seal_1.png",
  },
  {
    name: "Jessica Brown",
    role: "Farmer",
    image: "/img/seal_1.png",
  },
];

export function SealSection() {
  return (
    <div className=" bg-[#E6F0FA] py-8">
      {/* Título */}
      <div className="text-center mb-14">
        <p className="text-gray-500 text-2xl mb-2 font-comic-neue">
          Quem confia na gente
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 font-poppins">
          Selos de Confiança
        </h2>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-end gap-24">
        {seals.map((seal, idx) => (
          <div key={idx} className="flex flex-col items-center relative">
            {/* Imagem redonda */}
            <div className="w-56 h-56 sm:w-68 sm:h-68 rounded-full overflow-hidden shadow-xl bg-white">
              <Image
                src={seal.image}
                alt={seal.name}
                width={224}
                height={224}
                className="object-cover w-full h-full justify-center"
              />
            </div>

            {/* Card com selo */}
            <div className="flex items-center gap-2 bg-white rounded-xl shadow-md px-6 py-3 mt-[-24px] z-10">
              <span className="bg-[#bb1717] rounded-full p-2 flex items-center justify-center">
                <BadgeCheck className="w-6 h-6 text-white" />
              </span>
              <div className="flex flex-col">
                <span className="text-[#bb1717] font-bold text-lg leading-tight">
                  {seal.name}
                </span>
                <span className="text-gray-400 text-sm -mt-1">
                  {seal.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

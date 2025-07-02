import React from "react";
import Image from "next/image";
import { User } from "lucide-react";

const features = [
  {
    icon: <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Harvesting",
    red: false,
  },
  {
    icon: <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Maintenance",
    red: true,
  },
  {
    icon: <User className="w-10 h-10 sm:w-12 sm:h-12 text-white" />,
    title: "Fencing",
    red: false,
  },
];

export function DifferenceSection() {
  return (
    <section className="py-16 bg-white">
      <div className=" mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Imagem com fundo azul */}
        <div className="flex-1 flex justify-center relative">
          {/* Círculo azul atrás da imagem */}
          <div className="hidden sm:block absolute left-1/3 -translate-x-1/2 sm:left-[5%] sm:translate-x-0 top-1/2 -translate-y-1/2 w-[300px] sm:w-[380px] md:w-[420px] h-[300px] sm:h-[380px] md:h-[420px] bg-[#E6F0FA] rounded-full z-0" />
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white z-10 w-[240px] sm:w-[400px] md:w-[500px]">
            <Image
              src="/img/homem_raça.png"
              alt="Entregador Raca Distribuição"
              width={500}
              height={550}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 font-poppins">
            O que nos diferencia
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-4">
            Lorem ipsum dolor sit amet nsectetur cing elit. Suspe ndsse suscipit sagittis leo sit met entum estibu dignissim posuere cubilia durae. Leo sit met entum cubilia crae onec.
          </p>
          <p className="text-gray-500 text-base sm:text-lg mb-8">
            Lorem ipsum dolor sit amet adipiscing elit. Nulla placerat posuere dui. Pellentesque venenatis sem non lacus ac auctor.
          </p>

          {/* Cards de destaque */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col items-center justify-center rounded-xl px-6 py-6 sm:px-8 sm:py-8 w-[170px] sm:w-43 sm:h-48 transition-colors ${
                  feature.red ? "bg-[#bb1717] text-white" : "bg-[#0B1623] text-white"
                }`}
              >
                {feature.icon}
                <span className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-center">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

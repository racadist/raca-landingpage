import React from "react";
import Image from "next/image";
import { User, Forklift, Handshake, BadgeCheck } from "lucide-react";

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
        {/* Imagem com fundo azul */}
        <div className="flex-1 flex justify-center relative w-full max-w-[500px] mx-auto lg:mx-0">
          {/* Círculo azul atrás da imagem */}
          <div className="hidden sm:block absolute right-7 -translate-x-1/2 sm:translate-x-0 top-1/2 -translate-y-1/2 w-[380px] sm:w-[560px] md:w-[540px] h-[380px] sm:h-[460px] md:h-[430px] bg-[#E6F0FA] rounded-full z-0" />
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-white z-10 w-[240px] sm:w-[380px] md:w-[460px]">
            <Image
              src="/img/homem_raça.png"
              alt="Entregador Raca Distribuição"
              width={460}
              height={500}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6 font-poppins">
            O que nos diferencia
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mb-4">
            Na Raça Distribuidora, nosso diferencial vai muito além de entregar produtos,
            entregamos confiança, compromisso e parceria de verdade.          
          </p>
          <p className="text-gray-500 text-base sm:text-lg mb-8">
            Sempre atuando com uma logística ágil e cobertura regional eficaz.
          </p>

          {/* Cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center sm:justify-start">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`flex flex-col items-center justify-center rounded-xl px-6 py-6 sm:px-8 sm:py-8 w-[160px] sm:w-[180px] transition-colors ${
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

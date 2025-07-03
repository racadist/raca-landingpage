"use client";
import React, { useState } from "react";
import { MapPin } from "lucide-react";

const representatives = [
  {
    id: "zona-da-mata",
    name: "Zona da Mata",
    phone: "(81) 99999-1234",
    top: "70%", // ajuste conforme imagem
    left: "20%",
  },
  {
    id: "sertao",
    name: "Sertão",
    phone: "(87) 98888-4321",
    top: "95%",
    left: "85%",
  },
];

export function ContactMapSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="relative py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#0B1A2A] font-poppins mb-6 sm:mb-0">
        Fale com nossos representantes
      </h2>

      <div className="relative max-w-4xl sm:max-w-5xl mx-auto w-full">
        {/* Mapa de Pernambuco */}
        <div className="relative w-full">
          <img
            src="/img/mapa_pernambuco.png"
            alt="Mapa de Pernambuco"
            className="w-full h-auto"
          />

        {/* Pins de localização */}
        {representatives.map((rep) => (
          <div
            key={rep.id}
            className="absolute z-10"
            style={{ top: rep.top, left: rep.left, transform: "translate(-50%, -100%)" }}
            onMouseEnter={() => setHoveredId(rep.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col items-center group cursor-pointer">
              <MapPin className="w-16 h-16 text-[#0B1A2A] drop-shadow-md" />

              <div
                className={`mt-2 bg-white rounded-lg shadow-lg px-4 py-2 text-sm text-left transition-opacity duration-300 ease-in-out
                  ${hoveredId === rep.id ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
              >
                <p className="font-bold text-[#BB1717]">{rep.name}</p>
                <p className="text-gray-700">{rep.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

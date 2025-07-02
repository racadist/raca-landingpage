"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./types";

export function SectionTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#EAF3FF80] py-12 px-4 sm:px-6 md:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center py-6 sm:py-8 font-poppins text-[#0B1A2A]">
        Veja o que nossos clientes falam da gente
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
        <button
          onClick={prev}
          className="p-2 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition"
        >
          <ChevronLeft className="text-[#BB1717]" />
        </button>

        <div className="relative mt-4 sm:mt-6 max-w-full sm:max-w-[520px] w-full px-4 sm:px-0">
          <img
            src="img/quote-big.png"
            alt="Quote Big"
            className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 w-12 h-12 sm:w-20 sm:h-20 z-0"
          />
          <div className="bg-[#19233A] text-white rounded shadow-lg px-6 sm:px-10 py-6 sm:py-8 z-10 relative h-60">
            <p className="text-base sm:text-lg md:text-xl font-poppins mb-4 sm:mb-6">
              {testimonials[current].text}
            </p>
            <div className="absolute bottom-4 right-4">
              <div className="font-bold">{testimonials[current].name}</div>
              <div className="text-[#BB1717] font-semibold text-sm">{testimonials[current].role}</div>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="p-2 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition"
        >
          <ChevronRight className="text-[#BB1717]" />
        </button>
      </div>

      <div className="flex justify-center mt-6 gap-3 flex-wrap">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 ${
              current === idx ? "bg-[#BB1717] border-[#BB1717]" : "bg-white border-[#BB1717]"
            } transition`}
            aria-label={`Selecionar depoimento ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

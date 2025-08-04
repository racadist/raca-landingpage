"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./types";

export function SectionTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#F9FAFB] py-8 px-2 sm:py-14 sm:px-6 md:px-12">
      <h1 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-center py-4 sm:py-8 font-gilroy text-[#223872] mb-6 sm:mb-9">
        Veja o que nossos clientes falam da gente
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-16">
        <button
          onClick={prev}
          className="p-2 sm:p-4 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition cursor-pointer"
          style={{ marginRight: '0.5rem' }}
        >
          <ChevronLeft className="text-[#BB1717] w-6 h-6 sm:w-9 sm:h-9" />
        </button>

        <div className="relative mt-2 sm:mt-6 w-full max-w-[95vw] sm:max-w-[700px] px-2 sm:px-0">
          <img
            src="img/quote-big.png"
            alt="Quote Big"
            className="absolute -top-6 -left-6 sm:-top-12 sm:-left-12 w-12 h-12 sm:w-24 sm:h-24 z-0"
          />
          <div className="bg-[#19233A] text-white rounded shadow-lg px-4 sm:px-16 py-6 sm:py-16 z-10 relative min-h-[200px] sm:h-72 flex flex-col justify-between">
            <p className="text-base sm:text-xl md:text-2xl font-poppins mb-4 sm:mb-8">
              {testimonials[current].text}
            </p>
            <div className="self-end">
              <div className="font-bold text-sm sm:text-base">{testimonials[current].name}</div>
              <div className="text-[#BB1717] font-semibold text-xs sm:text-base">{testimonials[current].role}</div>
            </div>
          </div>
        </div>

        <button
          onClick={next}
          className="p-2 sm:p-4 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition cursor-pointer"
          style={{ marginLeft: '0.5rem' }}
        >
          <ChevronRight className="text-[#BB1717] w-6 h-6 sm:w-9 sm:h-9" />
        </button>
      </div>

      <div className="flex justify-center mt-4 sm:mt-6 gap-2 sm:gap-3 flex-wrap">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 ${
              current === idx ? "bg-[#BB1717] border-[#BB1717]" : "bg-white border-[#BB1717]"
            } transition`}
            aria-label={`Selecionar depoimento ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

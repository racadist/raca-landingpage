"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./types";

export function SectionTestimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <div className="bg-[#F9FAFB] py-14 px-4 sm:px-6 md:px-12">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center py-6 sm:py-8 font-gilroy text-[#0B1A2A] mb-9">
        Veja o que nossos clientes falam da gente
      </h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-16">
        <button
          onClick={prev}
          className="p-3 sm:p-4 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition cursor-pointer"
          style={{ marginRight: '0.5rem' }}
        >
          <ChevronLeft className="text-[#BB1717] w-7 h-7 sm:w-9 sm:h-9" />
        </button>

        <div className="relative mt-4 sm:mt-6 max-w-full sm:max-w-[700px] w-full px-4 sm:px-0">
          <img
        src="img/quote-big.png"
        alt="Quote Big"
        className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-16 h-16 sm:w-24 sm:h-24 z-0"
          />
          <div className="bg-[#19233A] text-white rounded shadow-lg px-12 sm:px-16 py-12 sm:py-16 z-10 relative h-72 flex flex-col justify-between">
        <p className="text-lg sm:text-xl md:text-2xl font-poppins mb-6 sm:mb-8">
          {testimonials[current].text}
        </p>
        <div className="self-end">
          <div className="font-bold">{testimonials[current].name}</div>
          <div className="text-[#BB1717] font-semibold text-base">{testimonials[current].role}</div>
        </div>
          </div>
        </div>

        <button
          onClick={next}
          className="p-3 sm:p-4 rounded-full border border-[#BB1717] hover:bg-[#BB1717]/10 transition cursor-pointer"
          style={{ marginLeft: '0.5rem' }}
        >
          <ChevronRight className="text-[#BB1717] w-7 h-7 sm:w-9 sm:h-9" />
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

"use client";
import { useRef } from "react";
import { useInView } from "motion/react";
import { SegmentsSection, ContactMapSection, GridProducts } from "@/components";

export default function Products() {
  const titleRef = useRef(null);
  const isInView = useInView(titleRef, { once: true, margin: "-100px" });

  return (
    <div className="relative">
      <h1
        ref={titleRef}
        className={`
          text-3xl sm:text-5xl font-extrabold text-[#223872] font-gilroy mt-24 mb-6 text-center
          transition-all duration-1000 ease-out
          ${isInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"}
        `}
      >
        Explore nossos produtos
      </h1>
      <section className="mb-16 px-4 sm:px-10">
        <GridProducts />
      </section>
      <section>
        <h2 className="text-3xl md:text-5xl font-semibold font-gilroy text-[#223872] text-center">
          Nossos Clientes
        </h2>
        <SegmentsSection />
      </section>
      <section className="mb-16">
        <ContactMapSection />
      </section>
    </div>
  );
}
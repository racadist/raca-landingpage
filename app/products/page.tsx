"use client";
import { SegmentsSection, ContactMapSection, GridProducts } from "@/components";

export default function Products() {
    return (
        <div className="relative">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#223872] font-gilroy mt-24 mb-6 text-center">
                Explore nossos produtos
            </h1>
            <section className="mb-16 px-4 sm:px-10">
              <GridProducts />
            </section>
            <section className="mb-16">
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
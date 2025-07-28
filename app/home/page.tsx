"use client";

import { SectionAbout, SectionTestimonials, SectionProducts } from "@/components";


export default function Home() {

  return (
    <main className="relative">
      <section
        id="home"
        className="relative bg-[url('/img/home-bg.png')] bg-cover bg-center bg-no-repeat pt-32 pb-16 z-10"
      >
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="container w-full h-[700px] mx-auto px-4 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-gilroy leading-tight mb-6">
              Distribuindo <br /> Qualidade e Confiança
            </h1>
            <h2 className="text-2xl sm:text-3xl font-light font-gilroy">Desde 1992</h2>
          </div>
        </div>
      </section>

      {/* Seção About */}
      <section className="mb-16 mt-22 sm:mt-10 my-24">
        <div className="container mx-auto">
          <SectionAbout />
        </div>
      </section>
      {/* Seção Produtos */}
      <section className="my-24">
        <SectionProducts/>
      </section>
      {/* Seção Depoimentos */}
      <section className="my-24">
        <SectionTestimonials />
      </section>
    </main>
  );
}

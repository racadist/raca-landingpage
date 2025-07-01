"use client";

import { TopBar, SectionAbout } from "@/components";


export default function Home() {
  return (
    <main className="relative">

      <TopBar menuButtonColor="white" />

      <section
        id="home"
        className="relative bg-[url('/img/home-bg.png')] bg-cover bg-center bg-no-repeat pt-32 pb-16 z-10"
      >
        <div className="absolute inset-0 bg-black/60 -z-10" />

        <div className="container w-full h-[700px] mx-auto px-4 flex items-center justify-center">
          <div className="text-white text-center max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-poppins leading-tight mb-6">
              Distribuindo <br /> Qualidade e Confiança
            </h1>
            <h2 className="text-2xl sm:text-3xl font-light font-poppins">desde 1992</h2>
          </div>
        </div>
      </section>

      {/* Seção About */}
      <section className="mt-16 mb-16">
        <div className="container mx-auto px-4">
          <SectionAbout />
        </div>
      </section>
    </main>
  );
}

import { DifferenceSection, SealSection, PillarsSection } from "@/components";

export default function About() {
  return (
    <div className="relative">
    <h1 className="text-5xl font-extrabold font-gilroy mt-24 mb-4 text-center text-[#223872]">
      Sobre Nós
    </h1>
    <p className="text-lg text-gray-800 text-center max-w-2xl mx-auto mb-12 font-poppins">
      Conheça o que torna a Raça Distribuidora única no mercado.
    </p>
  
    {/* Seção: O que nos diferencia */}
    <section className="mb-16 px-4 sm:px-10">
      <div className="container mx-auto">
        <DifferenceSection />
      </div>
    </section>
    {/* Seção: Nossos Pilares */}
    <section className="mb-16">
        <PillarsSection />
    </section>  
    {/* Seção: Selos */}
    <section className="mb-16">
      <SealSection />
    </section>
  </div>
  );
}

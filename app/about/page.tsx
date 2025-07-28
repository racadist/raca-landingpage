import { DifferenceSection, SealSection } from "@/components";

export default function About() {
  return (
    <div className="relative">
      <h1 className="text-5xl font-extrabold font-gilroy mt-24 mb-6 text-center">
        Sobre Nós
      </h1>

      <section className="mb-16 px-4 sm:px-10">
        <div className="container mx-auto">
          <DifferenceSection />
        </div>
      </section>

      <section className="mb-16">
        <SealSection />
      </section>
    </div>
  );
}

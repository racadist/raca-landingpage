import { Check } from "lucide-react";
import { Button } from "../ui/button";

export function SectionAbout() {
  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex items-center justify-center relative min-h-[400px]">
          <div className="relative w-full max-w-[400px] h-[400px] sm:h-[450px]">
            <div className="absolute top-8 right-28 sm:right-32 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-xl bg-[#19233A] z-0" />
            <img
              src="/img/mulher_itambe.png"
              alt="Mulher Bebendo Bebida Itambé"
              className="absolute top-0 left-0 w-[250px] sm:w-[300px] md:w-[360px] h-auto rounded-xl object-cover z-10 shadow-lg"
            />
            <img
              src="/img/homem_raça.png"
              alt="Entregador"
              className="absolute sm:bottom-[-90px] right-0 left-37 xl:-left-20 xl:right-80 w-[180px] sm:w-[220px] md:w-[260px] h-auto rounded-xl object-cover z-20 shadow-xl"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium font-comic-neue text-muted-foreground">
            Conheça um pouco sobre a gente
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1A2A] font-poppins mt-2">
            A única distribuidora Itambé de PE
          </h1>
          <p className="text-base sm:text-lg max-w-2xl text-[#BB1717] font-poppins mt-6">
            Lorem ipsum is simply free text used by copytypinh refreshing.
            Neque porro est qui
          </p>
          <p className="text-base sm:text-lg max-w-2xl text-muted-foreground font-poppins mt-4">
            There are many variations of passages of lorem ipsum available but the
            majority have suffered alteration in some form by injected humor or
            random word which don’t look even.
          </p>
          <div className="mt-6 space-y-4 font-semibold font-poppins text-base sm:text-lg">
            <div className="flex items-center space-x-2">
              <Check className="text-[#24306B]" />
              <span>Suspe ndisse suscipit sagittis leo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-[#24306B]" />
              <span>Suspe ndisse suscipit sagittis leo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="text-[#24306B]" />
              <span>Suspe ndisse suscipit sagittis leo</span>
            </div>
          </div>
          <Button
            size="lg"
            className="bg-[#BB1717] text-white mt-6 hover:bg-[#BB1717]/90 transition hover:scale-105 font-poppins font-bold h-14 text-lg sm:text-xl"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </div>
  );
}

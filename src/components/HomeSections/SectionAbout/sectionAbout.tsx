import { Check } from "lucide-react";
import { Button } from "../../ui/button";
import Image from "next/image";

export function SectionAbout() {
  return (
    <div className="container mx-auto px-4 mt-10">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 flex items-center justify-center relative min-h-[400px] -mt-20">
          <div className="relative w-full max-w-[400px] h-[400px] sm:h-[450px]">
            <div className="absolute top-8 right-28 sm:right-32 w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-xl bg-[#19233A] z-0" />
            <Image
              width={550}
              height={360}
              src="/img/pessoas_falando.png"
              alt="Mulher Bebendo Bebida Itambé"
              className="absolute top-0 left-0 w-[500px] sm:w-[500px] md:w-[500px] h-auto rounded-xl z-10 shadow-lgr"
            />
            <Image
              width={550}
              height={300}
              src="/img/productsItambeRaca.png"
              alt="Entregador"
              className="absolute bottom-[-30px] sm:bottom-[-40px] right-0 left-20 md:left-0 xl:-left-20 xl:right-80 w-[200px] sm:w-[320px] md:w-[460px] h-56 rounded-xl object-cover z-20 shadow-xl"
            />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-medium font-poppins text-muted-foreground">
            Conheça um pouco sobre a gente
          </h3>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#223872] font-gilroy mt-2">
            A única distribuidora Itambé de PE
          </h1>
          <p className="text-base sm:text-lg max-w-2xl text-[#BB1717] font-gilroy mt-6">
            Distribuição com qualidade e confiança, é assim que se faz.
          </p>
          <p className="text-base sm:text-lg max-w-2xl text-muted-foreground font-semibold font-poppins mt-4">
            Com mais de 30 anos de história, a Raça Distribuidora é referência no fornecimento de
            alimentos para supermercados, padarias, food service e outros negócios. Somos o
            distribuidor oficial da Itambé em Pernambuco, sempre prezando por logística eficiente,
            atendimento próximo e um compromisso inegociável com a qualidade.
          </p>
          <div className="mt-6 space-y-4 font-semibold font-gilroy text-base sm:text-lg text-[#223872]">
            <div className="flex items-center space-x-2">
              <Check />
              <span>Priorizamos o relacionamento próximo com cada cliente</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check />
              <span>Entregamos qualidade, pontualidade e preço competitivo</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check />
              <span>Para nós, parceria não se mede em volume, mas em confiança.</span>
            </div>
          </div>
          <Button
            onClick={() => window.location.href = "/about"}
            size="lg"
            className="bg-[#BB1717] text-white mt-6 hover:bg-[#BB1717]/90 transition hover:scale-105 font-gilroy font-bold h-14 text-lg sm:text-xl cursor-pointer"
          >
            Saiba mais
          </Button>
        </div>
      </div>
    </div>
  );
}

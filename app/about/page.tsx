import { DifferenceSection, SealSection } from "@/components";

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

    <section className="relative overflow-hidden mb-16 mt-20 sm:mt-16 my-26">
      {/* Fundo inclinado com degradê */}
      <div
        className="absolute inset-0 bg-[#223872] z-0"
        style={{
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container mx-auto py-24 px-4 sm:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-gilroy font-extrabold text-white text-center mb-16">
          Nossos Pilares
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-[#BB1717] mb-3">
              Distribuidor Oficial Itambé em Pernambuco
            </h3>
            <p className="text-muted-foreground font-semibold font-poppins">
              Somos o distribuidor exclusivo da Itambé no estado, garantindo excelência em cada entrega.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-[#BB1717] mb-3">
              Logística Inteligente e Cobertura Estratégica
            </h3>
            <p className="text-muted-foreground font-semibold font-poppins">
              Atuamos com agilidade e eficiência, alcançando toda a região com precisão e rapidez.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-[#BB1717] mb-3">
              Relacionamento que Gera Resultados
            </h3>
            <p className="text-muted-foreground font-semibold font-poppins">
              Acreditamos em conexões reais: nosso foco está em entender e atender cada cliente de forma personalizada.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold text-[#BB1717] mb-3">
              Compromisso com Qualidade e Competitividade
            </h3>
            <p className="text-muted-foreground font-semibold font-poppins">
              Entregamos mais do que produtos — oferecemos pontualidade, qualidade e preços justos.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="mb-16">
      <SealSection />
    </section>
  </div>
  );
}

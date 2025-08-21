"use client";
import { motion } from "motion/react";

export function PillarsSection() {
  return (
    <div className="relative overflow-hidden mt-20 sm:mt-16 px-2 sm:px-6 md:px-12">

      {/* Fundo inclinado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[#223872] z-0"
        style={{
          clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0% 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 py-24 px-4 sm:px-10">
        <motion.h2
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-gilroy font-extrabold text-white text-center mb-16"
        >
          Nossos Pilares
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {[
            {
              title: "Distribuidor Oficial Itambé em Pernambuco",
              text: "Somos o distribuidor exclusivo da Itambé no estado, garantindo excelência em cada entrega.",
            },
            {
              title: "Logística Inteligente e Cobertura Estratégica",
              text: "Atuamos com agilidade e eficiência, alcançando toda a região com precisão e rapidez.",
            },
            {
              title: "Relacionamento que Gera Resultados",
              text: "Acreditamos em conexões reais: nosso foco está em entender e atender cada cliente de forma personalizada.",
            },
            {
              title: "Compromisso com Qualidade e Competitividade",
              text: "Entregamos mais do que produtos — oferecemos pontualidade, qualidade e preços justos.",
            },
          ].map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <h3 className="text-xl font-semibold text-[#BB1717] mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground font-semibold font-poppins">
                {pillar.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

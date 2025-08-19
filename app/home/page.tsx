"use client";

import { SectionAbout, SectionTestimonials, SectionProducts } from "@/components";
import { useEffect, useState } from "react";

const dynamicWords = [
  "qualidade",
  "confiança",
  "adaptabilidade",
  "com raça",
  "parceria",
  "agilidade",
  "impacto",
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = dynamicWords[wordIndex];
      const updatedText = isDeleting
        ? currentWord.substring(0, text.length - 1)
        : currentWord.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000); 
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % dynamicWords.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const timeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <main className="relative">
      <section
        id="home"
        className="relative bg-[url('/img/home-bg.png')] bg-cover bg-center bg-no-repeat pt-32 pb-16 z-10"
      >
        <div className="absolute inset-0 bg-black/60 -z-10" />
        <div className="container w-full h-[700px] mx-auto px-4 flex items-center justify-center">
          <div className="text-white text-center max-w-8xl">
            <h1 className="text-5xl sm:text-5xl lg:text-8xl md:text-6xl font-extrabold font-gilroy leading-tight mb-6">
              Há mais de 30 anos distribuindo <br /> 
              <span className="text-white">{text}</span>
              <span className="animate-ping">|</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Seção About */}
      <section className="mb-16 mt-32 sm:mt-16 my-26">
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

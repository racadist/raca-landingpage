"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import Image from "next/image";
import "react-multi-carousel/lib/styles.css";

const segments = [
  { name: "Atacabom", img: "/img/segments/atacabom.png", alt: "Atacabom" },
  { name: "Bom Dia Supermercado 2", img: "/img/segments/bomdiasupermercado2.png", alt: "Bom Dia Supermercado 2" },
  { name: "Atacarejo Mercadão", img: "/img/segments/atacarejomercadao.png", alt: "Atacarejo Mercadão" },
  { name: "Atacarejo SM", img: "/img/segments/atacarejosm.png", alt: "Atacarejo SM" },
  { name: "Bom Dia Supermercado", img: "/img/segments/bomdiasupermercado.png", alt: "Bom Dia Supermercado" },
  { name: "Estrela do Ouro", img: "/img/segments/estrelasouro.png", alt: "Estrela do Ouro" },
  { name: "Leve Mais", img: "/img/segments/levemais.png", alt: "Leve Mais" },
  { name: "Mercadinho Cruz", img: "/img/segments/mercadinhocruz.png", alt: "Mercadinho Cruz" },
  { name: "Mercadinho Muito Mais", img: "/img/segments/mercadinhomuitomais.png", alt: "Mercadinho Muito Mais" },
  { name: "Mini Preço", img: "/img/segments/minipreco.png", alt: "Mini Preço" },
  { name: "Nordestino Supermercados", img: "/img/segments/nordestinosupermecados.png", alt: "Nordestino Supermercados" },
  { name: "Preço Baixo", img: "/img/segments/precobaixo.png", alt: "Preço Baixo" },
  { name: "Super Kanela", img: "/img/segments/superkanela.png", alt: "Super Kanela" },
  { name: "Supermercado Bia", img: "/img/segments/supermercadobia.png", alt: "Supermercado Bia" },
  { name: "Supermercado Guararapes", img: "/img/segments/supermercadoguararapes.png", alt: "Supermercado Guararapes" },
  { name: "Supermercado Santana", img: "/img/segments/supermercadosantana.png", alt: "Supermercado Santana" },
];

// Configurações de responsividade
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

export function SegmentsSection() {
  return (
    <section className="bg-[#fafcff] py-12 text-center">
      <h2 className="text-3xl md:text-4xl font-semibold font-gilroy text-[#223872] mb-10">
        Nossos Clientes
      </h2>

      <div className="px-4">
      <Carousel
          responsive={responsive}
          autoPlay
          autoPlaySpeed={2000}
          infinite
          arrows={false}
          showDots={false}
          draggable={false}
          pauseOnHover={false}
        >
          {segments.map((segment) => (
            <div
              key={segment.name}
              className="flex mx-4 h-full min-h-12 rounded-lg justify-center items-center"
            >
              <div
                className="relative"
                style={{ height: "200px", width: "189px" }}
              >
                <Image
                  src={segment.img}
                  alt={segment.alt}
                  fill
                  className="object-contain select-none pointer-events-none"
                  draggable={false}
                  sizes="(max-width: 768px) 180px, 189px"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}

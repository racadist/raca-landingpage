import { 
  LeitePro, 
  LeiteNatural, 
  LeiteNoLacDesnatado, 
  LeiteNoLacIntegral, 
  LeiteNoLacSemidesnatado, 
  QueijoMinas, 
  QueijoMussarela, 
  QueijoParmesao, 
  QueijoPrato,
  LeiteDesnatado,
  LeiteIntegral,
  LeiteSemidesnatado,
  LeiteCondensadoIntegral,
  CremeDeLeite,
  LeiteCondensadoNolac,
  CremeDeLeiteNolac,
  LeiteCondensadoSemiDesnatado,
  CremeDeLeiteLevissimo,
} from "@/assets";
import type { StaticImageData } from "next/image";

export interface Product {
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
  }

  export const products: Product[] = [
    {
      id: "leite-nolac-integral",
      name: "Leite NoLac Integral",
      description: "Leite integral sem lactose",
      image: LeiteNoLacIntegral,
    },
    {
      id: "leite-nolac-desnatado",
      name: "Leite NoLac Desnatado",
      description: "Leite desnatado sem lactose",
      image: LeiteNoLacDesnatado,
    },
    {
      id: "leite-nolac-semidesnatado",
      name: "Leite NoLac Semidesnatado",
      description: "Leite semidesnatado sem lactose",
      image: LeiteNoLacSemidesnatado,
    },
    {
      id: "leite-natural",
      name: "Leite Natural",
      description: "Leite fresco e saudável",
      image: LeiteNatural,
    },
    {
      id: "leite-pro",
      name: "Leite Pro",
      description: "Leite enriquecido com proteínas",
      image: LeitePro,
    },
    {
      id: "queijo-minas",
      name: "Queijo Minas",
      description: "Queijo tradicional de Minas Gerais",
      image: QueijoMinas, 
    },
    {
      id: "queijo-prato",
      name: "Queijo Prato",
      description: "Queijo cremoso e saboroso",
      image: QueijoPrato, 
    },
    {
      id: "queijo-mussarela",
      name: "Queijo Mussarela",
      description: "Queijo ideal para pizzas e lanches",
      image: QueijoMussarela, 
    },
    {
      id: "queijo-parmesao",
      name: "Queijo Parmesão",
      description: "Queijo curado com sabor intenso",
      image: QueijoParmesao, 
    },
    {
      id: "leite-condensado-nolac",
      name: "Leite Condensado Nolac",
      description: "Leite condensado sem lactose",
      image: LeiteCondensadoNolac,
    },
    {
      id: "leite-condensado-semidesnatado",
      name: "Leite Condensado Semidesnatado",
      description: "Leite condensado semidesnatado",
      image: LeiteCondensadoSemiDesnatado, 
    },
    {
      id: "leite-condensado-integral",
      name: "Leite Condensado Integral",
      description: "Leite condensado integral",
      image: LeiteCondensadoIntegral, 
    },
    {
      id: "creme-de-leite-nolac",
      name: "Creme de Leite Nolac",
      description: "Creme de leite sem lactose",
      image: CremeDeLeiteNolac, 
    },
    {
      id: "creme-de-leite",
      name: "Creme de Leite",
      description: "Creme de leite tradicional",
      image: CremeDeLeite, 
    },
    {
      id: "creme-de-leite-levissimo",
      name: "Creme de Leite Levíssimo",
      description: "Creme de leite leve e aerado",
      image: CremeDeLeiteLevissimo,
    },
    {
      id: "leite-integral",
      name: "Leite Integral",
      description: "Leite integral fresco",
      image: LeiteIntegral,
    },
    {
      id: "leite-semidesnatado",
      name: "Leite Semidesnatado",
      description: "Leite semidesnatado saudável",
      image: LeiteSemidesnatado,
    },
    {
      id: "leite-desnatado",
      name: "Leite Desnatado",
      description: "Leite desnatado leve",
      image: LeiteDesnatado,
    }
  ];
  
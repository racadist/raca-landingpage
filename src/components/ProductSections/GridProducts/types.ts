import { LeitesEspeciais, Queijos, LeiteCondensadoECremeDeLeite, LeitesRegulares } from "@/assets";


export const categories = [
    {
      name: "Leites Especiais",
      image: LeitesEspeciais,
      products: [
        { name: "Leite NoLac Integral", slug: "leite-nolac-integral" },
        { name: "Leite NoLac Desnatado ", slug: "leite-nolac-desnatado" },
        { name: "Leite NoLac Semidesnatado", slug: "leite-nolac-semidesnatado" },
        { name: "Leite Natural", slug: "leite-natural" },
        { name: "Leite Pro", slug: "leite-pro" },
      ],
    },
    {
      name: "Leites Regulares",
      image: LeitesRegulares,
      products: [
        { name: "Leite Integral", slug: "leite-integral" },
        { name: "Leite Semidesnatado", slug: "leite-semidesnatado" },
        { name: "Leite Desnatado", slug: "leite-desnatado" },
      ],
    },
    {
      name: "Queijos",
      image: Queijos,
      products: [
        { name: "Queijo Minas", slug: "queijo-minas" },
        { name: "Queijo Prato", slug: "queijo-prato" },
        { name: "Queijo Mussarela", slug: "queijo-mussarela" },
        { name: "Queijo Parmesão", slug: "queijo-parmesao" },
      ],
    },
    {
      name: "Leite Condensado e Creme de Leite",
      image: LeiteCondensadoECremeDeLeite,
      products: [
        { name: "Leite Condensado Nolac", slug: "leite-condensado-nolac" },
        { name: "Leite Condensado Semidesnatado", slug: "leite-condensado-semidesnatado" },
        { name: "Leite Condensado Integral", slug: "leite-condensado-integral" },
        { name: "Creme de Leite Nolac", slug: "creme-de-leite-nolac" },
        { name: "Creme de Leite", slug: "creme-de-leite"},
        { name: "Creme de Leite Levíssimo", slug: "creme-de-leite-levissimo" },
      ],
    },
  ];
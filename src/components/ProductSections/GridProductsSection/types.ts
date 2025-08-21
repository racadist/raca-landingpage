import {
  ProdutosLeiteEmPo,
  ProdutosCharque,
  ProdutosEnlatados,
  ProdutosLeitesRegulares,
  ProdutosBebidasLacteas, 
  ProdutosLeiteCondensadoCremeLeite,
  ProdutosLeites, 
  Queijos, 
  ProdutosRequeijao, 
  ProdutosWhey, 
  ProdutosDoceLeite, 
  ProdutosManteiga
} from "@/assets";


export const categories = [
  {
    name: "Leites Especiais",
    slug: "leites-especiais",
    image: ProdutosLeites,
    products: [
      { name: "Leite NoLac Integral", slug: "leite-nolac-integral" },
      { name: "Leite Integral Natural", slug: "leite-natural" },
    ],
  },
  {
    name: "Bebida Láctea",
    slug: "bebida-lactea",
    image: ProdutosBebidasLacteas,
    products: [
      { name: "Bebida Láctea Integral", slug: "bebida-lactea-integral" },
      { name: "Bebida Láctea UHT Vitamina", slug: "bebida-uht-vitamina" },
    ],
  },
  {
    name: "Whey",
    slug: "whey",
    image: ProdutosWhey,
    products: [
      { name: "Whey Protein em Pó Baunilha", slug: "whey-protein-baunilha" },
      { name: "Whey Protein em Pó Chocolate", slug: "whey-protein-chocolate" },
      { name: "Whey Protein em Pó Morango", slug: "whey-protein-morango" },
    ],
  },
  {
    name: "Leite em Pó & Composto Lácteo",
    slug: "leite-em-po",
    image: ProdutosLeiteEmPo,
    products: [
      { name: "Leite em Pó Integral", slug: "leite-em-po-integral" },
      { name: "Leite em Pó Desnatado", slug: "leite-em-po-desnatado" },
      { name: "Leite em Pó Kids", slug: "leite-em-po-kids" }
    ],
  },
  {
    name: "Doce de Leite",
    slug: "doce-de-leite",
    image: ProdutosDoceLeite,
    products: [
      { name: "Doce de Leite Tradicional", slug: "doce-de-leite-tradicional" },
      { name: "Doce de Leite Tradicional BAG", slug: "doce-de-leite-bag" }
    ],
  },
  {
    name: "Leites Regulares",
    slug: "leites-regulares",
    image: ProdutosLeitesRegulares,
    products: [
      { name: "Leite UHT Integral", slug: "leite-uht-integral" },
      { name: "Leite UHT Desnatado", slug: "leite-uht-desnatado" },
    ],
  },
  {
    name: "Leite Condensado & Creme de Leite",
    slug: "leite-condensado-creme-de-leite",
    image: ProdutosLeiteCondensadoCremeLeite,
    products: [
      { name: "Leite Condensado", slug: "leite-condensado" },
      { name: "Creme de Leite UHT", slug: "creme-de-leite-uht" },
    ],
  },
  {
    name: "Queijos",
    slug: "queijos",
    image: Queijos,
    products: [
      { name: "Queijo Coalho", slug: "queijo-coalho" },
    ],
  },
  {
    name: "Requeijão",
    slug: "requeijao",
    image: ProdutosRequeijao,
    products: [
      { name: "Requeijão Cremoso", slug: "requeijao-cremoso" },
      { name: "Requeijão Culinário", slug: "requeijao-culinario" },
    ],
  },
  {
    name: "Manteiga",
    slug: "manteiga",
    image: ProdutosManteiga,
    products: [
      { name: "Manteiga com Sal", slug: "manteiga-com-sal" },
      { name: "Manteiga sem Sal", slug: "manteiga-sem-sal" },
    ],
  },
  {
    name: "Carnes Salgadas",
    slug: "charque",
    image: ProdutosCharque,
    products: [
      { name: "Charque Tradicional", slug: "charque-tradicional" },
    ],
  },
  {
    name: "Conservas",
    slug: "enlatados",
    image: ProdutosEnlatados,
    products: [
      { name: "Kitut Feijoada", slug: "feijoada" },
    ],
  },
];
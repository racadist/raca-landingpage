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
      { name: "Leite NoLac Desnatado ", slug: "leite-nolac-desnatado" },
      { name: "Leite NoLac Semidesnatado", slug: "leite-nolac-semidesnatado" },
      { name: "Leite Integral Natural", slug: "leite-natural" },
    ],
  },
  {
    name: "Bebida Láctea",
    slug: "bebida-lactea",
    image: ProdutosBebidasLacteas,
    products: [
      { name: "Bebida Láctea Kids Chocolate", slug: "bebida-chocolate" },
      { name: "Bebida Láctea Kids Morango", slug: "bebida-morango" },
      { name: "Bebida Láctea Kids Vitamina", slug: "bebida-vitamina" },
      { name: "Bebida Láctea UHT Chocolate", slug: "bebida-uht-chocolate" },
      { name: "Bebida Láctea UHT Vitamina", slug: "bebida-uht-vitamina" },
    ],
  },
  {
    name: "Whey",
    slug: "whey",
    image: ProdutosWhey,
    products: [
      { name: "Bebida Láctea Whey Morango", slug: "bebida-whey-morango" },
      { name: "Bebida Láctea Whey Baunilha", slug: "bebida-whey-baunilha" },
      { name: "Bebida Láctea Whey Coco com Batata", slug: "bebida-whey-coco" },
      { name: "Bebida Láctea Whey Chocolate", slug: "bebida-whey-chocolate" },
      { name: "Bebida Láctea Whey Capuccino", slug: "bebida-whey-Capuccino" },
      { name: "Whey Protein em Pó Baunilha", slug: "whey-protein-baunilha"},
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
      { name: "Leite em pó Integral Instantâneo", slug: "leite-em-po-integral-instantaneo" },
      { name: "Leite em Pó Desnatado Instantâneo", slug: "leite-em-po-desnatado-instantaneo" },
      { name: "Leite em Pó Nolac Integral", slug: "leite-em-po-nolac" },
      { name: "Leite em Pó Integral Pouch", slug: "leite-em-po-pouch-integral" },
      { name: "Leite em Pó Instantâneo Pouch", slug: "leite-em-po-instantaneo-pouch" },
      { name: "Composto Lácteo", slug: "composto-lacteo" },
    ],
  },
  {
    name: "Doce de Leite",
    slug: "doce-de-leite",
    image: ProdutosDoceLeite,
    products: [
      { name: "Doce de Leite Tradicional", slug: "doce-de-leite" },
      { name: "Doce de Leite Pastoso", slug: "doce-de-leite-pastoso" },
      { name: "Doce de Leite Tradicional BAG", slug: "doce-de-leite-bag" }
    ],
  },
  {
    name: "Leites Regulares",
    slug: "leites-regulares",
    image: ProdutosLeitesRegulares,
    products: [
      { name: "Leite UHT Integral", slug: "leite-integral" },
      { name: "Leite UHT Semidesnatado", slug: "leite-semidesnatado" },
      { name: "Leite UHT Desnatado", slug: "leite-desnatado" }
    ]
  },
  {
    name: "Leite Condensado & Creme de Leite",
    slug: "leite-condensado-creme-de-leite",
    image: ProdutosLeiteCondensadoCremeLeite,
    products: [
      { name: "Leite Condensado Semidesnatado Nolac", slug: "leite-condensado-nolac" },
      { name: "Leite Condensado Semidesnatado", slug: "leite-condensado-semidesnatado" },
      { name: "Leite Condensado", slug: "leite-condensado" },
      { name: "Creme de Leite 17%", slug: "creme-de-leite"},
      { name: "Creme de Leite 10% Levíssimo", slug: "creme-de-leite-levissimo" },
      { name: "Creme de Leite 25%", slug: "creme-de-leite-25" },
    ],
  },
  {
    name: "Queijos",
    slug: "queijos",
    image: Queijos,
    products: [
      { name: "Queijo Prato Fatiado", slug: "queijo-prato" },
      { name: "Queijo Mussarela Fatiado", slug: "queijo-mussarela" },
      { name: "Queijo Parmesão Ralado", slug: "queijo-parmesao" },
    ],
  },
  {
    name: "Requeijão & Cream Cheese",
    slug: "requeijao",
    image: ProdutosRequeijao,
    products: [
      { name: "Requeijão Tradicional", slug: "requeijao-cremoso" },
      { name: "Requeijão Nolac", slug: "requeijao-nolac" },
      { name: "Requeijão Light", slug: "requeijao-light" },
      { name: "Cream Cheese Tradicional", slug: "cream-cheese" },
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
    name: "Charque",
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
        { name: "Sardinha Cabo Verde em Óleo", slug: "sardinha-oleo" },
        { name: "Sardinha Cabo Verde em Molho de Tomate", slug: "sardinha-molhotomate" },
        { name: "Kitut Carne em Conserva", slug: "carne-conserva" },
        { name: "Kitut Almodega ao molho", slug: "almodega-molho" },
        { name: "Kitut Salsicha Aperitivo", slug: "salsicha-aperitivo" },
        { name: "Kitut Salsicha", slug: "salsicha" },
        { name: "Kitut Fiambre Bovino/Frango", slug: "fiambre" },
        { name: "Kitut Feijoada", slug: "feijoada" },
    ],
  },
];
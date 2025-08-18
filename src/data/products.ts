import { 
  LeiteNatural, 
  LeiteNoLacDesnatado, 
  LeiteNoLacIntegral, 
  LeiteNoLacSemidesnatado, 
  QueijoMussarela, 
  QueijoParmesao, 
  QueijoPrato,
  LeiteDesnatado,
  LeiteIntegral,
  LeiteSemidesnatado,
  LeiteCondensadoIntegral,
  CremeDeLeite,
  CremeDeLeite25,
  LeiteCondensadoNolac,
  LeiteCondensadoSemiDesnatado,
  CremeDeLeiteLevissimo,
  CreamCheese,
  LeiteEmPoDesnatadoInstantaneo,
  LeiteEmPoIntegral,
  LeiteEmPoIntegralInstantaneo,
  LeiteEmPoNolac,
  LeiteEmPoPouchIntegral,
  LeiteEmPoPouchInstantaneo,
  RequeijaoCremoso,
  RequeijaoLight,
  RequeijaoNolac,
  BebidaChocolate,
  BebidaMorango,
  BebidaUHTChocolate,
  BebidaUHTVitamina,
  BebidaVitamina,
  WheyBaunilha,
  WheyChocolate,
  WheyCapuccino,
  WheyMorango,
  WheyCoco,
  WheyProteinBaunilha,
  WheyProteinChocolate,
  WheyProteinMorango,
  DoceDeLeiteTradicional,
  DoceDeLeitePastoso,
  DoceDeLeiteBag,
  ManteigaComSal,
  ManteigaSemSal, 
  SardinhaMolho, 
  SardinhaOleo,
  KitutCarneConserva,
  KitutAlmondegaMolho,
  KitutFeijoada,
  KitutFiambre,
  KitutSalsichaAperitivo,
  KitutSalsicha, 
  Charque, 
  CompostoLacteo
} from "@/assets";
import type { StaticImageData } from "next/image";

export interface Product {
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
    nutrition?: {
      portion: string;
      items: { name: string; amount: string; dailyValue: string }[];
      legend: string[];
    };
    ingredients?: {
      list: string;
      legend: string[];
      codes: {
        ean: string;
        dun: string;
        sku: string;
        validity: string;
      };
    };
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
      name: "Leite Integral Natural",
      description: "Leite fresco e saudável",
      image: LeiteNatural,
    },
    {
      id: "leite-integral",
      name: "Leite UAT Integral",
      description: "Leite integral fresco",
      image: LeiteIntegral,
    },
    {
      id: "leite-semidesnatado",
      name: "Leite UAT Semidesnatado",
      description: "Leite semidesnatado saudável",
      image: LeiteSemidesnatado,
    },
    {
      id: "leite-desnatado",
      name: "Leite UAT Desnatado",
      description: "Leite desnatado leve",
      image: LeiteDesnatado,
    },
    {
      id: "queijo-prato",
      name: "Queijo Prato Fatiado",
      description: "Queijo cremoso e saboroso",
      image: QueijoPrato,
    },
    {
      id: "queijo-mussarela",
      name: "Queijo Mussarela Fatiado",
      description: "Queijo ideal para pizzas e lanches",
      image: QueijoMussarela,
    },
    {
      id: "queijo-parmesao",
      name: "Queijo Parmesão Ralado",
      description: "Queijo curado com sabor intenso",
      image: QueijoParmesao,
    },
    {
      id: "cream-cheese",
      name: "Cream Cheese Tradicional",
      description: "Cream cheese cremoso e saboroso",
      image: CreamCheese,
    },
    {
      id: "bebida-chocolate",
      name: "Bebida Láctea Kids Chocolate",
      description: "Bebida láctea sabor chocolate",
      image: BebidaChocolate,
       nutrition: {
        portion: "200 ml (1 unidade)",
        items: [
          { name: "Valor energético", amount: "133 kcal = 559 kJ", dailyValue: "7" },
          { name: "Carboidratos", amount: "24 g", dailyValue: "8" },
          { name: "Proteínas", amount: "2,5 g", dailyValue: "3" },
          { name: "Gorduras Totais", amount: "3,0 g", dailyValue: "5" },
          { name: "Gorduras Saturadas", amount: "1,7 g", dailyValue: "8" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "1,4 g", dailyValue: "6" },
          { name: "Sódio", amount: "247 mg", dailyValue: "10" },
          { name: "Vitamina A", amount: "180 mcgRE", dailyValue: "30" },
          { name: "Vitamina B1", amount: "0,36 mg", dailyValue: "30" },
          { name: "Vitamina B2", amount: "0,39 mg", dailyValue: "30" },
          { name: "Cálcio", amount: "94 mg", dailyValue: "9" },
          { name: "Vitamina B6", amount: "0,39 mg", dailyValue: "30" },
          { name: "Vitamina C", amount: "14 mg", dailyValue: "31" },
          { name: "Vitamina E", amount: "3,0 mg", dailyValue: "30" },
          { name: "Vitamina B12", amount: "0,72 mcg", dailyValue: "30" },
          { name: "Ácido Fólico", amount: "72 mcg", dailyValue: "30" },
          { name: "Vitamina PP", amount: "4,8 mg", dailyValue: "30" },
          { name: "Ácido Pantotênico", amount: "1,5 mg", dailyValue: "30" },
        ],
        legend: [
          '"Não contém quantidades significativas de gorduras trans e fibra alimentar."',
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido.",
        ],
      },
      ingredients: {
        list:
          "SORO DE LEITE E/OU SORO DE LEITE EM PÓ RECONSTITUÍDO, LEITE INTEGRAL E/OU LEITE EM PÓ INTEGRAL RECONSTITUÍDO, AÇÚCAR, CREME DE LEITE, AMIDO MODIFICADO, CACAU, VITAMINAS A, B1, B2, B6, B12, C, E, PP, ÁCIDO FÓLICO, PANTOTENATO DE CÁLCIO, CLORETO DE SÓDIO, MISTURA DE ESTABILIZANTES PARA BEBIDA LÁCTEA UHT (CARBOXIMETILCELULOSE SÓDICA, CELULOSE MICROCRISTALINA, GOMA GUAR E CARRAGENA), ESTABILIZANTES FOSFATO DISSÓDICO, CITRATO DE SÓDIO E FOSFATO MONOSSÓDICO E AROMATIZANTES.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Contém aromatizante sintético idêntico ao natural.",
          "Após aberto, consumir em sua totalidade. Não necessita de refrigeração.",
        ],
        codes: {
          ean: "7896051111856",
          dun: "17896051111853",
          sku: "600263003",
          validity: "180 dias",
        },
      },
    },
    {
      id: "bebida-morango",
      name: "Bebida Láctea Kids Morango",
      description: "Bebida láctea sabor morango",
      image: BebidaMorango,
      nutrition: {
        portion: "Porção de 200 ml (1 unidade)",
        items: [
          { "name": "Valor energético", "amount": "129 kcal = 542 kJ", "dailyValue": "6" },
          { "name": "Carboidratos", "amount": "24 g", "dailyValue": "8" },
          { "name": "Proteínas", "amount": "3,1 g", "dailyValue": "4" },
          { "name": "Gorduras Totais", "amount": "2,3 g", "dailyValue": "4" },
          { "name": "Gorduras Saturadas", "amount": "1,1 g", "dailyValue": "5" },
          { "name": "Gorduras Trans", "amount": "0", "dailyValue": "**" },
          { "name": "Fibra Alimentar", "amount": "0,9 g", "dailyValue": "4" },
          { "name": "Sódio", "amount": "85 mg", "dailyValue": "4" },
          { "name": "Vitamina A", "amount": "180 mcgRE", "dailyValue": "30" },
          { "name": "Vitamina B1", "amount": "0,36 mg", "dailyValue": "30" },
          { "name": "Vitamina B2", "amount": "0,39 mg", "dailyValue": "30" },
          { "name": "Cálcio", "amount": "122 mg", "dailyValue": "12" },
          { "name": "Vitamina B6", "amount": "0,39 mg", "dailyValue": "30" },
          { "name": "Vitamina C", "amount": "14 mg", "dailyValue": "31" },
          { "name": "Vitamina E", "amount": "3,0 mg", "dailyValue": "30" },
          { "name": "Vitamina B12", "amount": "0,72 mcg", "dailyValue": "30" },
          { "name": "Ácido Fólico", "amount": "72 mcg", "dailyValue": "30" },
          { "name": "Vitamina PP", "amount": "4,8 mg", "dailyValue": "30" },
          { "name": "Ácido Pantonênico", "amount": "1,5 mg", "dailyValue": "30" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "SORO DE LEITE E/OU SORO DE LEITE EM PÓ RECONSTITUÍDO, LEITE INTEGRAL E/OU LEITE EM PÓ RECONSTITUÍDO, AÇÚCAR, PREPARADO DE MORANGO (ÁGUA, AÇÚCAR, MORANGO, AROMATIZANTE, CORANTE CARMIM DE COCHONILHA, ESPESSANTES GOMA XANTANA E GOMA GUAR, CONSERVANTE SORBATO DE POTÁSSIO E ACIDULANTE ÁCIDO CÍTRICO), VITAMINAS (C, E, NIACINA(PP), A, ÁCIDO PANTONÊNICO (PANTOTENATO DE CÁLCIO), ÁCIDO FÓLICO, B12, B6, TIAMINA (B1) E RIBOFLAVINA (B2)), ESTABILIZANTES FOSFATO DISSÓDICO, CITRATO DE SÓDIO, GOMA GUAR, CELULOSE MICROCRISTALINA, CARBOXIMETILCELULOSE SÓDICA, CARRAGENA E AROMATIZANTES",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Contém aromatizante.",
          "Aromatizado artificialmente.",
          "Não necessita de refrigeração. Após aberto, consumir em sua totalidade."
        ],
        codes: {
          ean: "7896051111863",
          dun: "17896051111860",
          sku: "600267003",
          validity: "180 dias"
        }
      }
    },
    {
      id: "bebida-vitamina",
      name: "Bebida Láctea Kids Vitamina",
      description: "Bebida láctea sabor vitamina",
      image: BebidaVitamina,
        nutrition: {
        portion: "200 ml (1 unidade)",
        items: [
          { name: "Valor energético",   amount: "133 kcal = 559 kJ", dailyValue: "7" },
          { name: "Carboidratos",       amount: "24 g",              dailyValue: "8" },
          { name: "Proteínas",          amount: "2,5 g",             dailyValue: "3" },
          { name: "Gorduras Totais",    amount: "3,0 g",             dailyValue: "5" },
          { name: "Gorduras Saturadas", amount: "1,7 g",             dailyValue: "8" },
          { name: "Gorduras Trans",     amount: "0",                 dailyValue: "**" },
          { name: "Fibra Alimentar",    amount: "1,4 g",             dailyValue: "6" },
          { name: "Sódio",              amount: "247 mg",            dailyValue: "10" },
          { name: "Vitamina A",         amount: "180 mcgRE",         dailyValue: "30" },
          { name: "Vitamina B1",        amount: "0,36 mg",           dailyValue: "30" },
          { name: "Vitamina B2",        amount: "0,39 mg",           dailyValue: "30" },
          { name: "Cálcio",             amount: "94 mg",             dailyValue: "9" },
          { name: "Vitamina B6",        amount: "0,39 mg",           dailyValue: "30" },
          { name: "Vitamina C",         amount: "14 mg",             dailyValue: "31" },
          { name: "Vitamina E",         amount: "3,0 mg",            dailyValue: "30" },
          { name: "Vitamina B12",       amount: "0,72 mcg",          dailyValue: "30" },
          { name: "Ácido Fólico",       amount: "72 mcg",            dailyValue: "30" },
          { name: "Vitamina PP",        amount: "4,8 mg",            dailyValue: "30" },
          { name: "Ácido Pantotênico",  amount: "1,5 mg",            dailyValue: "30" },
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list:
          "SORO DE LEITE E/OU SORO DE LEITE EM PÓ RECONSTITUÍDO, LEITE INTEGRAL E/OU LEITE EM PÓ INTEGRAL RECONSTITUÍDO, AÇÚCAR, CREME DE LEITE, AMIDO MODIFICADO, CACAU, VITAMINAS A, B1, B2, B6, B12, C, E, PP, ÁCIDO FÓLICO, PANTOTENATO DE CÁLCIO, CLORETO DE SÓDIO, MISTURA DE ESTABILIZANTES PARA BEBIDA LÁCTEA UHT (CARBOXIMETILCELULOSE SÓDICA, CELULOSE MICROCRISTALINA, GOMA GUAR E CARRAGENA), ESTABILIZANTES FOSFATO DISSÓDICO, CITRATO DE SÓDIO E FOSFATO MONOSSÓDICO E AROMATIZANTES.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Contém aromatizante sintético idêntico ao natural.",
          "Após aberto, consumir em sua totalidade. Não necessita de refrigeração."
        ],
        codes: {
          ean: "7896051111856",
          dun: "17896051111853",
          sku: "600263003",
          validity: "180 dias"
        }
      }
    },
    {
      id: "bebida-uht-chocolate",
      name: "Bebida Láctea UHT Chocolate",
      description: "Bebida láctea UHT sabor chocolate",
      image: BebidaUHTChocolate,
      nutrition: {
        portion: "Porção de 200ml (1 copo)",
        items: [
          { name: "Valor Energético", amount: "132 kcal = 554 kj", dailyValue: "7" },
          { name: "Carboidratos", amount: "24 g", dailyValue: "8" },
          { name: "Proteínas", amount: "2,4 g", dailyValue: "3" },
          { name: "Gorduras Totais", amount: "2,9 g", dailyValue: "5" },
          { name: "Gorduras Saturadas", amount: "1,5 g", dailyValue: "7" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra alimentar", amount: "0,8 g", dailyValue: "3" },
          { name: "Vitamina A", amount: "180 mcgRE", dailyValue: "30" },
          { name: "Vitamina C", amount: "14 mg", dailyValue: "31" },
          { name: "Cálcio", amount: "116 mg", dailyValue: "12" },
          { name: "Sódio", amount: "124 mg", dailyValue: "5" }
        ],
        legend: [
          '"Não contém quantidades significativas de gorduras trans e fibra alimentar."',
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Soro de leite e/ou soro de leite em pó reconstituído, Leite integral e/ou leite em pó integral reconstituído, Açúcar, Creme de leite, Amido modificado, Cacau, Vitaminas A, B1, B2, B6, B12, C, E, PP, Ácido fólico, Pantotenato de cálcio, Cloreto de sódio, Estabilizantes (CMC, celulose microcristalina, goma guar, carragena, fosfato dissódico, citrato de sódio, fosfato monossódico), Aromatizantes.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Contém aromatizante sintético idêntico ao natural.",
          "Após aberto, consumir em até 02 dias. Não necessita de refrigeração."
        ],
        codes: {
          ean: "7896051111849",
          dun: "27896051111843",
          sku: "600261007",
          validity: "180 dias"
        }
      }
    },
    {
      id: "bebida-uht-vitamina",
      name: "Bebida UHT de Vitamina",
      description: "Bebida láctea UHT sabor vitamina",
      image: BebidaUHTVitamina,
      nutrition: {
        portion: "200ml (1 unidade)",
        items: [
          { name: "Valor Energético", amount: "125kcal = 525kJ", dailyValue: "6%" },
          { name: "Carboidratos", amount: "23g", dailyValue: "8%" },
          { name: "Proteínas", amount: "3,0g", dailyValue: "4%" },
          { name: "Gorduras totais", amount: "2,5g", dailyValue: "5%" },
          { name: "Gorduras saturadas", amount: "1,4g", dailyValue: "6%" },
          { name: "Gorduras trans", amount: "0", dailyValue: "**" },
          { name: "Fibra alimentar", amount: "0", dailyValue: "0%" },
          { name: "Sódio", amount: "114mg", dailyValue: "5%" },
          { name: "Cálcio", amount: "140mg", dailyValue: "14%" },
          { name: "Vitamina A", amount: "180mcgRE", dailyValue: "30%" },
          { name: "Vitamina B1", amount: "0,36mg", dailyValue: "30%" },
          { name: "Vitamina B2", amount: "0,39mg", dailyValue: "30%" },
          { name: "Vitamina B6", amount: "0,39mg", dailyValue: "30%" },
          { name: "Vitamina B12", amount: "0,72mcg", dailyValue: "30%" },
          { name: "Vitamina C", amount: "14mg", dailyValue: "31%" },
          { name: "Vitamina E", amount: "3,0mg", dailyValue: "30%" },
          { name: "Vitamina PP", amount: "4,8mg", dailyValue: "30%" },
          { name: "Ácido Fólico", amount: "72mcg", dailyValue: "30%" },
          { name: "Pantotenato de Cálcio", amount: "1,5mg", dailyValue: "30%" }
        ],
        legend: [
          "Não contém quantidades significativas de gorduras trans e fibra alimentar.",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ.",
          "Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.",
          "** Não estabelecido."
        ]
      },
      ingredients: {
        list: "Soro de leite e/ou soro de leite em pó reconstituído, leite integral e/ou leite em pó integral reconstituído, preparado de frutas sabor mamão, maçã, corantes urucum e carmim de cochonilha, espessante goma xantana, aromatizante, acidulante ácido cítrico e conservador sorbato de potássio), açúcar, vitaminas A, B1, B2, B6, B12, C, E, PP, ácido fólico e pantotenato de cálcio, estabilizantes goma guar, celulose microcristalina, carboximetilcelulose sódica, carragena, citrato de sódio e fosfato dissódico e aromatizante.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Contém aromatizante sintético idêntico ao natural.",
          "Não precisa de refrigeração.",
          "Após aberto, consumir em até 02 dias. Manter sob refrigeração."
        ],
        codes: {
          ean: "7896051111832",
          dun: "27896051111836",
          sku: "600259007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "bebida-whey-morango",
      name: "Bebida Whey Morango",
      description: "Bebida láctea proteica sabor morango",
      image: WheyMorango,
    },
    {
      id: "bebida-whey-baunilha",
      name: "Bebida Whey Baunilha",
      description: "Bebida láctea proteica sabor baunilha",
      image: WheyBaunilha,
    },
    {
      id: "bebida-whey-coco",
      name: "Bebida Whey Coco com Batata",
      description: "Bebida láctea proteica sabor coco e batata",
      image: WheyCoco,
    },
    {
      id: "bebida-whey-chocolate",
      name: "Bebida Whey Chocolate",
      description: "Bebida láctea proteica sabor chocolate",
      image: WheyChocolate,
    },
    {
      id: "bebida-whey-capuccino",
      name: "Bebida Whey Capuccino",
      description: "Bebida láctea proteica sabor capuccino",
      image: WheyCapuccino,
    },
    {
      id: "whey-protein-baunilha",
      name: "Whey Protein em Pó Baunilha",
      description: "Suplemento proteico sabor baunilha",
      image: WheyProteinBaunilha,
    },
    {
      id: "whey-protein-chocolate",
      name: "Whey Protein em Pó Chocolate",
      description: "Suplemento proteico sabor chocolate",
      image: WheyProteinChocolate,
    },
    {
      id: "whey-protein-morango",
      name: "Whey Protein em Pó Morango",
      description: "Suplemento proteico sabor morango",
      image: WheyProteinMorango,
    },
    {
      id: "requeijao-cremoso",
      name: "Requeijão Tradicional",
      description: "Requeijão cremoso e saboroso",
      image: RequeijaoCremoso,
    },
    {
      id: "requeijao-nolac",
      name: "Requeijão Nolac",
      description: "Requeijão sem lactose",
      image: RequeijaoNolac,
    },
    {
      id: "requeijao-light",
      name: "Requeijão Light",
      description: "Requeijão light com menos calorias",
      image: RequeijaoLight,
    },
    {
      id: "leite-em-po-integral",
      name: "Leite em Pó Integral",
      description: "Leite em pó integral para uso culinário",
      image: LeiteEmPoIntegral,
    },
    {
      id: "leite-em-po-integral-instantaneo",
      name: "Leite em pó Integral Instantâneo",
      description: "Leite em pó integral instantâneo",
      image: LeiteEmPoIntegralInstantaneo,
    },
    {
      id: "leite-em-po-desnatado-instantaneo",
      name: "Leite em pó Desnatado Instantâneo",
      description: "Leite em pó desnatado instantâneo",
      image: LeiteEmPoDesnatadoInstantaneo,
    },
    {
      id: "composto-lacteo",
      name: "Composto Lácteo",
      description: "Composto lácteo para uso culinário",
      image: CompostoLacteo,
    },
    {
      id: "leite-em-po-nolac",
      name: "Leite em Poó Nolac Integral",
      description: "Leite em pó sem lactose",
      image: LeiteEmPoNolac,
    },
    {
      id: "leite-em-po-pouch-integral",
      name: "Leite em pó Integral Pouch",
      description: "Leite em pó integral em embalagem pouch",
      image: LeiteEmPoPouchIntegral,
    },
    {
      id: "leite-em-po-instantaneo-pouch",
      name: "Leite em pó Instantâneo Pouch",
      description: "Leite em pó instantâneo em embalagem pouch",
      image: LeiteEmPoPouchInstantaneo,
    },
    {
      id: "leite-condensado-nolac",
      name: "Leite Condensado Semidesnatado Nolac",
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
      id: "leite-condensado",
      name: "Leite Condensado",
      description: "Leite condensado integral",
      image: LeiteCondensadoIntegral,
    },
    {
      id: "creme-de-leite",
      name: "Creme de Leite 17%",
      description: "Creme de leite tradicional",
      image: CremeDeLeite,
    },
    {
      id: "creme-de-leite-levissimo",
      name: "Creme de Leite 10% Levíssimo",
      description: "Creme de leite leve e aerado",
      image: CremeDeLeiteLevissimo,
    },
    {
      id: "creme-de-leite-25",
      name: "Creme de Leite 25%",
      description: "Creme de leite com 25% de gordura",
      image: CremeDeLeite25,
    },
    {
      id: "doce-de-leite",
      name: "Doce de Leite Tradicional",
      description: "Doce de leite com sabor caseiro",
      image: DoceDeLeiteTradicional,
    },
    {
      id: "doce-de-leite-pastoso",
      name: "Doce de Leite Pastoso",
      description: "Doce de leite com textura cremosa",
      image: DoceDeLeitePastoso,
    },
    {
      id: "doce-de-leite-bag",
      name: "Doce de Leite Tradicional BAG",
      description: "Doce de leite em embalagem econômica",
      image: DoceDeLeiteBag,
    },
    {
      id: "manteiga-com-sal",
      name: "Manteiga com Sal",
      description: "Manteiga tradicional com sal",
      image: ManteigaComSal,
    },
    {
      id: "manteiga-sem-sal",
      name: "Manteiga sem Sal",
      description: "Manteiga tradicional sem sal",
      image: ManteigaSemSal,
    },
    {
      id: "sardinha-oleo",
      name: "Sardinha Cabo Verde em Óleo",
      description: "Sardinha em conserva com óleo comestível",
      image: SardinhaOleo,
    },
    {
      id: "sardinha-molhotomate",
      name: "Sardinha Cabo Verde em Molho de Tomate",
      description: "Sardinha em conserva com molho de tomate",
      image: SardinhaMolho,
    },
    {
      id: "carne-conserva",
      name: "Kitut Carne em Conserva",
      description: "Carne bovina cozida e enlatada",
      image: KitutCarneConserva
    },
    {
      id: "almodega-molho",
      name: "Kitut Almondega ao Molho",
      description: "Almondegas em molho temperado",
      image: KitutAlmondegaMolho,
    },
    {
      id: "salsicha-aperitivo",
      name: "Kitut Salsicha Aperitivo",
      description: "Salsichas pequenas para petiscos",
      image: KitutSalsichaAperitivo,
    },
    {
      id: "salsicha",
      name: "Kitut Salsicha",
      description: "Salsicha em conserva",
      image: KitutSalsicha,
    },
    {
      id: "fiambre",
      name: "Kitut Fiambre Bovino/Frango",
      description: "Fiambre misto de carne bovina e frango",
      image: KitutFiambre,
    },
    {
      id: "feijoada",
      name: "Kitut Feijoada",
      description: "Feijoada pronta em conserva",
      image: KitutFeijoada,
    },
    {
      id: "charque-tradicional",
      name: "Charque Tradicional",
      description: "Carne salgada e desidratada",
      image: Charque,
    }
  ];
  
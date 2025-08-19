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
  LeiteEmPoKids,
  LeiteEmPoPouchDesnatadoInstataneo,
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
      list?: string;
      legend: string[];
      codes: {
        ean?: string;
        dun?: string;
        sku?: string;
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
      nutrition: {
        portion: "100 ml",
        items: [
          { name: "Valor Energético", amount: "59 kcal = 248 kJ", dailyValue: "3" },
          { name: "Carboidratos", amount: "4,6 g", dailyValue: "2" },
          { name: "Proteínas", amount: "3,3 g", dailyValue: "4" },
          { name: "Gorduras Totais", amount: "3 g", dailyValue: "5" },
          { name: "Gorduras Saturadas", amount: "2 g", dailyValue: "9" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "69 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "115 mg", dailyValue: "12" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite integral, enzima lactase, estabilizante citrato de sódio, trifosfato de sódio, dihidrogênio difosfato dissódico e monofosfato monossódico.",
        legend: [
          "ALÉRGICOS: CONTÉM LEITE.",
          "DIABÉTICOS: CONTÉM GLICOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "CONSUMIR PREFERENCIALMENTE SOB ORIENTAÇÃO DE NUTRICIONISTA OU MÉDICO."
        ],
        codes: {
          ean: "7896051128069",
          dun: "17896051128066",
          sku: "600017007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "leite-nolac-desnatado",
      name: "Leite NoLac Desnatado 1L",
      description: "Leite desnatado sem lactose",
      image: LeiteNoLacDesnatado,
      nutrition: {
        portion: "100 ml",
        items: [
          { name: "Valor Energético", amount: "33 kcal = 139 kJ", dailyValue: "2" },
          { name: "Carboidratos", amount: "4,8 g", dailyValue: "2" },
          { name: "Glicose", amount: "2,4 g", dailyValue: "**" },
          { name: "Galactose", amount: "2,4 g", dailyValue: "**" },
          { name: "Lactose", amount: "0", dailyValue: "**" },
          { name: "Proteínas", amount: "3,4 g", dailyValue: "5" },
          { name: "Gorduras Totais", amount: "0", dailyValue: "0" },
          { name: "Gorduras Saturadas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Gorduras Monoinsaturadas", amount: "0", dailyValue: "**" },
          { name: "Gorduras Poliinsaturadas", amount: "0", dailyValue: "**" },
          { name: "Colesterol", amount: "0", dailyValue: "0" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "61 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "123 mg", dailyValue: "25" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite desnatado, enzima lactase, estabilizante citrato de sódio e mistura de estabilizantes para leite UHT (trifosfato de sódio, difosfato de sódio e monofosfato de sódio).",
        legend: [
          "CONTÉM LEITE E DERIVADOS. NÃO CONTÉM GLÚTEN.",
          "Diabéticos: Contém glicose.",
          "Galactosêmicos: Contém lactose.",
          "Não necessita de refrigeração.",
          "Após aberto, consumir em 02 dias. Manter sob refrigeração de 1°C a 10°C."
        ],
        codes: {
          ean: "7896051128076",
          dun: "17896051128073",
          sku: "600016007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "leite-nolac-semidesnatado",
      name: "Leite NoLac Semidesnatado",
      description: "Leite semidesnatado sem lactose",
      image: LeiteNoLacSemidesnatado,
      nutrition: {
        portion: "100 ml",
        items: [
          { name: "Valor Energético", amount: "42 kcal = 176 kJ", dailyValue: "2" },
          { name: "Carboidratos", amount: "5 g", dailyValue: "2" },
          { name: "Glicose", amount: "2,5 g", dailyValue: "**" },
          { name: "Galactose", amount: "2,5 g", dailyValue: "**" },
          { name: "Lactose", amount: "0", dailyValue: "**" },
          { name: "Proteínas", amount: "3,2 g", dailyValue: "4" },
          { name: "Gorduras Totais", amount: "1 g", dailyValue: "2" },
          { name: "Gorduras Saturadas", amount: "0,6 g", dailyValue: "3" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "62 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "109 mg", dailyValue: "11" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite semidesnatado, enzima lactase, estabilizante citrato de sódio e mistura de estabilizantes para leite UHT (trifosfato de sódio, difosfato de sódio e monofosfato de sódio).",
        legend: [
          "CONTÉM LEITE. NÃO CONTÉM GLÚTEN.",
          "Diabéticos: Contém glicose.",
          "Galactosêmicos: Contém Galactose.",
          "Não necessita de refrigeração.",
          "Após aberto, consumir em até 02 dias. Manter refrigerado de 1°C a 10°C."
        ],
        codes: {
          ean: "7896051111764",
          dun: "17896051111747",
          sku: "600018007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "leite-natural",
      name: "Leite UHT Integral Natural Milk 1L",
      description: "Leite fresco e saudável",
      image: LeiteNatural,
      nutrition: {
        portion: "200 ml (1 copo)",
        items: [
          { name: "Valor Energético", amount: "129 kcal", dailyValue: "6" },
          { name: "Carboidrato", amount: "9,7 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,7 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "7,0 g", dailyValue: "13" },
          { name: "Sódio", amount: "75 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "246 mg", dailyValue: "25" },
          { name: "Gorduras Saturadas", amount: "3,3 g", dailyValue: "15" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Não necessita de refrigeração. Após aberto, consumir em até 02 dias e manter sob refrigeração de 1°C a 10°C."
        ],
        codes: {
          ean: "7896051111030",
          dun: "5789605111035",
          sku: "600084007",
          validity: "90 dias"
        }
      }
    },
    {
      id: "leite-integral",
      name: "Leite UHT Integral 1L",
      description: "Leite tradicional e original itambé",
      image: LeiteIntegral,
      nutrition: {
        portion: "200 ml (1 copo)",
        items: [
          { name: "Valor Energético", amount: "118 kcal = 496 kJ", dailyValue: "6" },
          { name: "Carboidrato", amount: "9,3 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,6 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "6,0 g", dailyValue: "11" },
          { name: "Gorduras Saturadas", amount: "2,9 g", dailyValue: "13" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "121 mg", dailyValue: "5" },
          { name: "Cálcio", amount: "248 mg", dailyValue: "25" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite integral e estabilizantes trifosfato de sódio, citrato de sódio, monofosfato monossódico e dihidrogênio difosfato dissódico.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter refrigerado de 1°C a 10°C. Após aberto, consumir em 02 dias."
        ],
        codes: {
          ean: "7896051111016",
          dun: "27896051111010",
          sku: "600089007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "leite-semidesnatado",
      name: "Leite UHT Semidesnatado 1L",
      description: "Leite semidesnatado saudável",
      image: LeiteSemidesnatado,
      nutrition: {
        portion: "200 ml (1 copo)",
        items: [
          { name: "Valor Energético", amount: "81 kcal = 340 kJ", dailyValue: "4" },
          { name: "Carboidratos", amount: "9,2 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,6 g", dailyValue: "8" },
          { name: "Gorduras Totais", amount: "2,0 g", dailyValue: "4" },
          { name: "Gorduras Saturadas", amount: "1,3 g", dailyValue: "6" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "121 mg", dailyValue: "5" },
          { name: "Cálcio", amount: "233 mg", dailyValue: "23" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite semidesnatado, estabilizante trifosfato de sódio, citrato de sódio, monofosfato monossódico e dihidrogênio difosfato dissódico.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter refrigerado de 1°C a 10°C. Após aberto, consumir em 02 dias."
        ],
        codes: {
          ean: "7896051111528",
          dun: "27896051111522",
          sku: "600090007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "leite-desnatado",
      name: "Leite UHT Desnatado 1L",
      description: "Leite desnatado leve",
      image: LeiteDesnatado,
      nutrition: {
        portion: "200 ml (1 copo)",
        items: [
          { name: "Valor Energético", amount: "65 kcal = 273 kJ", dailyValue: "3" },
          { name: "Carboidrato", amount: "9,6 g", dailyValue: "3" },
          { name: "Proteína", amount: "6,8 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "0", dailyValue: "0" },
          { name: "Gorduras Saturadas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "**" },
          { name: "Sódio", amount: "124 mg", dailyValue: "5" },
          { name: "Cálcio", amount: "255 mg", dailyValue: "26" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite desnatado e estabilizantes trifosfato de sódio, citrato de sódio, monofosfato monossódico e dihidrogênio difosfato dissódico.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter refrigerado de 1°C a 10°C. Após aberto, consumir em 02 dias."
        ],
        codes: {
          ean: "7896051111702",
          dun: "27896051111706",
          sku: "600091007",
          validity: "120 dias"
        }
      }
    },
    {
      id: "queijo-prato",
      name: "Queijo Prato Fatiado",
      description: "Queijo cremoso e saboroso",
      image: QueijoPrato,
      nutrition: {
        portion: "30g (1 1/2 fatia)",
        items: [
          { name: "Valor energético",        amount: "103 kcal = 433 kJ", dailyValue: "5" },
          { name: "Carboidratos",            amount: "0,6 g", dailyValue: "0" },
          { name: "Proteínas",               amount: "8,3 g", dailyValue: "11" },
          { name: "Gorduras totais",         amount: "7,5 g", dailyValue: "14" },
          { name: "Gorduras saturadas",      amount: "5,7 g", dailyValue: "26" },
          { name: "Gorduras trans",          amount: "0 g", dailyValue: "**" },
          { name: "Fibra alimentar",         amount: "0 g", dailyValue: "0" },
          { name: "Sódio",                   amount: "120 mg", dailyValue: "5" },
          { name: "Cálcio",                  amount: "285 mg", dailyValue: "29" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite pasteurizado, cloreto de sódio (sal), cloreto de cálcio, coagulante, fermento lácteo, corante natural de urucum e conservador natamicina.",
        legend: [
          "ALÉRGICOS: CONTÉM LEITE. CONTÉM LACTOSE. NÃO CONTÉM GLÚTEN."
        ],
        codes: {
          ean: "7896051165484",
          dun: "17896051165481",
          sku: "610510407",
          validity: "80 dias"
        }
      }
    },
    {
      id: "queijo-mussarela",
      name: "Queijo Mussarela Fatiado",
      description: "Queijo ideal para pizzas e lanches",
      image: QueijoMussarela,
      nutrition: {
        portion: "30g (1 1/2 fatia)",
        items: [
          { name: "Valor energético",   amount: "96 kcal = 403 kJ", dailyValue: "5" },
          { name: "Carboidratos",       amount: "0,6 g", dailyValue: "0" },
          { name: "Proteínas",          amount: "7,2 g", dailyValue: "10" },
          { name: "Gorduras totais",    amount: "7,2 g", dailyValue: "13" },
          { name: "Gorduras saturadas", amount: "4,0 g", dailyValue: "18" },
          { name: "Gorduras trans",     amount: "0 g", dailyValue: "**" },
          { name: "Fibra alimentar",    amount: "0 g", dailyValue: "0" },
          { name: "Sódio",              amount: "128 mg", dailyValue: "5" },
          { name: "Cálcio",             amount: "221 mg", dailyValue: "22" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite pasteurizado, cloreto de sódio (sal), cloreto de cálcio, fermento lácteo, coagulante, regulador de acidez ácido cítrico e conservador natamicina.",
        legend: [
          "ALÉRGICOS: CONTÉM LEITE. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN."
        ],
        codes: {
          ean: "7896051165446",
          dun: "17896051165443",
          sku: "610508347",
          validity: "80 dias"
        }
      }
    },
    {
      id: "queijo-parmesao",
      name: "Queijo Parmesão Ralado",
      description: "Queijo curado com sabor intenso",
      image: QueijoParmesao,
      nutrition: {
        portion: "10g (1 colher de sopa)",
        items: [
          { name: "Valor Energético",    amount: "40 kcal = 168 kJ", dailyValue: "2" },
          { name: "Carboidratos",        amount: "1,0 g", dailyValue: "0" },
          { name: "Proteínas",           amount: "2,9 g", dailyValue: "4" },
          { name: "Gorduras Totais",     amount: "2,7 g", dailyValue: "5" },
          { name: "Gorduras Saturadas",  amount: "1,6 g", dailyValue: "7" },
          { name: "Gorduras Trans",      amount: "0 g", dailyValue: "**" },
          { name: "Fibra Alimentar",     amount: "0 g", dailyValue: "0" },
          { name: "Sódio",               amount: "74 mg", dailyValue: "3" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Queijo Parmesão 75% (Leite Pasteurizado, Cloreto de Sódio, Cloreto de Cálcio, Fermentos Láticos, Coagulante e Conservadores de Sorbato de Potássio, Nitrato de Sódio e Nitamicina), Queijo tipo Gouda, Queijo tipo Estepe, Antiaglutinante Celulose Microcristalina e Conservador Ácido Sórbico.",
        legend: [
          "ALÉRGICOS: CONTÉM DERIVADOS DE LEITE E OVO.",
          "NÃO CONTÉM GLÚTEN."
        ],
        codes: {
          ean: "7896051166351",
          dun: "17896051166358",
          sku: "540480411",
          validity: "180 dias"
        }
      }
    },
    {
      id: "cream-cheese",
      name: "Cream Cheese 150G",
      description: "Cream cheese cremoso e saboroso",
      image: CreamCheese,
      nutrition: {
        portion: "30g (3 colheres de sopa)",
        items: [
          { name: "Valor Energético", amount: "87 kcal = 364 kJ", dailyValue: "4" },
          { name: "Carboidratos", amount: "1,0 g", dailyValue: "0" },
          { name: "Proteínas", amount: "1,9 g", dailyValue: "4" },
          { name: "Gorduras Totais", amount: "8,4 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "5,0 g", dailyValue: "25" },
          { name: "Gorduras Trans", amount: "0 g", dailyValue: "(**)" },
          { name: "Fibra Alimentar", amount: "0 g", dailyValue: "0" },
          { name: "Sódio", amount: "117 mg", dailyValue: "6" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Creme de leite, leite desnatado, concentrado proteico de leite, concentrado proteico de soro de leite, sal (cloreto de sódio), fermento lácteo, espessantes carragena, goma xantana e goma guar, conservador sorbato de potássio e regulador de acidez ácido cítrico.",
        legend: [
          "ALÉRGICOS: CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN."
        ],
        codes: {
          ean: "7896051165958",
          dun: "17896051165955",
          sku: "540475489",
          validity: "120 dias"
        }
      }
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
      nutrition: {
        portion: "250 ml (1 unidade)",
        items: [
          { name: "Valor Energético", amount: "118 kcal", dailyValue: "6" },
          { name: "Carboidratos", amount: "8,8 g", dailyValue: "3" },
          { name: "Açúcares totais", amount: "4,5 g", dailyValue: "**" },
          { name: "Lactose", amount: "0 g", dailyValue: "**" },
          { name: "Galactose", amount: "2,3 g", dailyValue: "**" },
          { name: "Glicose", amount: "2,2 g", dailyValue: "**" },
          { name: "Proteínas", amount: "15 g", dailyValue: "30" },
          { name: "Gorduras totais", amount: "1,8 g", dailyValue: "3" },
          { name: "Gorduras saturadas", amount: "1 g", dailyValue: "5" },
          { name: "Sódio", amount: "250 mg", dailyValue: "13" },
          { name: "Cálcio", amount: "213 mg", dailyValue: "21" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite semidesnatado, soro de leite reconstituído, caseinato de cálcio, concentrado protéico de soro de leite, amido modificado, cloreto de sódio, estabilizantes carboximetilcelulose sódica, fosfato dissódico, fosfato dipotássico, celulose microcristalina e carragena, aromatizante, enzima lactase e edulcorante sucralose.",
        legend: [
          "Contém: Leite e derivados e derivados de soja / Contiene: Derivados de leche y soja.",
          "Não contém Lactose / No contiene Lactosa.",
          "Contém Glúten / Contiene Glúten."
        ],
        codes: {
          ean: "7896051166382",
          dun: "1789605116638",
          sku: "610101172",
          validity: "180 dias"
        }
      }
    },
    {
      id: "bebida-whey-coco",
      name: "Bebida Whey Coco com Batata Doce 250ML",
      description: "Bebida láctea proteica sabor coco e batata doce com mais proteínas do que carboidratos",
      image: WheyCoco,
      nutrition: {
        portion: "100 ml",
        items: [
          { name: "Valor Energético", amount: "44 kcal = 185 kJ", dailyValue: "2" },
          { name: "Carboidratos", amount: "3,5 g, dos quais:", dailyValue: "1" },
          { name: "Sacarose", amount: "0", dailyValue: "**" },
          { name: "Glicose", amount: "1,8 g", dailyValue: "**" },
          { name: "Galactose", amount: "1,8 g", dailyValue: "**" },
          { name: "Lactose", amount: "0 g", dailyValue: "**" },
          { name: "Proteínas", amount: "6,0 g", dailyValue: "8" },
          { name: "Gorduras Totais", amount: "0,7 g, das quais:", dailyValue: "1" },
          { name: "Gorduras Saturadas", amount: "0,4 g", dailyValue: "2" },
          { name: "Gorduras Monoinsaturadas", amount: "0,2 g", dailyValue: "**" },
          { name: "Gorduras Polinsaturadas", amount: "0 g", dailyValue: "**" },
          { name: "Gorduras Trans", amount: "0 g", dailyValue: "0" },
          { name: "Colesterol", amount: "2,1 mg", dailyValue: "**" },
          { name: "Fibra alimentar", amount: "0 g", dailyValue: "0" },
          { name: "Sódio", amount: "100 mg", dailyValue: "4" },
          { name: "Cálcio", amount: "85 mg", dailyValue: "9" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite semidesnatado e/ou leite reconstituído semidesnatado, soro de leite reconstituído, caseinato de cálcio, concentrado protéico de soro de leite, amido modificado, cloreto de sódio, estabilizantes carboximetilcelulose sódica, fosfato dissódico, fosfato dipotássico, celulose microcristalina e carragena, aromatizante, enzima lactase e edulcorante sucralose.",
        legend: [
          "Contém: Leite e derivados e derivados de soja / Contiene: Derivados de leche y soja.",
          "Pode conter: Trigo / Puede contener: Trigo",
          "Contém Glúten / Contiene Glúten.",
          "Não contém Lactose / No contiene Lactosa."
        ],
        codes: {
          ean: "7896051166818",
          dun: "17896051166815",
          sku: "610250414",
          validity: "180 dias"
        }
      }
    },
    {
      id: "bebida-whey-chocolate",
      name: "Bebida Whey Chocolate",
      description: "Bebida láctea proteica sabor chocolate",
      image: WheyChocolate,
      nutrition: {
        portion: "250 ml (1 unidade)",
        items: [
          { name: "Valor Energético", amount: "118 kcal", dailyValue: "6" },
          { name: "Carboidratos", amount: "8,8 g", dailyValue: "3" },
          { name: "Açúcares totais", amount: "4,5 g", dailyValue: "**" },
          { name: "Galactose", amount: "2,3 g", dailyValue: "**" },
          { name: "Glicose", amount: "2,2 g", dailyValue: "**" },
          { name: "Proteínas", amount: "15 g", dailyValue: "30" },
          { name: "Gorduras totais", amount: "2 g", dailyValue: "3" },
          { name: "Gorduras saturadas", amount: "1,3 g", dailyValue: "7" },
          { name: "Sódio", amount: "250 mg", dailyValue: "13" },
          { name: "Cálcio", amount: "213 mg", dailyValue: "21" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite semidesnatado, soro de leite reconstituído, xarope de cacau, caseinato de cálcio, concentrado protéico de soro de leite, amido modificado, cloreto de sódio, estabilizantes carboximetilcelulose sódica, fosfato dissódico, fosfato dipotássico, celulose microcristalina e carragena, aromatizante, enzima lactase e edulcorante sucralose.",
        legend: [
          "Contém: Leite e derivados e derivados de soja / Contiene: Derivados de leche y soja.",
          "Não contém Lactose / No contiene Lactosa.",
          "Contém Glúten / Contiene Glúten."
        ],
        codes: {
          ean: "7896051166412",
          dun: "1789605116641",
          sku: "610100172",
          validity: "120 dias"
        }
      }
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
      nutrition: {
        portion: "30g (1 colher de sopa)",
        items: [
          { name: "Valor Energético", amount: "80 kcal", dailyValue: "336 kJ" },
          { name: "Carboidrato", amount: "0,6 g", dailyValue: "0" },
          { name: "Proteínas", amount: "3,5 g", dailyValue: "5" },
          { name: "Gorduras Totais", amount: "7,1 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "4,6 g", dailyValue: "21" },
          { name: "Gordura Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "114 mg", dailyValue: "5" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, creme de leite, cloreto de sódio, cloreto de cálcio, coagulante, fermento lácteo, emulsificantes (INS 450iii, INS 452i, INS451i, INS450v e INS 451ii), regulador de acidez ácido láctico, conservadores sorbato de potássio e nisina.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Após aberto, consumir em até 08 dias. Manter refrigerado de 1°C a 10°C. Não congelar."
        ],
        codes: {
          ean: "7896051140016",
          dun: "17896051140013",
          sku: "600580336",
          validity: "90 dias"
        }
      }
    },
    {
      id: "requeijao-nolac",
      name: "Requeijão Cremoso Light Nolac 200g",
      description: "Requeijão cremoso zero lactose",
      image: RequeijaoNolac,
      nutrition: {
        portion: "100 g",
        items: [
          { name: "Valor Energético", amount: "178 kcal = 748 kJ", dailyValue: "9" },
          { name: "Carboidrato", amount: "0", dailyValue: "0" },
          { name: "Glicose", amount: "0", dailyValue: "(**)" },
          { name: "Galactose", amount: "0", dailyValue: "(**)" },
          { name: "Lactose", amount: "0", dailyValue: "(**)" },
          { name: "Proteínas", amount: "13 g", dailyValue: "17" },
          { name: "Gorduras Totais", amount: "14 g", dailyValue: "25" },
          { name: "Gorduras Saturadas", amount: "8,5 g", dailyValue: "39" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "(**)" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "587 mg", dailyValue: "24" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, enzima lactase, cloreto de sódio, cloreto de cálcio, coagulante, fermento lácteo, emulsificantes (INS 450iii, INS 452i, INS 451i, INS 450v, INS 451ii), regulador de acidez ácido láctico, conservadores sorbato de potássio e nisina.",
        legend: [
          "CONTÉM LEITE E DERIVADOS.",
          "NÃO CONTÉM GLÚTEN.",
          "Após aberto, consumir em até 08 dias."
        ],
        codes: {
          ean: "7896051140405",
          dun: "17896051140402",
          sku: "600595336",
          validity: "90 dias"
        }
      }
    },
    {
      id: "requeijao-light",
      name: "Requeijão Light 200G",
      description: "Requeijão light reduzido de calorias e gorduras totais",
      image: RequeijaoLight,
      nutrition: {
        portion: "30g (1 colher de sopa)",
        items: [
          { name: "Valor Energético (kcal)", amount: "46", dailyValue: "2" },
          { name: "Carboidratos", amount: "0,4 g", dailyValue: "0" },
          { name: "Açúcares totais (g)", amount: "0,2", dailyValue: "(**)" },
          { name: "Açúcares adicionados (g)", amount: "0", dailyValue: "0" },
          { name: "Proteínas (g)", amount: "3,9", dailyValue: "8" },
          { name: "Gorduras Totais (g)", amount: "3,2", dailyValue: "5" },
          { name: "Gorduras Saturadas (g)", amount: "2,1", dailyValue: "11" },
          { name: "Gorduras Trans (g)", amount: "0", dailyValue: "0" },
          { name: "Fibras Alimentares (g)", amount: "0", dailyValue: "0" },
          { name: "Sódio (g)", amount: "156", dailyValue: "8" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, concentrado proteico de leite em pó, concentrado proteico de soro de leite em pó, cloreto de sódio (sal), cloreto de cálcio, coagulante, fermento lácteo, emulsificantes (pirofosfato tetrassódico, hexametafosfato de sódio, tripolifosfato de sódio, pirofosfato tetrapotássico e tripolifosfato de potássio), conservadores sorbato de potássio e nisina e regulador de acidez ácido láctico.",
        legend: [
          "ALÉRGICOS: CONTÉM LEITE E DERIVADOS.",
          "CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN."
        ],
        codes: {
          ean: "7896051140108",
          dun: "17896051140105",
          sku: "178960511",
          validity: "90 dias"
        }
      }
    },
    {
      id: "leite-em-po-integral",
      name: "Leite em Pó Integral Sachê 200G",
      description: "Leite em pó integral para uso culinário",
      image: LeiteEmPoIntegral,
      nutrition: {
        portion: "26g (2 colheres de sopa)",
        items: [
          { name: "Valor Energético", amount: "129 kcal = 542 kj", dailyValue: "6" },
          { name: "Carboidrato", amount: "9,6 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,7 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "7,1 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "4,4 g", dailyValue: "20" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "91 mg", dailyValue: "4" },
          { name: "Cálcio", amount: "239 mg", dailyValue: "24" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite integral.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051130055",
          dun: "47896051130053",
          sku: "600301100",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-em-po-integral-instantaneo",
      name: "Leite em pó Integral Instantâneo",
      description: "Leite em pó integral instantâneo",
      image: LeiteEmPoIntegralInstantaneo,
      nutrition: {
        portion: "26g (2 colheres de sopa)",
        items: [
          { name: "Valor Energético", amount: "129 kcal = 542 kj", dailyValue: "6" },
          { name: "Carboidrato", amount: "9,6 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,7 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "7,1 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "4,4 g", dailyValue: "20" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "75 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "239 mg", dailyValue: "24" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite integral e emulsificante lecitina de soja.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051130079",
          dun: "47896051130077",
          sku: "600306100",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-em-po-desnatado-instantaneo",
      name: "Leite em pó Desnatado Instantâneo",
      description: "Leite em pó desnatado instantâneo",
      image: LeiteEmPoDesnatadoInstantaneo,
      nutrition: {
        portion: "Porção de 20g (1 e 1/2 colher de sopa)",
        items: [
          { name: "Valor energético", amount: "68 kcal = 286 kj", dailyValue: "3" },
          { name: "Carboidratos", amount: "10 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,9 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "0", dailyValue: "0" },
          { name: "Gorduras Saturadas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "80 mg", dailyValue: "3" },
          { name: "Cálcio", amount: "260 mg", dailyValue: "26" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite desnatado e emulsificante lecitina de soja.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051131069",
          dun: "37896051131060",
          sku: "600352235",
          validity: "365 dias"
        }
      }
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
       nutrition: {
        portion: "100 g",
        items: [
          { name: "Valor Energético", amount: "495 kcal = 2079 kJ", dailyValue: "25" },
          { name: "Carboidratos, dos quais:", amount: "37 g", dailyValue: "12" },
          { name: "Glicose", amount: "18 g", dailyValue: "**" },
          { name: "Galactose", amount: "18 g", dailyValue: "**" },
          { name: "Lactose", amount: "0", dailyValue: "**" },
          { name: "Proteínas", amount: "26 g", dailyValue: "35" },
          { name: "Gorduras totais", amount: "27 g", dailyValue: "49" },
          { name: "Gorduras saturadas", amount: "17 g", dailyValue: "77" },
          { name: "Gorduras trans", amount: "0", dailyValue: "**" },
          { name: "Fibra alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "290 mg", dailyValue: "12" },
          { name: "Vitamina A", amount: "692 mcgRE", dailyValue: "115" },
          { name: "Vitamina C", amount: "52 mg", dailyValue: "116" },
          { name: "Vitamina D", amount: "5,8 mcg", dailyValue: "116" },
          { name: "Vitamina E", amount: "12", dailyValue: "120" },
          { name: "Zinco", amount: "8,1 mg", dailyValue: "116" },
          { name: "Ferro", amount: "16 mg", dailyValue: "114" },
          { name: "Cálcio", amount: "1318 mg", dailyValue: "132" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, enzima lactase, fosfato tricálcio, vitaminas A, C, D e E, ferro, zinco e emulsificante lecitina de soja.",
        legend: [
          "CONTÉM LEITE E DERIVADOS DE SOJA.",
          "Não contém glúten.",
          "Diabéticos: Contém glicose.",
          "Galactosêmicos: Contém Galactose.",
          "Manter em local seco e arejado. Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051128441",
          dun: "57896051128446",
          sku: "600316300",
          validity: "270 dias"
        }
      }
    },
    {
      id: "leite-em-po-pouch-integral",
      name: "Leite em Pó Integral Pouch 750g",
      description: "Rico em vitaminas A, C, D, E, zinco, ferro e cálcio",
      image: LeiteEmPoPouchIntegral,
      nutrition: {
        portion: "26g (2 colheres de sopa)",
        items: [
          { name: "Valor Energético", amount: "131 kcal = 550 kj", dailyValue: "7" },
          { name: "Carboidratos", amount: "11 g", dailyValue: "4" },
          { name: "Proteínas", amount: "6,3 g", dailyValue: "11" },
          { name: "Gorduras Totais", amount: "6,9 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "4,5 g", dailyValue: "20" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "72 mg", dailyValue: "3" },
          { name: "Vitamina A", amount: "90 mcgRE", dailyValue: "15" },
          { name: "Vitamina C", amount: "6,8 mg", dailyValue: "15" },
          { name: "Vitamina D", amount: "0,75 mcg", dailyValue: "15" },
          { name: "Vitamina E", amount: "1,5 mg", dailyValue: "15" },
          { name: "Zinco", amount: "1,1 mg", dailyValue: "16" },
          { name: "Ferro", amount: "2,1 mg", dailyValue: "15" },
          { name: "Cálcio", amount: "237 mg", dailyValue: "24" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, vitaminas A, C, D e E, ferro e zinco.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051130086",
          dun: "17896051130083",
          sku: "600307288",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-em-po-desnatado-instantaneo-pouch",
      name: "Leite em Pó Desnatado Instantâneo Pouch 500g",
      description: "Rico em vitaminas A, C, D, E, zinco, ferro e cálcio",
      image: LeiteEmPoPouchDesnatadoInstataneo,
      nutrition: {
        portion: "20 g (1 e 1/2 colher de sopa)",
        items: [
          { name: "Valor Energético", amount: "68 kcal = 286 kj", dailyValue: "3" },
          { name: "Carboidratos", amount: "10 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,9 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "0", dailyValue: "0" },
          { name: "Gorduras Saturadas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "80 mg", dailyValue: "3" },
          { name: "Vitamina A", amount: "180 mcgRE", dailyValue: "30" },
          { name: "Vitamina C", amount: "14 mg", dailyValue: "30" },
          { name: "Vitamina D", amount: "1,5 mg", dailyValue: "30" },
          { name: "Vitamina E", amount: "3,0 mg", dailyValue: "30" },
          { name: "Zinco", amount: "2,1 mg", dailyValue: "30" },
          { name: "Cálcio", amount: "260 mg", dailyValue: "26" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite desnatado, vitaminas A, C e D e E, zinco e emulsificante lecitina de soja.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051130109",
          dun: "17896051130106",
          sku: "600352289",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-em-po-instantaneo-pouch",
      name: "Leite em Pó Integral Instantâneo Pouch 750g",
      description: "Rico em vitaminas A, C, D, E, zinco, ferro e cálcio",
      image: LeiteEmPoPouchInstantaneo,
      nutrition: {
        portion: "Porção de 26g (2 colheres de sopa)",
        items: [
          { name: "Valor Energético", amount: "129 kcal = 542 kj", dailyValue: "6" },
          { name: "Carboidratos", amount: "9,6 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,7 g", dailyValue: "9" },
          { name: "Gorduras Totais", amount: "7,1 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "4,4 g", dailyValue: "20" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "75 mg", dailyValue: "3" },
          { name: "Vitamina A", amount: "180 mcgRE", dailyValue: "30" },
          { name: "Vitamina C", amount: "14 mg", dailyValue: "30" },
          { name: "Vitamina D", amount: "1,5 mcg", dailyValue: "30" },
          { name: "Vitamina E", amount: "3,0 mg", dailyValue: "30" },
          { name: "Zinco", amount: "2,1 mg", dailyValue: "30" },
          { name: "Ferro", amount: "4,2 mg", dailyValue: "30" },
          { name: "Cálcio", amount: "300 mg", dailyValue: "30" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, fosfato tricálcio, vitaminas A, C, D e E, ferro e zinco e emulsifiante lecitina de soja.",
        legend: [
          "CONTÉM LEITE. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado.",
          "Quando não for utilizado todo o conteúdo, dobre a embalagem e guarde em recipiente fechado e seco. Após aberto, consumir em 30 dias."
        ],
        codes: {
          ean: "7896051130093",
          dun: "17896051130090",
          sku: "600306288",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-em-po-kids",
      name: "Leite em Pó Itambé Kids Dez Vitaminas 700g",
      description: "Rico em vitaminas A, C, D, E, zinco, ferro e cálcio",
      image: LeiteEmPoKids,
      nutrition: {
        portion: "26g (2 colheres de sopa)",
        items: [
          { name: "Valor energético", amount: "129 kcal", dailyValue: "6" },
          { name: "Carboidratos", amount: "10 g", dailyValue: "3" },
          { name: "Proteínas", amount: "6,4 g", dailyValue: "13" },
          { name: "Gorduras totais", amount: "7 g", dailyValue: "11" },
          { name: "Gorduras saturadas", amount: "4,5 g", dailyValue: "23" },
          { name: "Gorduras trans", amount: "0", dailyValue: "**" },
          { name: "Fibra alimentar", amount: "0", dailyValue: "0" },
          { name: "Vitamina A", amount: "120 mcg RE", dailyValue: "15" },
          { name: "Vitamina C", amount: "15 mg", dailyValue: "15" },
          { name: "Vitamina D", amount: "2,3 mcg", dailyValue: "15" },
          { name: "Vitamina E", amount: "2,3 mg", dailyValue: "15" },
          { name: "Vitamina B1", amount: "0,18 mg", dailyValue: "15" },
          { name: "Vitamina B2", amount: "0,18 mg", dailyValue: "15" },
          { name: "Vitamina B3", amount: "2,3 mg", dailyValue: "15" },
          { name: "Vitamina B6", amount: "0,2 mg", dailyValue: "15" },
          { name: "Vitamina B9", amount: "60 mcg", dailyValue: "15" },
          { name: "Vitamina B12", amount: "0,36 mcg", dailyValue: "15" },
          { name: "Ferro", amount: "2,1 mg", dailyValue: "15" },
          { name: "Zinco", amount: "1,7 mg", dailyValue: "15" },
          { name: "Cálcio", amount: "240 mg", dailyValue: "24" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },

      ingredients: {
        list: "Leite integral, vitaminas C, E, B3, B6, B1, B2, A, B9, D e B12, minerais ferro e zinco e emulsificante lecitina.",
        legend: [
          "Contém leite e derivados de soja. Contém lactose.",
          "Não contém glúten."
        ],
        codes: {
          ean: "7896051166887",
          dun: "17896051166884",
          sku: "600382372",
          validity: "365 dias"
        }
      }
    },
    {
      id: "leite-condensado-nolac",
      name: "Leite Condensado Semidesnatado Nolac",
      description: "Leite condensado sem lactose",
      image: LeiteCondensadoNolac,
      nutrition: {
        portion: "100 g",
        items: [
          { name: "Valor Energético",      amount: "327 kcal = 1373 kJ", dailyValue: "16" },
          { name: "Carboidrato, dos quais:", amount: "57 g", dailyValue: "19" },
          { name: "Sacarose",               amount: "45 g", dailyValue: "**" },
          { name: "Glicose",                amount: "5,8 g", dailyValue: "**" },
          { name: "Galactose",              amount: "5,8 g", dailyValue: "**" },
          { name: "Lactose",                amount: "0", dailyValue: "**" },
          { name: "Proteínas",              amount: "7,4 g", dailyValue: "10" },
          { name: "Gorduras Totais",        amount: "8,0 g", dailyValue: "15" },
          { name: "Gorduras Saturadas",     amount: "5,0 g", dailyValue: "23" },
          { name: "Gorduras Trans",         amount: "0", dailyValue: "**" },
          { name: "Fibra alimentar",        amount: "0", dailyValue: "0" },
          { name: "Sódio",                  amount: "127 mg", dailyValue: "5" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral, açúcar e enzima lactase.",
        legend: [
          "CONTÉM LEITE. NÃO CONTÉM GLÚTEN.",
          "DIABÉTICOS: CONTÉM GLICOSE E GALACTOSE.",
          "Galactosêmicos: Contém Galactose.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 5 dias."
        ],
        codes: {
          ean: "7896051164166",
          dun: "17896051164163",
          sku: "600656273",
          validity: "180 dias"
        }
      }
    },
    {
      id: "leite-condensado-semidesnatado",
      name: "Leite Condensado Semidesnatado",
      description: "Leite condensado semidesnatado",
      image: LeiteCondensadoSemiDesnatado,
      nutrition: {
        portion: "20g (2 colheres de sopa)",
        items: [
          { name: "Valor energético",   amount: "62 kcal = 260 kJ", dailyValue: "3" },
          { name: "Carboidratos",       amount: "12 g", dailyValue: "4" },
          { name: "Proteínas",          amount: "1,7 g", dailyValue: "2" },
          { name: "Gorduras Totais",    amount: "0,8 g", dailyValue: "1" },
          { name: "Gorduras Saturadas", amount: "0,4 g", dailyValue: "2" },
          { name: "Gorduras Trans",     amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar",    amount: "0", dailyValue: "0" },
          { name: "Sódio",              amount: "19 mg", dailyValue: "1" },
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list:
          "Leite integral e/ou leite em pó integral reconstituído, açúcar e lactose. Com 4% de Gordura.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "Não contém glúten.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 5 dias."
        ],
        codes: {
          ean: "7896051115014",
          dun: "27896051115018",
          sku: "600651273",
          validity: "12 meses"
        }
      }
    },
    {
      id: "leite-condensado",
      name: "Leite Condensado",
      description: "Leite condensado integral",
      image: LeiteCondensadoIntegral,
      nutrition: {
        portion: "20g (2 colheres de sopa)",
        items: [
          { name: "Valor energético",      amount: "64 kcal = 269 kJ", dailyValue: "3" },
          { name: "Carboidratos",          amount: "11 g", dailyValue: "4" },
          { name: "Proteínas",             amount: "1,4 g", dailyValue: "2" },
          { name: "Gorduras Totais",       amount: "1,6 g", dailyValue: "3" },
          { name: "Gorduras Saturadas",    amount: "1,0 g", dailyValue: "5" },
          { name: "Gorduras Trans",        amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar",       amount: "0", dailyValue: "0" },
          { name: "Sódio",                 amount: "26 mg", dailyValue: "1" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral e/ou leite em pó integral reconstituído, açúcar e lactose.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "Não contém glúten.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 5 dias."
        ],
        codes: {
          ean: "7896051115038",
          dun: "17896051115035",
          sku: "600651058",
          validity: "12 meses"
        }
      }
    },
    {
      id: "creme-de-leite",
      name: "Creme de Leite 17%",
      description: "Creme de leite tradicional",
      image: CremeDeLeite,
      nutrition: {
        portion: "15 g (1 e ¹/2 colher de sopa)",
        items: [
          { name: "Valor Energético",   amount: "26 kcal = 109 kJ", dailyValue: "1" },
          { name: "Carboidratos",       amount: "0,7 g", dailyValue: "0" },
          { name: "Proteínas",          amount: "0", dailyValue: "0" },
          { name: "Gorduras Totais",    amount: "2,6 g", dailyValue: "5" },
          { name: "Gorduras Saturadas", amount: "1,7 g", dailyValue: "8" },
          { name: "Gorduras Trans",     amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar",    amount: "0", dailyValue: "0" },
          { name: "Sódio",              amount: "6,6 mg", dailyValue: "0" },
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list:
          "Creme de leite, leite em pó desnatado, estabilizantes goma alfarroba, goma guar, carboximetilcelulose sódica, carragena, estabilizantes citrato de sódio e fosfato dissódico.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 2 dias."
        ],
        codes: {
          ean: "7896051114024",
          dun: "37896051114025",
          sku: "600665023",
          validity: "180 dias"
        }
      }
    },
    {
      id: "creme-de-leite-levissimo",
      name: "Creme de Leite Levíssimo 200G",
      description: "Creme de leite leve",
      image: CremeDeLeiteLevissimo,
      nutrition: {
        portion: "15 g (1 e ¹/2 colher de sopa)",
        items: [
          { name: "Valor Energético",   amount: "18 kcal", dailyValue: "1" },
          { name: "Carboidratos",       amount: "0,7 g", dailyValue: "0" },
          { name: "Proteínas",          amount: "0,5 g", dailyValue: "1" },
          { name: "Gorduras Totais",    amount: "1,5 g", dailyValue: "2" },
          { name: "Gorduras Saturadas", amount: "1 g", dailyValue: "5" },
          { name: "Gorduras Trans",     amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar",    amount: "0", dailyValue: "0" },
          { name: "Sódio",              amount: "10 mg", dailyValue: "1" },
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list:
          "Creme de leite, leite em pó desnatado, estabilizantes celulose microcristalina, carboximetilcelulose sódica, goma guar, carragena, hidrogenofosfato de di-sódio e citrato trissódico.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE.",
          "NÃO CONTÉM GLÚTEN.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 2 dias."
        ],
        codes: {
          ean: "7896051167457",
          dun: "17896051167454",
          sku: "600669023",
          validity: "180 dias"
        }
      }
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
      nutrition: {
        portion: "Porção de 20g (1 colher de sopa)",
        items: [
          { name: "Valor energético", amount: "65 kcal = 273 kJ", dailyValue: "3" },
          { name: "Carboidratos", amount: "11 g", dailyValue: "4" },
          { name: "Proteínas", amount: "1,6 g", dailyValue: "2" },
          { name: "Gorduras Totais", amount: "1,6 g", dailyValue: "3" },
          { name: "Gorduras Saturadas", amount: "1,0 g", dailyValue: "5" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "33 mg", dailyValue: "1" },
          { name: "Cálcio", amount: "71 mg", dailyValue: "7" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral e/ou leite em pó integral reconstituído, açúcar, cloreto de sódio, lactose e conservador sorbato de potássio.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "Não contém glúten.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 10 dias."
        ],
        codes: {
          ean: "7896051145219",
          dun: "77896051145218",
          sku: "600608030",
          validity: "300 dias"
        }
      }
    },
    {
      id: "doce-de-leite-pastoso",
      name: "Doce de Leite Pastoso",
      description: "Doce de leite com textura cremosa",
      image: DoceDeLeitePastoso,
    },
    {
      id: "doce-de-leite-bag",
      name: "Doce de Leite Tradicional Bag 2,5kg",
      description: "Doce de leite em embalagem econômica",
      image: DoceDeLeiteBag,
      nutrition: {
        portion: "20g (1 colher de sopa)",
        items: [
          { name: "Valor energético", amount: "65 kcal = 273 kJ", dailyValue: "3" },
          { name: "Carboidratos", amount: "11 g", dailyValue: "4" },
          { name: "Proteínas", amount: "1,6 g", dailyValue: "2" },
          { name: "Gorduras Totais", amount: "1,6 g", dailyValue: "3" },
          { name: "Gorduras Saturadas", amount: "1,0 g", dailyValue: "5" },
          { name: "Gorduras Trans", amount: "0", dailyValue: "**" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "33 mg", dailyValue: "1" },
          { name: "Cálcio", amount: "71 mg", dailyValue: "7" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Leite integral e/ou leite em pó integral reconstituído, açúcar, cloreto de sódio, lactose e conservador sorbato de potássio.",
        legend: [
          "CONTÉM LEITE E DERIVADOS. CONTÉM LACTOSE. PODE CONTER DERIVADOS DE SOJA.",
          "Não contém glúten.",
          "Manter em local seco e arejado. Após aberto, manter sob refrigeração e consumir em 10 dias."
        ],
        codes: {
          ean: "7896051145905",
          dun: "17896051145902",
          sku: "600621301",
          validity: "300 dias"
        }
      }
    },
    {
      id: "manteiga-com-sal",
      name: "Manteiga com Sal Pote 200G",
      description: "Manteiga tradicional cremosa",
      image: ManteigaComSal,
      nutrition: {
        portion: "Porção de 10g (1 colher de sopa)",
        items: [
          { name: "Valor energético", amount: "72 kcal = 302 kJ", dailyValue: "4" },
          { name: "Carboidratos", amount: "0,6", dailyValue: "0" },
          { name: "Proteínas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Totais", amount: "8,0 g", dailyValue: "15" },
          { name: "Gorduras Saturadas", amount: "5,5 g", dailyValue: "25" },
          { name: "Gorduras Trans", amount: "0,3 g", dailyValue: "(**)" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "63 mg", dailyValue: "3" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Creme de leite e sal (cloreto de sódio).",
        legend: [
          "CONTÉM DERIVADOS DE LEITE. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Após aberto, consumir em até 15 dias. Manter refrigerado de 1°C a 10°C. Não congelar."
        ],
        codes: {
          ean: "7896051135456",
          dun: "27896051135450",
          sku: "600420242",
          validity: "150 dias"
        }
      }
    },
    {
      id: "manteiga-sem-sal",
      name: "Manteiga sem Sal Pote 200G",
      description: "Manteiga tradicional sem sal",
      image: ManteigaSemSal,
      nutrition: {
        portion: "Porção de 10g (1 colher de sopa)",
        items: [
          { name: "Valor energético", amount: "77 kcal", dailyValue: "4" },
          { name: "Carboidratos", amount: "0", dailyValue: "0" },
          { name: "Proteínas", amount: "0", dailyValue: "0" },
          { name: "Gorduras Totais", amount: "8,5 g", dailyValue: "13" },
          { name: "Gorduras Saturadas", amount: "5,8 g", dailyValue: "29" },
          { name: "Gorduras Trans", amount: "0,1 g", dailyValue: "5" },
          { name: "Fibra Alimentar", amount: "0", dailyValue: "0" },
          { name: "Sódio", amount: "1,3 mg", dailyValue: "0" }
        ],
        legend: [
          "\"Não contém quantidades significativas de gorduras trans e fibra alimentar.\"",
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não Estabelecido."
        ]
      },
      ingredients: {
        list: "Creme de leite.",
        legend: [
          "CONTÉM DERIVADOS DE LEITE. CONTÉM LACTOSE.",
          "Não contém glúten.",
          "Após aberto, consumir em até 15 dias. Manter refrigerado de 1°C a 10°C. Não congelar."
        ],
        codes: {
          ean: "7896051167143",
          dun: "17896051167140",
          sku: "600421242",
          validity: "150 dias"
        }
      }
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
      nutrition: {
        portion: "Porção de 100g",
        items: [
          { name: "Valor Energético", amount: "141 kcal", dailyValue: "55 kcal" },
          { name: "Carboidratos", amount: "0 g", dailyValue: "0 g" },
          { name: "Proteínas", amount: "21 g", dailyValue: "8,9 g" },
          { name: "Gorduras Totais", amount: "6,2 g", dailyValue: "2,1 g" },
          { name: "Gorduras Saturadas", amount: "3,1 g", dailyValue: "1,1 g" },
          { name: "Gorduras Trans", amount: "0 g", dailyValue: "0 g" },
          { name: "Gorduras Monoinsaturadas", amount: "-", dailyValue: "-" },
          { name: "Gorduras Poliinsaturadas", amount: "-", dailyValue: "-" },
          { name: "Fibra Alimentar", amount: "0,7 g", dailyValue: "0,2 g" },
          { name: "Sódio", amount: "1058 mg", dailyValue: "2220 mg" },
          { name: "Colesterol", amount: "-", dailyValue: "-" },
          { name: "Ferro", amount: "-", dailyValue: "-" },
          { name: "Cálcio", amount: "-", dailyValue: "-" },
          { name: "Açúcares Totais", amount: "0 g", dailyValue: "0 g" },
          { name: "Açúcar Total", amount: "-", dailyValue: "-" },
          { name: "Açúcares Adicionados", amount: "0 g", dailyValue: "0 g" },
          { name: "Fibras Alimentares", amount: "-", dailyValue: "-" },
          { name: "Número de Porções", amount: "-", dailyValue: "-" },
          { name: "Valor Calórico", amount: "-", dailyValue: "-" },
          { name: "Umidade", amount: "-", dailyValue: "-" },
          { name: "Cinzas", amount: "-", dailyValue: "-" }
        ],
        legend: [
          "* % Valores Diários com base em uma dieta de 2.000 kcal ou 8400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas. **Não estabelecido."
        ]
      },

      ingredients: {
        legend: [
          "Quantidade mínima e máxima da caixa é 1, mantendo a conveniência na estocagem.",
          "Temperatura ambiente.",
          "Tempo de vida do produto: 180 dias."
        ],
        codes: {
          validity: "180 dias"
        }
      }
    }
  ];
  
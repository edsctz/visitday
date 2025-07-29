import { Neighborhood } from '../types';

export const neighborhoods: Record<string, Neighborhood> = {
  tambore11: {
    id: 'tambore11',
    name: 'Tamboré 11',
    title: 'Casas a Venda e Locação no Tamboré 11',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/tambore11.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa Moderna com Piscina',
        subtitle: 'Tamboré 11 - Alto Padrão',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 433,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Residência Espaçosa',
        subtitle: 'Design Contemporâneo e Acabamentos Premium',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 380,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Oportunidade Única',
        subtitle: 'Próximo a Áreas Verdes e Comércio',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 320,
          mobiliado: false
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/tambore11',
    budgetRanges: {
      venda: {
        min: 4000000,
        max: 15000000,
        step: 200000
      },
      locacao: {
        min: 20000,
        max: 50000,
        step: 2000
      }
    }
  },
    singular: {
    id: 'singular',
    name: 'Singular',
    title: 'Casas Novas no Condomínio Singular',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Singular.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa Recém Entregue',
        subtitle: 'Singular - Excelente Localização',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 310,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Casa Nova com Acabamentos Premium',
        subtitle: 'Design Moderno e Funcional',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 285,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Oportunidade no Singular',
        subtitle: 'Pronta para Morar',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 260,
          mobiliado: false
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/singular',
    budgetRanges: {
      venda: {
        min: 3000000,
        max: 10000000,
        step: 100000
      },
      locacao: {
        min: 20000,
        max: 50000,
        step: 2000
      }
    }
  },
    tambore3: {
    id: 'tambore3',
    name: 'Tamboré 3',
    title: 'Casas a Venda e Locação no Tamboré 3',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Tambore3.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Mansão Luxuosa',
        subtitle: 'Tamboré 3 - Acabamentos de Altíssimo Padrão',
        features: {
          bedrooms: 5,
          bathrooms: 6,
          area: 1080,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Casa de Alto Padrão',
        subtitle: 'Arquitetura Exclusiva e Lazer Completo',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 850,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Residência Premium',
        subtitle: 'Vista Privilegiada e Segurança 24h',
        features: {
          bedrooms: 4,
          bathrooms: 4,
          area: 720,
          mobiliado: true
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/tambore3',
    budgetRanges: {
      venda: {
        min: 6000000,
        max: 25000000,
        step: 200000
      },
      locacao: {
        min: 30000,
        max: 60000,
        step: 2000
      }
    }
  },
    residencial9: {
    id: 'residencial9',
    name: 'Alphaville Residencial 9',
    title: 'Casas a Venda e Locação no Residencial 9',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Residencial9.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Excelente Oportunidade',
        subtitle: 'Residencial 9 - Abaixo do Valor de Mercado',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 345,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Casa Familiar Completa',
        subtitle: 'Área de Lazer e Jardim Amplo',
        features: {
          bedrooms: 4,
          bathrooms: 3,
          area: 390,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Casa Pronta para Morar',
        subtitle: 'Localização Privilegiada',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 310,
          mobiliado: false
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/residencial9',
    budgetRanges: {
      venda: {
        min: 1500000,
        max: 7000000,
        step: 200000
      },
      locacao: {
        min: 10000,
        max: 30000,
        step: 2000
      }
    }
  },
  casaavenda: {
    id: 'casaavenda',
    name: 'Alphaville',
    title: 'Casas a Venda em Alphaville',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Residencial9.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa para Venda',
        subtitle: 'Alphaville - Excelente Oportunidade',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 345,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Residência de Alto Padrão',
        subtitle: 'Acabamentos Diferenciados',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 450,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Casa com Piscina',
        subtitle: 'Área de Lazer Completa',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 380,
          mobiliado: false
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/casas-venda',
    budgetRanges: {
      venda: {
        min: 1500000,
        max: 10000000,
        step: 200000
      },
      locacao: {
        min: 10000,
        max: 60000,
        step: 5000
      }
    }
  },
    genesis: {
    id: 'genesis12',
    name: 'Genesis I e II',
    title: 'Casas a Venda e Locação no Genesis 1 e 2',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Genesis.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa com Vista para a Mata',
        subtitle: 'Genesis II - Alto Padrão',
        features: {
          bedrooms: 4,
          bathrooms: 7,
          area: 303,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Residência Exclusiva',
        subtitle: 'Genesis I - Conforto e Privacidade',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 280,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Casa em Condomínio Fechado',
        subtitle: 'Segurança e Tranquilidade',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 350,
          mobiliado: true
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/genesis',
    budgetRanges: {
      venda: {
        min: 4000000,
        max: 15000000,
        step: 200000
      },
      locacao: {
        min: 20000,
        max: 50000,
        step: 2000
      }
    }
  },
    residencial5: {
    id: 'residencial5',
    name: 'Alphaville Residencial 5',
    title: 'Casas a Venda e Locação no Residencial 5',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/Residencial5.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa Pronta para Morar',
        subtitle: 'Residencial 5 - Para Venda ou Alugar',
        features: {
          bedrooms: 4,
          bathrooms: 3,
          area: 290,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Residência Familiar',
        subtitle: 'Espaços Amplos e Bem Distribuídos',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 320,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Casa com Quintal Amplo',
        subtitle: 'Ideal para Famílias',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 275,
          mobiliado: false
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/residencial5',
    budgetRanges: {
      venda: {
        min: 2000000,
        max: 10000000,
        step: 200000
      },
      locacao: {
        min: 10000,
        max: 30000,
        step: 2000
      }
    }
  },
    burlemarx: {
    id: 'burlemarx',
    name: 'Burle Marx',
    title: 'Casas a Venda e Locação no Burle Marx',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: '/BurleMarx.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Casa Moderna',
        subtitle: 'Burle Marx - Alto Padrão',
        features: {
          bedrooms: 3,
          bathrooms: 4,
          area: 230,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Residência Contemporânea',
        subtitle: 'Arquitetura Diferenciada',
        features: {
          bedrooms: 4,
          bathrooms: 5,
          area: 290,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Casa com Design Exclusivo',
        subtitle: 'Conforto e Sofisticação',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 250,
          mobiliado: true
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/burlemarx',
    budgetRanges: {
      venda: {
        min: 2000000,
        max: 15000000,
        step: 200000
      },
      locacao: {
        min: 15000,
        max: 50000,
        step: 2000
      }
    }
  },
  apartamentoalugar: {
    id: 'apartamentoalugar',
    name: 'Alphaville',
    title: 'Apartamentos para Alugar em Alphaville',
    subtitle: 'Conheça os melhores apartamentos disponíveis para alugar em Alphaville',
    heroImage: '/resorttambore.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Apartamento com 3 Quartos',
        subtitle: 'Alphaville - Pronto para Morar',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 133,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Apartamento Moderno',
        subtitle: 'Acabamentos de Qualidade',
        features: {
          bedrooms: 2,
          bathrooms: 2,
          area: 95,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Apartamento Espaçoso',
        subtitle: 'Vista Livre e Varanda Gourmet',
        features: {
          bedrooms: 3,
          bathrooms: 2,
          area: 110,
          mobiliado: true
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/apartamentos-alugar',
    budgetRanges: {
      venda: {
        min: 1000000,
        max: 1700000,
        step: 100000
      },
      locacao: {
        min: 5000,
        max: 20000,
        step: 1000
      }
    }
  },
  resorttambore: {
    id: 'resorttambore',
    name: 'Resort Tamboré',
    title: 'Apartamentos no Resort Tamboré',
    subtitle: 'Conheça os melhores apartamentos disponíveis em um dos condomínios clube mais exclusivos de Alphaville',
    heroImage: '/resorttambore.webp',
    showcaseProperties: [
      {
        image: 'http://images.ingaiasites.com.br/7414a22a49b9c2e05e35c781712cfd2f.jpg',
        title: 'Apartamento Resort Tamboré',
        subtitle: 'Condomínio Clube Exclusivo',
        features: {
          bedrooms: 3,
          bathrooms: 3,
          area: 133,
          mobiliado: true
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/75bf1c83679aa64dcc8de075afacbee9.jpg',
        title: 'Apartamento com Lazer Completo',
        subtitle: 'Piscinas, Quadras e Spa',
        features: {
          bedrooms: 2,
          bathrooms: 2,
          area: 85,
          mobiliado: false
        }
      },
      {
        image: 'http://images.ingaiasites.com.br/00da1739efe5b0364c1a0ce63ff88719.jpg',
        title: 'Apartamento Premium',
        subtitle: 'Vista para Área Verde',
        features: {
          bedrooms: 3,
          bathrooms: 2,
          area: 120,
          mobiliado: true
        }
      }
    ],
    listingPageUrl: 'https://www.c21alpha.com.br/imoveis/resort-tambore',
    budgetRanges: {
      venda: {
        min: 1000000,
        max: 1700000,
        step: 100000
      },
      locacao: {
        min: 7000,
        max: 15000,
        step: 1000
      }
    }
  }
};

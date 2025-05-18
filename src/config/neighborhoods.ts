import { Neighborhood } from '../types';

export const neighborhoods: Record<string, Neighborhood> = {
  tambore11: {
    id: 'tambore11',
    name: 'Tamboré 11',
    title: 'Casas a Venda e Locação no Tamboré 11',
    subtitle: 'Imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: 'https://pages.c21alpha.com.br/wp-content/uploads/2025/05/tambore11.webp',
    showcaseProperty: {
      image: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtu1g8jMxg+T0dtO0zX7mxvwShh5mk496Yvm2c6rXchJHi7szPZuSGl4UkiqisO3qe7KB3ZvouAVlAQNJ-AB3rXZrcbSB0vAO7lB3GeL5Ge3MOxFs8mwtvxH+5Bafx7GNu9wi7AaKGsw+TZ-DCBnkAHrMNAdIz7EIJ8RC9W0J8p0oF7Jq1qTLdaOenJpi9yWxNWAZ8vJq+TqjzwtiOK59nSeUyO3cb51URUaJf1-aKA+9jrwcLou-TCwSW3hrDkec3f8vtBcFOnqYKkxDHHLFN6E-pl9fBhaL-bkyHMwU+9LqeqvvkbvikEKCnJCWPhZcX44-BapgLd9vjXzZkXmZ-IXdBu12x6Kvlr0XmLCqU8xBJWEGSn45y9DdlbgpOrcNW7y-n.jpg',
      title: 'Casa Moderna',
      subtitle: 'Tamboré 11 - Alto Padrão',
      features: {
        bedrooms: 3,
        bathrooms: 4,
        area: 433,
        mobiliado: false
      }
    },
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
    heroImage: 'https://pages.c21alpha.com.br/wp-content/uploads/2025/05/Singular.webp',
    showcaseProperty: {
      image: 'https://pages.c21alpha.com.br/wp-content/uploads/2025/05/casasingular.webp',
      title: 'Casa Recém Entregue',
      subtitle: 'Excelente Local no Condomínio',
      features: {
        bedrooms: 4,
        bathrooms: 5,
        area: 310,
        mobiliado: false
      }
    },
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
  resorttambore: {
    id: 'resorttambore',
    name: 'Resort Tamboré',
    title: 'Apartamentos no Resort Tamboré',
    subtitle: 'Conheça os melhores apartamentos disponíveis em um dos condomínios clube mais exclusivos de Alphaville',
    heroImage: 'https://pages.c21alpha.com.br/wp-content/uploads/2025/05/resorttambore.webp',
    showcaseProperty: {
      image: 'https://imgs.kenlo.io/VWRCUkQ2Tnp3d1BJRDBJVe1szkhnWr9UfpZS9ftWwjXgr7v5Znen3XVcMHllDVRJJeIbi3YwVYEtux1a0Ylj2go-nuQzeLudiyyYxI+5woq4tBXTqZ7Onu3Zi8LNWefe4p817Y-VOHKh6IpBe9AHPk1+f7ZcHDbabt+LZiQI8yGOrX38YpdkeFF6miRroBQN7mTpB7Wc5noXxwS9VNPZ8QilFfv9Pl9TQPlLCdkx8QdQ8Bi1SUxy8h8d55m-oS7TO7S-K5+hxzlXFx5k9oa+Squ619jCLJU4Vr0lNm4L5VMZWe0S2-TJT-8+5wEDqv3JFhXchgzWgPAoc9j0QdhKmaoHiAvEGLFMu0zqlYLGg-atbkyGZVA897nN8afjOqj6Ef-xOUupjo0W5ISdfZoJdM-0XUdJQn52ZWBDplWm6tfGp02ncjSdth5HCl6OzpZqtXZrYEdR-9tU52I=.jpg',
      title: 'Apartamento com 3 Quartos',
      subtitle: 'A Venda ou Alugar',
      features: {
        bedrooms: 3,
        bathrooms: 3,
        area: 133,
        mobiliado: true
      }
    },
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

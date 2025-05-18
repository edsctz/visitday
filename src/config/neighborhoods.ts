import { Neighborhood } from '../types';

export const neighborhoods: Record<string, Neighborhood> = {
  tambore11: {
    id: 'tambore11',
    name: 'Tamboré 11',
    title: 'Concierge VIP: Seleção de Imóveis no Tamboré 11',
    subtitle: '3 a 5 imóveis selecionados e perfeitamente alinhados com o seu estilo de vida e preferências',
    heroImage: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1920',
    showcaseProperty: {
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Mansão Contemporânea com Vista Permanente',
      subtitle: 'Tamboré 11 - Alto Padrão',
      features: {
        bedrooms: 5,
        bathrooms: 7,
        area: 980,
        mobiliado: true
      }
    },
    budgetRanges: {
      venda: {
        min: 2000000,
        max: 15000000,
        step: 100000
      },
      locacao: {
        min: 10000,
        max: 50000,
        step: 1000
      }
    }
  },
  tambore10: {
    id: 'tambore10',
    name: 'Tamboré 10',
    title: 'Seu Dia de Visitas no Tamboré 10',
    subtitle: 'Conheça as melhores casas disponíveis em um dos condomínios mais exclusivos de Alphaville',
    heroImage: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1920',
    showcaseProperty: {
      image: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1280',
      title: 'Residência de Alto Padrão com Área Gourmet',
      subtitle: 'Tamboré 10 - Alto Padrão',
      features: {
        bedrooms: 4,
        bathrooms: 6,
        area: 750,
        mobiliado: false
      }
    },
    budgetRanges: {
      venda: {
        min: 1800000,
        max: 12000000,
        step: 100000
      },
      locacao: {
        min: 8000,
        max: 40000,
        step: 1000
      }
    }
  }
};

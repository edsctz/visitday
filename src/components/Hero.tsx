import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { ShowcaseProperty } from '../types';
import PropertyCard from './PropertyCard';

interface HeroProps {
  neighborhoodName: string;
  backgroundImage: string;
  showcaseProperties: ShowcaseProperty[];
  listingPageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ 
  neighborhoodName, 
  backgroundImage, 
  showcaseProperties, 
  listingPageUrl 
}) => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat h-full"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/80 to-[#121212]/60"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-[1] pt-24 pb-12">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Imóveis Disponíveis no {neighborhoodName}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
            Explore nossa seleção exclusiva de propriedades ou solicite uma curadoria personalizada
          </p>
        </div>

        {/* Property Gallery */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">
            Propriedades em Destaque
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-4 px-4 md:px-0 min-w-max md:justify-center">
              {showcaseProperties.map((property, index) => (
                <PropertyCard
                  key={index}
                  property={property}
                  listingPageUrl={listingPageUrl}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <a
            href={listingPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-50 text-[#252526] font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
          >
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ver Todos os Imóveis Disponíveis
          </a>
          
          <button
            onClick={scrollToForm}
            className="flex-1 bg-[#BEAF87] hover:bg-[#746649] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
          >
            <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-center">
              <span className="block">Seleção VIP Personalizada</span>
              <span className="block text-sm font-normal opacity-90">
                Análise gratuita dos 5 melhores imóveis para você
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
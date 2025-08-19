import React from 'react';
import { ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ShowcaseProperty } from '../types';
import PropertyCard from './PropertyCard';
import { addUtmParameters } from '../utils/utm';

interface HeroProps {
  neighborhoodName: string;
  neighborhoodId: string;
  title: string;
  subtitle: string;
  backgroundImage: string;
  showcaseProperties: ShowcaseProperty[];
  listingPageUrl: string;
}

const Hero: React.FC<HeroProps> = ({ 
  neighborhoodName, 
  neighborhoodId,
  title,
  subtitle,
  backgroundImage, 
  showcaseProperties, 
  listingPageUrl 
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? showcaseProperties.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === showcaseProperties.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
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
      
      <div className="container mx-auto px-4 md:px-8 relative z-[1] pt-16 pb-8">
        {/* Header Section */}
        <div className="text-center mb-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-white mb-2 leading-tight">
            {title}
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Property Carousel */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
            Top 3 Oportunidades Hoje
          </h2>
          
          {/* Mobile Horizontal Scroll */}
          <div className="md:hidden">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-4 pb-4" style={{ width: 'max-content' }}>
                {showcaseProperties.map((property, index) => (
                  <div key={index} className="w-80 flex-shrink-0">
                    <PropertyCard 
                      property={property} 
                      neighborhoodId={neighborhoodId}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex justify-center mt-2">
              <p className="text-white/70 text-sm">← Deslize para ver mais →</p>
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {showcaseProperties.map((_, index) => (
                <PropertyCard
                  key={index}
                  property={showcaseProperties[index]}
                  neighborhoodId={neighborhoodId}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
          <a
            href={addUtmParameters(listingPageUrl, neighborhoodId)}
            target="_blank"
            rel="noopener noreferrer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-50 text-[#252526] font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ver Todos Imóveis Disponíveis
          </a>
          
          <button
            onClick={scrollToForm}
            className="flex-1 bg-[#BEAF87] hover:bg-[#746649] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-center">
              <span className="block text-sm md:text-base">Seleção VIP Personalizada</span>
              <span className="block text-xs md:text-sm font-normal opacity-90">
                Um especialista envia as melhores opções para você
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
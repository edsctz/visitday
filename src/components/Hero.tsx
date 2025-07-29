import React from 'react';
import { ExternalLink, Star, ChevronLeft, ChevronRight } from 'lucide-react';
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
            Imóveis no {neighborhoodName}
          </h1>
          <p className="text-base md:text-xl text-white/90 mb-4 leading-relaxed max-w-3xl mx-auto">
            Explore nossa seleção exclusiva de imóveis ou solicite uma curadoria personalizada
          </p>
        </div>

        {/* Property Carousel */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 text-center">
            Melhores Oportunidades
          </h2>
          
          {/* Mobile Carousel */}
          <div className="md:hidden relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-lg mb-4">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {showcaseProperties.map((property, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <PropertyCard
                      property={property}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Controls */}
            <div className="flex justify-center items-center space-x-4">
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                className="bg-white/90 hover:bg-white text-[#252526] p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Propriedade anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Indicators */}
              <div className="flex space-x-2">
                {showcaseProperties.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? 'bg-[#BEAF87] w-6' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                    aria-label={`Ir para propriedade ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Next Button */}
              <button
                onClick={goToNext}
                className="bg-white/90 hover:bg-white text-[#252526] p-2 rounded-full shadow-lg transition-all duration-200"
                aria-label="Próxima propriedade"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Desktop Grid */}
          <div className="hidden md:block">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {showcaseProperties.map((_, index) => (
                <PropertyCard
                  key={index}
                  property={showcaseProperties[index]}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
          <a
            href={listingPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white hover:bg-gray-50 text-[#252526] font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Ver Todos os Imóveis Disponíveis
          </a>
          
          <button
            onClick={scrollToForm}
            className="flex-1 bg-[#BEAF87] hover:bg-[#746649] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group text-sm md:text-base"
          >
            <Star className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-center">
              <span className="block text-sm md:text-base">Seleção VIP Personalizada</span>
              <span className="block text-xs md:text-sm font-normal opacity-90">
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
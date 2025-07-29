import React from 'react';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, backgroundImage }) => {
  const scrollToForm = () => {
    const formElement = document.getElementById('form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('${backgroundImage}')`, 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 to-[#121212]/40"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-[1] text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 leading-tight">
          {title}
        </h1>
        <h2 className="text-xl md:text-2xl text-white mb-10 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </h2>
        <button 
          onClick={scrollToForm}
          className="bg-[#BEAF87] hover:bg-[#746649] text-[#121212] font-semibold py-4 px-8 rounded transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Escolher Imóveis
        </button>
      </div>
    </section>
  );
};

export default Hero;
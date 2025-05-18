import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute w-full z-10 px-4 py-6 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl tracking-wider">
          <span className="text-[#BEAF87]">CENTURY 21</span> <span>Alpha</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white">
          <button 
            onClick={() => scrollToSection('how-it-works')} 
            className="hover:text-[#BEAF87] transition-colors"
          >
            Como Funciona?
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="hover:text-[#BEAF87] transition-colors"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('concierge')} 
            className="hover:text-[#BEAF87] transition-colors"
          >
            Destaque
          </button>
          <button 
            onClick={() => scrollToSection('form-section')} 
            className="hover:text-[#BEAF87] transition-colors"
          >
            Seleção de Imóveis
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#252526] md:hidden">
            <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-white hover:text-[#BEAF87] transition-colors text-left"
              >
                Como Funciona?
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-white hover:text-[#BEAF87] transition-colors text-left"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('concierge')} 
                className="text-white hover:text-[#BEAF87] transition-colors text-left"
              >
                Destaque
              </button>
              <button 
                onClick={() => scrollToSection('form-section')} 
                className="text-white hover:text-[#BEAF87] transition-colors text-left"
              >
                Seleção de Imóveis
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
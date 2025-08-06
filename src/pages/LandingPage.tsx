import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import GlobalPresence from '../components/GlobalPresence';
import PropertyShowcase from '../components/PropertyShowcase';
import FormContainer from '../components/form/FormContainer';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import PopupForm from '../components/PopupForm';
import { neighborhoods } from '../config/neighborhoods';
import { submitContactForm } from '../utils/submitContactForm';

interface LandingPageProps {
  neighborhoodId: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ neighborhoodId }) => {
  const neighborhood = neighborhoods[neighborhoodId];
  const [showPopup, setShowPopup] = useState(false);
  const [isPopupSubmitting, setIsPopupSubmitting] = useState(false);

  if (!neighborhood) {
    return <Navigate to="/tambore11" replace />;
  }

  const triggerPopup = () => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem('popupShown');
    if (!popupShown) {
      setShowPopup(true);
      sessionStorage.setItem('popupShown', 'true');
    }
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePopupSubmit = async (data: { name: string; phone: string }) => {
    setIsPopupSubmitting(true);
    
    try {
      await submitContactForm({
        name: data.name,
        phone: data.phone,
        neighborhood: neighborhood.name
      });
      
      setShowPopup(false);
    } catch (error) {
      console.error('Error submitting popup form:', error);
      throw error;
    } finally {
      setIsPopupSubmitting(false);
    }
  };

  useEffect(() => {
    // Timer trigger - 15 seconds
    const timer = setTimeout(() => {
      triggerPopup();
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll trigger - 60% of page
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / documentHeight) * 100;
      
      if (scrollPercentage >= 60) {
        triggerPopup();
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Century 21 Alpha | Imóveis no {neighborhood.name}</title>
        <meta name="description" content={`Encontre imóveis ${neighborhood.name}. Agende seu Dia de Visitas exclusivo e conheça as melhores opções disponíveis.`} />
      </Helmet>
      <Header neighborhoodId={neighborhood.id} />
      <Hero 
        neighborhoodName={neighborhood.name}
        neighborhoodId={neighborhood.id}
        title={neighborhood.title}
        subtitle={neighborhood.subtitle}
        backgroundImage={neighborhood.heroImage}
        showcaseProperties={neighborhood.showcaseProperties}
        listingPageUrl={neighborhood.listingPageUrl || 'https://www.c21alpha.com.br/imoveis'}
      />
      <FormContainer 
        neighborhoodName={neighborhood.name}
      />
      <HowItWorks neighborhoodName={neighborhood.name} />
      <GlobalPresence heroImage={neighborhood.heroImage} />
      <Testimonials neighborhoodName={neighborhood.name} />
      <Footer 
        neighborhoodName={neighborhood.name}
        neighborhoodId={neighborhood.id}
      />
      <PopupForm
        isOpen={showPopup}
        onClose={handlePopupClose}
        onSubmit={handlePopupSubmit}
        neighborhoodName={neighborhood.name}
        isSubmitting={isPopupSubmitting}
      />
    </div>
  );
};

export default LandingPage;

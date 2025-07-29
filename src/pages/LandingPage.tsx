import React from 'react';
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
import { neighborhoods } from '../config/neighborhoods';

interface LandingPageProps {
  neighborhoodId: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ neighborhoodId }) => {
  const neighborhood = neighborhoods[neighborhoodId];

  if (!neighborhood) {
    return <Navigate to="/tambore11" replace />;
  }

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Century 21 Alpha | Imóveis no {neighborhood.name}</title>
        <meta name="description" content={`Encontre imóveis ${neighborhood.name}. Agende seu Dia de Visitas exclusivo e conheça as melhores opções disponíveis.`} />
      </Helmet>
      <Header />
      <Hero 
        neighborhoodName={neighborhood.name}
        backgroundImage={neighborhood.heroImage}
        showcaseProperties={neighborhood.showcaseProperties}
        listingPageUrl={neighborhood.listingPageUrl || 'https://www.c21alpha.com.br/imoveis'}
      />
      <HowItWorks neighborhoodName={neighborhood.name} />
      <GlobalPresence />
      <FormContainer 
        neighborhoodName={neighborhood.name}
        budgetRanges={neighborhood.budgetRanges}
      />
      <Testimonials neighborhoodName={neighborhood.name} />
      <Footer neighborhoodName={neighborhood.name} />
    </div>
  );
};

export default LandingPage;

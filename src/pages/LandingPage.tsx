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
        <title>Century 21 Alpha | Casas de Luxo em {neighborhood.name}</title>
        <meta name="description" content={`Encontre casas de alto padrão em ${neighborhood.name}. Agende seu Dia de Visitas exclusivo e conheça as melhores opções disponíveis.`} />
      </Helmet>
      <Header />
      <Hero 
        title={neighborhood.title}
        subtitle={neighborhood.subtitle}
        backgroundImage={neighborhood.heroImage}
      />
      <HowItWorks neighborhoodName={neighborhood.name} />
      <GlobalPresence />
      <PropertyShowcase 
        neighborhoodName={neighborhood.name}
        property={neighborhood.showcaseProperty}
      />
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

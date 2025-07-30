import React from 'react';
import { ClipboardCheck, Search, CalendarCheck } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface HowItWorksProps {
  neighborhoodName: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 bg-[#BEAF87]/10 p-5 rounded-full">
        <div className="text-[#BEAF87]">{icon}</div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#252526]">{title}</h3>
      <p className="text-[#727273] leading-relaxed max-w-xs">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC<HowItWorksProps> = ({ neighborhoodName }) => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-semibold text-center mb-4 text-[#252526]">Como Funciona</h2>
        <p className="text-center text-[#727273] mb-16 max-w-2xl mx-auto">
          Simplificamos o processo de encontrar seu imóvel ideal no {neighborhoodName}, oferecendo uma experiência personalizada e exclusiva.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Step 
            icon={<ClipboardCheck size={32} />}
            title="Passo 1 - Contato"
            description={`Conte-nos sobre suas preferências e necessidades para um imóvel no ${neighborhoodName}.`}
          />
          <Step 
            icon={<Search size={32} />}
            title="Passo 2 - Seleção"
            description="Nossa equipe selecionará cuidadosamente 3-5 propriedades que correspondam exatamente ao que você procura."
          />
          <Step 
            icon={<CalendarCheck size={32} />}
            title="Passo 3 - Visita"
            description="Agende seu Dia de Visitas exclusivo para conhecer cada propriedade com nosso especialista."
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
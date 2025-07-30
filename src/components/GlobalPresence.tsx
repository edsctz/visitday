import React from 'react';
import { Globe2, Users, Building2, Award } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const Stat: React.FC<StatProps> = ({ icon, number, label }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-4 text-[#BEAF87]">
        {icon}
      </div>
      <div className="text-3xl font-semibold mb-2 text-[#252526]">{number}</div>
      <p className="text-[#727273]">{label}</p>
    </div>
  );
};

interface GlobalPresenceProps {
  heroImage: string;
}

const GlobalPresence: React.FC<GlobalPresenceProps> = ({ heroImage }) => {
  return (
    <section id="about" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-[#252526]">
            Presença Global, Expertise em Alphaville
          </h2>
          <p className="text-[#727273] max-w-2xl mx-auto">
            Há mais de 50 anos, a Century 21 é sinônimo de excelência em imóveis de alto padrão ao redor do mundo. Nossa rede global nos permite oferecer um serviço incomparável com padrão internacional.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <Stat
            icon={<Globe2 size={32} />}
            number="86"
            label="Países"
          />
          <Stat
            icon={<Users size={32} />}
            number="150.000+"
            label="Corretores Especializados"
          />
          <Stat
            icon={<Building2 size={32} />}
            number="14.000+"
            label="Escritórios"
          />
          <Stat
            icon={<Award size={32} />}
            number="50+"
            label="Anos de Experiência"
          />
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#252526]">
                Padrão Internacional de Qualidade
              </h3>
              <p className="text-[#727273] mb-6">
                Como parte da maior rede imobiliária do mundo, a Century 21 Alpha traz para Alphaville as melhores práticas internacionais no mercado de luxo, combinadas com um profundo conhecimento do mercado local.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-[#727273]">
                  <span className="w-2 h-2 bg-[#BEAF87] rounded-full mr-3"></span>
                  Metodologia exclusiva de avaliação de imóveis
                </li>
                <li className="flex items-center text-[#727273]">
                  <span className="w-2 h-2 bg-[#BEAF87] rounded-full mr-3"></span>
                  Programa global de certificação de corretores
                </li>
                <li className="flex items-center text-[#727273]">
                  <span className="w-2 h-2 bg-[#BEAF87] rounded-full mr-3"></span>
                  Padrões rigorosos de qualidade e ética
                </li>
              </ul>
            </div>
            <div className="relative h-64 md:h-full min-h-[320px]">
              <img
                src={heroImage}
                alt="Vista do bairro"
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
import React from 'react';
import { Home, BedDouble, Bath, Maximize, TreePine } from 'lucide-react';

interface PropertyShowcaseProps {
  neighborhoodName: string;
  property: {
    image: string;
    title: string;
    subtitle: string;
    features: {
      bedrooms: number;
      bathrooms: number;
      area: number;
      hasGreenView: boolean;
    };
  };
}

const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ neighborhoodName, property }) => {
  return (
    <section id="concierge" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-[#252526]">
            Em Destaque em {neighborhoodName}
          </h2>
          <p className="text-[#727273] max-w-2xl mx-auto">
            Uma prévia do tipo de propriedade exclusiva que podemos apresentar durante seu Dia de Visitas personalizado.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-[400px] md:h-[600px]">
              <img
                src={property.image}
                alt={`Mansão em ${neighborhoodName}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between">
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#252526]">
                    {property.title}
                  </h3>
                  <p className="text-[#BEAF87] text-lg font-medium">
                    {property.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <BedDouble className="text-[#BEAF87]" size={24} />
                    <span className="text-[#727273]">{property.features.bedrooms} Suítes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Bath className="text-[#BEAF87]" size={24} />
                    <span className="text-[#727273]">{property.features.bathrooms} Banheiros</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Maximize className="text-[#BEAF87]" size={24} />
                    <span className="text-[#727273]">{property.features.area}m²</span>
                  </div>
                  {property.features.hasGreenView && (
                    <div className="flex items-center space-x-3">
                      <TreePine className="text-[#BEAF87]" size={24} />
                      <span className="text-[#727273]">Vista Verde</span>
                    </div>
                  )}
                </div>

                <p className="text-[#727273] mb-8 leading-relaxed">
                  Esta propriedade excepcional representa o padrão de qualidade que você encontrará em seu Dia de Visitas. Com acabamentos premium, vista permanente para área verde e localização privilegiada, é apenas uma das opções exclusivas que podemos apresentar com base em suas preferências.
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-[#252526] font-medium">
                  Esta é apenas uma amostra das propriedades disponíveis.
                </p>
                <button
                  onClick={() => {
                    const formSection = document.getElementById('form-section');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-[#BEAF87] hover:bg-[#746649] text-white font-medium py-3 px-6 rounded w-full transition-colors duration-300"
                >
                  Agende seu Dia de Visitas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
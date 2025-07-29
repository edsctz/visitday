import React from 'react';
import { BedDouble, Bath, Maximize, Car } from 'lucide-react';
import { ShowcaseProperty } from '../types';

interface PropertyCardProps {
  property: ShowcaseProperty;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-[#252526] mb-1 line-clamp-1">
          {property.title}
        </h3>
        <p className="text-[#BEAF87] text-sm font-medium mb-3 line-clamp-1">
          {property.subtitle}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center space-x-2">
            <BedDouble className="text-[#BEAF87] w-4 h-4" />
            <span className="text-[#727273] text-sm">{property.features.bedrooms} Quartos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Bath className="text-[#BEAF87] w-4 h-4" />
            <span className="text-[#727273] text-sm">{property.features.bathrooms} Banheiros</span>
          </div>
          <div className="flex items-center space-x-2">
            <Maximize className="text-[#BEAF87] w-4 h-4" />
            <span className="text-[#727273] text-sm">{property.features.area}m²</span>
          </div>
          <div className="flex items-center space-x-2">
            <Car className="text-[#BEAF87] w-4 h-4" />
            <span className="text-[#727273] text-sm">
              {property.features.vagas} {property.features.vagas === 1 ? 'Vaga' : 'Vagas'}
            </span>
          </div>
        </div>
        
        <a
          href={property.propertyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-[#BEAF87] hover:bg-[#746649] text-white text-center py-2 px-4 rounded font-medium transition-colors duration-300"
        >
          Veja Mais
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
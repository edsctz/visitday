import React, { useState } from 'react';
import { FormData } from './FormContainer';

interface PreferencesStepProps {
  preferences: FormData['preferences'];
  updatePreferences: (preferences: FormData['preferences']) => void;
  onNext: () => void;
  onPrev: () => void;
}

const architecturalStyles = [
  { id: 'contemporaneo', label: 'Contemporâneo' },
  { id: 'moderno', label: 'Moderno' },
  { id: 'neoclassico', label: 'Neoclássico' },
  { id: 'americano', label: 'Americano' },
  { id: 'minimalista', label: 'Minimalista' },
];

const PreferencesStep: React.FC<PreferencesStepProps> = ({ 
  preferences, 
  updatePreferences, 
  onNext, 
  onPrev 
}) => {
  const [localPreferences, setLocalPreferences] = useState(preferences);
  const [errors, setErrors] = useState({
    suites: false,
    area: false,
  });

  const handleStyleChange = (styleId: string) => {
    const currentStyles = [...localPreferences.architecturalStyle];
    
    if (currentStyles.includes(styleId)) {
      const updatedStyles = currentStyles.filter(id => id !== styleId);
      setLocalPreferences({
        ...localPreferences,
        architecturalStyle: updatedStyles
      });
    } else {
      setLocalPreferences({
        ...localPreferences,
        architecturalStyle: [...currentStyles, styleId]
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'suites') {
      const numValue = value ? parseInt(value) : null;
      setLocalPreferences({
        ...localPreferences,
        [name]: numValue
      });
      
      setErrors({
        ...errors,
        suites: numValue !== null && (numValue < 1 || numValue > 10)
      });
    } else {
      setLocalPreferences({
        ...localPreferences,
        [name]: value
      });
    }
  };

  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = parseInt(e.target.value);
    if (isMin && value < localPreferences.maxArea!) {
      setLocalPreferences(prev => ({ ...prev, minArea: value }));
    } else if (!isMin && value > localPreferences.minArea!) {
      setLocalPreferences(prev => ({ ...prev, maxArea: value }));
    }
  };

  const handleAreaMouseUp = () => {
    updatePreferences(localPreferences);
  };

  const getSliderBackground = () => {
    const minPercent = ((localPreferences.minArea! - 200) / 800) * 100;
    const maxPercent = ((localPreferences.maxArea! - 200) / 800) * 100;
    
    return {
      background: `linear-gradient(to right, 
        #E5E7EB 0%, #E5E7EB ${minPercent}%, 
        #BEAF87 ${minPercent}%, #BEAF87 ${maxPercent}%, 
        #E5E7EB ${maxPercent}%, #E5E7EB 100%)`
    };
  };

  const handleNext = () => {
    updatePreferences(localPreferences);
    onNext();
  };

  const handlePrev = () => {
    updatePreferences(localPreferences);
    onPrev();
  };

  const isValid = () => {
    return !errors.suites && !errors.area;
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#252526]">Suas Preferências</h3>
        <p className="text-[#727273]">
          Conte-nos mais sobre o que você busca em sua casa ideal.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-[#252526] font-medium mb-2">
            Estilo Arquitetônico
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {architecturalStyles.map(style => (
              <div key={style.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={style.id}
                  checked={localPreferences.architecturalStyle.includes(style.id)}
                  onChange={() => handleStyleChange(style.id)}
                  className="sr-only"
                />
                <label
                  htmlFor={style.id}
                  className={`
                    px-4 py-2 rounded-full border text-sm font-medium w-full text-center cursor-pointer transition-all
                    ${localPreferences.architecturalStyle.includes(style.id)
                      ? 'bg-[#BEAF87] border-[#BEAF87] text-white'
                      : 'bg-white border-gray-300 text-[#727273] hover:bg-gray-50'}
                  `}
                >
                  {style.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-[#252526] font-medium mb-2">
            Área Construída (m²)
          </label>
          <div className="relative pt-6 pb-6">
            <div className="relative">
              <input
                type="range"
                min={200}
                max={1000}
                value={localPreferences.minArea}
                step={10}
                onChange={(e) => handleAreaChange(e, true)}
                onMouseUp={handleAreaMouseUp}
                onTouchEnd={handleAreaMouseUp}
                className="absolute w-full -top-2 h-2 bg-transparent appearance-none pointer-events-none"
                style={{
                  zIndex: 3,
                  '--range-color': '#BEAF87'
                } as React.CSSProperties}
              />
              <input
                type="range"
                min={200}
                max={1000}
                value={localPreferences.maxArea}
                step={10}
                onChange={(e) => handleAreaChange(e, false)}
                onMouseUp={handleAreaMouseUp}
                onTouchEnd={handleAreaMouseUp}
                className="absolute w-full -top-2 h-2 bg-transparent appearance-none pointer-events-none"
                style={{
                  zIndex: 4,
                  '--range-color': '#BEAF87'
                } as React.CSSProperties}
              />
              <div
                className="absolute w-full h-2 rounded-lg top-0"
                style={getSliderBackground()}
              ></div>
            </div>
            <div className="flex justify-between mt-8">
              <div className="text-[#252526] font-medium">
                {localPreferences.minArea} m²
              </div>
              <div className="text-[#252526] font-medium">
                {localPreferences.maxArea} m²
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="floors" className="block text-[#252526] font-medium mb-2">
              Pisos
            </label>
            <select
              id="floors"
              name="floors"
              value={localPreferences.floors || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent"
            >
              <option value="">Indiferente</option>
              <option value="1">1 Piso (Térrea)</option>
              <option value="2">2 Pisos</option>
              <option value="3">3 ou mais Pisos</option>
            </select>
          </div>

          <div>
            <label htmlFor="suites" className="block text-[#252526] font-medium mb-2">
              Número de Suítes
            </label>
            <input
              type="number"
              id="suites"
              name="suites"
              min="1"
              max="10"
              value={localPreferences.suites || ''}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
                errors.suites ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.suites && (
              <p className="mt-1 text-red-500 text-sm">Por favor, insira entre 1 e 10 suítes.</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="additionalRequests" className="block text-[#252526] font-medium mb-2">
            Solicitações Adicionais (opcional)
          </label>
          <textarea
            id="additionalRequests"
            name="additionalRequests"
            rows={3}
            value={localPreferences.additionalRequests}
            onChange={handleInputChange}
            placeholder="Existe algum requisito específico que você gostaria de nos informar?"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent"
          ></textarea>
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={handlePrev}
          className="border border-[#BEAF87] text-[#BEAF87] hover:bg-[#BEAF87]/10 font-medium py-3 px-6 rounded transition-colors duration-300"
        >
          Voltar
        </button>
        <button
          onClick={handleNext}
          disabled={!isValid()}
          className={`bg-[#BEAF87] hover:bg-[#746649] text-white font-medium py-3 px-6 rounded transition-colors duration-300 ${
            !isValid() ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Próximo Passo
        </button>
      </div>
    </div>
  );
};

export default PreferencesStep;
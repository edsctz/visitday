import React, { useState, useEffect } from 'react';
import { FormData } from './FormContainer';

interface PreferencesStepProps {
  preferences: FormData['preferences'];
  updatePreferences: (preferences: FormData['preferences']) => void;
  onNext: () => void;
  onPrev: () => void;
}

const PreferencesStep: React.FC<PreferencesStepProps> = ({ 
  preferences, 
  updatePreferences, 
  onNext, 
  onPrev 
}) => {
  const [localPreferences, setLocalPreferences] = useState(preferences);
  const [errors, setErrors] = useState({
    quartos: false,
    minArea: false,
    maxArea: false,
    requiredFields: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  // Update local preferences when props change
  useEffect(() => {
    setLocalPreferences(preferences);
  }, [preferences]);

  // Validate form whenever localPreferences changes
  useEffect(() => {
    validateForm();
  }, [localPreferences]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'quartos') {
      const numValue = value ? parseInt(value) : null;
      setLocalPreferences(prev => ({
        ...prev,
        [name]: numValue
      }));
      
      setErrors(prev => ({
        ...prev,
        quartos: numValue !== null && (numValue < 1 || numValue > 10)
      }));
    } else if (name === 'minArea' || name === 'maxArea') {
      const numValue = value ? parseInt(value) : 0;
      setLocalPreferences(prev => ({
        ...prev,
        [name]: numValue
      }));
      
      // Validate min/max area
      if (name === 'minArea') {
        setErrors(prev => ({
          ...prev,
          minArea: numValue <= 0 || (localPreferences.maxArea > 0 && numValue >= localPreferences.maxArea)
        }));
      } else if (name === 'maxArea') {
        setErrors(prev => ({
          ...prev,
          maxArea: numValue <= 0 || numValue <= localPreferences.minArea
        }));
      }
    } else {
      setLocalPreferences(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleBlur = () => {
    updatePreferences(localPreferences);
  };

  const handleNext = () => {
    updatePreferences(localPreferences);
    onNext();
  };

  const handlePrev = () => {
    updatePreferences(localPreferences);
    onPrev();
  };

  const validateForm = () => {
    // Check if required fields are filled
    const requiredFieldsError = !localPreferences.minArea || !localPreferences.maxArea || !localPreferences.quartos;
    
    // Check for field-specific errors
    const quartosError = localPreferences.quartos !== null && (localPreferences.quartos < 1 || localPreferences.quartos > 10);
    const minAreaError = localPreferences.minArea <= 0 || (localPreferences.maxArea > 0 && localPreferences.minArea >= localPreferences.maxArea);
    const maxAreaError = localPreferences.maxArea <= 0 || (localPreferences.minArea > 0 && localPreferences.maxArea <= localPreferences.minArea);
    
    // Update all errors at once
    setErrors({
      quartos: quartosError,
      minArea: minAreaError,
      maxArea: maxAreaError,
      requiredFields: requiredFieldsError
    });
    
    // Update form validity
    setIsFormValid(!quartosError && !minAreaError && !maxAreaError && !requiredFieldsError);
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="minArea" className="block text-[#252526] font-medium mb-2">
              Área Mínima (m²) *
            </label>
            <input
              type="number"
              id="minArea"
              name="minArea"
              min="1"
              value={localPreferences.minArea || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Ex: 200"
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
                errors.minArea ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.minArea && (
              <p className="mt-1 text-red-500 text-sm">
                Por favor, insira uma área mínima válida menor que a área máxima.
              </p>
            )}
          </div>

          <div>
            <label htmlFor="maxArea" className="block text-[#252526] font-medium mb-2">
              Área Máxima (m²) *
            </label>
            <input
              type="number"
              id="maxArea"
              name="maxArea"
              min="1"
              value={localPreferences.maxArea || ''}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Ex: 500"
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
                errors.maxArea ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.maxArea && (
              <p className="mt-1 text-red-500 text-sm">
                Por favor, insira uma área máxima válida maior que a área mínima.
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="furnished" className="block text-[#252526] font-medium mb-2">
              Mobiliado?
            </label>
            <select
              id="furnished"
              name="furnished"
              value={localPreferences.furnished || ''}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent"
            >
              <option value="">Indiferente</option>
              <option value="sim">Sim</option>
              <option value="nao">Não</option>
            </select>
          </div>

          <div>
            <label htmlFor="quartos" className="block text-[#252526] font-medium mb-2">
              Número de Quartos *
            </label>
            <input
              type="number"
              id="quartos"
              name="quartos"
              min="1"
              max="10"
              required
              value={localPreferences.quartos || ''}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
                errors.quartos ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.quartos && (
              <p className="mt-1 text-red-500 text-sm">Por favor, insira entre 1 e 10 quartos.</p>
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

      {errors.requiredFields && (
        <p className="mt-1 text-red-500 text-sm">Por favor, preencha todos os campos obrigatórios marcados com *.</p>
      )}
      
      <div className="flex justify-between pt-6">
        <button
          onClick={handlePrev}
          className="border border-[#BEAF87] text-[#BEAF87] hover:bg-[#BEAF87]/10 font-medium py-3 px-6 rounded transition-colors duration-300"
        >
          Voltar
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormValid}
          className={`bg-[#BEAF87] hover:bg-[#746649] text-white font-medium py-3 px-6 rounded transition-colors duration-300 ${
            !isFormValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Próximo Passo
        </button>
      </div>
    </div>
  );
};

export default PreferencesStep;

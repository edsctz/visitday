import React, { useState } from 'react';
import { X, Star, Shield } from 'lucide-react';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { name: string; phone: string }) => Promise<void>;
  neighborhoodName: string;
  isSubmitting: boolean;
}

const PopupForm: React.FC<PopupFormProps> = ({ 
  isOpen, 
  onClose, 
  onSubmit, 
  neighborhoodName,
  isSubmitting 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false
  });

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let isValid = true;
    
    if (name === 'name') {
      isValid = value.trim().length >= 2;
    } else if (name === 'phone') {
      const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
      isValid = phoneRegex.test(value);
    }
    
    setErrors(prev => ({
      ...prev,
      [name]: !isValid && value.length > 0
    }));
  };

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    
    const phoneNumber = value.replace(/\D/g, '');
    
    if (phoneNumber.length <= 10) {
      return phoneNumber.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
    } else {
      return phoneNumber.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setFormData(prev => ({
      ...prev,
      phone: formattedPhoneNumber
    }));
    
    validateField('phone', formattedPhoneNumber);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameValid = formData.name.trim().length >= 2;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const phoneValid = phoneRegex.test(formData.phone);
    
    const newErrors = {
      name: !nameValid,
      phone: !phoneValid
    };
    
    setErrors(newErrors);
    
    if (nameValid && phoneValid) {
      try {
        await onSubmit(formData);
        onClose();
      } catch (error) {
        console.error('Error submitting popup form:', error);
      }
    }
  };

  const isValid = () => {
    return (
      formData.name.trim().length >= 2 &&
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(formData.phone) &&
      !errors.name && !errors.phone
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all"
          aria-label="Fechar popup"
        >
          <X size={24} />
        </button>

        {/* Badge */}
        <div className="bg-gradient-to-r from-[#BEAF87] to-[#746649] text-white text-center py-3 px-6 rounded-t-2xl">
          <div className="flex items-center justify-center gap-2">
            <Star size={16} />
            <span className="text-sm font-semibold">Atendimento Exclusivo Century 21 Alpha</span>
          </div>
        </div>

        <div className="p-6">
          {/* Main Title */}
          <h2 className="text-2xl font-bold text-[#252526] text-center mb-3">
            Cansado de buscar? Acesse imóveis exclusivos no {neighborhoodName} antes de todos!
          </h2>

          {/* Subtitle */}
          <p className="text-[#727273] text-center mb-6 leading-relaxed">
            Receba uma curadoria personalizada de imóveis que se encaixam perfeitamente no seu perfil. Economize tempo e encontre o lar dos seus sonhos com rapidez e eficiência.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label htmlFor="popup-name" className="block text-[#252526] font-medium mb-2">
                Seu Nome
              </label>
              <input
                type="text"
                id="popup-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Digite seu nome"
                autoComplete="name"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent transition-all ${
                  errors.name ? 'border-red-500' : 'border-gray-200 hover:border-[#BEAF87]/50'
                }`}
                required
              />
              {errors.name && (
                <p className="mt-1 text-red-500 text-sm">Por favor, insira seu nome.</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="popup-phone" className="block text-[#252526] font-medium mb-2">
                Seu WhatsApp
              </label>
              <input
                type="tel"
                id="popup-phone"
                name="phone"
                value={formData.phone}
                onChange={handlePhoneChange}
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent transition-all ${
                  errors.phone ? 'border-red-500' : 'border-gray-200 hover:border-[#BEAF87]/50'
                }`}
                required
              />
              {errors.phone && (
                <p className="mt-1 text-red-500 text-sm">Por favor, insira um WhatsApp válido no formato (XX) XXXXX-XXXX.</p>
              )}
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              disabled={!isValid() || isSubmitting}
              className={`w-full bg-gradient-to-r from-[#BEAF87] to-[#746649] hover:from-[#746649] hover:to-[#BEAF87] text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                (!isValid() || isSubmitting) ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando...
                </div>
              ) : (
                'Receber minha seleção personalizada'
              )}
            </button>

            {/* Trust Seal */}
            <div className="flex items-center justify-center gap-2 text-sm text-[#727273] mt-3">
              <Shield size={16} className="text-[#BEAF87]" />
              <span>Privacidade total. Só sugerimos imóveis no seu perfil.</span>
            </div>
          </form>

          {/* Testimonial */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-[#BEAF87] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-semibold text-sm">M</span>
              </div>
              <div>
                <p className="text-sm text-[#727273] italic leading-relaxed">
                  "Recebi só imóveis que combinavam comigo, atendimento ágil e sem enrolação."
                </p>
                <p className="text-xs text-[#727273] mt-1 font-medium">
                  Marcela T. - Cliente Century 21 Alpha
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
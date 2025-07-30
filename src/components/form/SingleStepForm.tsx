import React, { useState } from 'react';
import { Star, Shield, Clock, Eye } from 'lucide-react';

interface SingleStepFormProps {
  neighborhoodName: string;
  onSubmit: (contact: { name: string; phone: string }) => void;
  isSubmitting: boolean;
}

const SingleStepForm: React.FC<SingleStepFormProps> = ({ 
  neighborhoodName, 
  onSubmit, 
  isSubmitting 
}) => {
  const [contact, setContact] = useState({
    name: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContact(prev => ({
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
    setContact(prev => ({
      ...prev,
      phone: formattedPhoneNumber
    }));
    
    validateField('phone', formattedPhoneNumber);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const nameValid = contact.name.trim().length >= 2;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const phoneValid = phoneRegex.test(contact.phone);
    
    const newErrors = {
      name: !nameValid,
      phone: !phoneValid,
    };
    
    setErrors(newErrors);
    
    if (nameValid && phoneValid) {
      onSubmit(contact);
    }
  };

  const isValid = () => {
    return (
      contact.name.trim().length >= 2 &&
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(contact.phone) &&
      !errors.name && !errors.phone
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-luxury overflow-hidden">
      {/* Value Proposition Header */}
      <div className="bg-gradient-to-r from-[#BEAF87] to-[#746649] text-white p-8 text-center">
        <div className="flex justify-center mb-4">
          <Star className="w-12 h-12" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">
          Receba uma Seleção Exclusiva de Imóveis no {neighborhoodName}
        </h2>
        <p className="text-lg opacity-95 max-w-2xl mx-auto">
          Economize tempo e encontre seu lar ideal com acesso a propriedades que você não verá em portais públicos. Conforto e segurança na sua busca.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="px-8 py-6 bg-[#F9F9F9] border-b">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-3">
            <div className="bg-[#BEAF87]/10 p-3 rounded-full">
              <Clock className="w-6 h-6 text-[#BEAF87]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#252526]">Economize Tempo</h4>
              <p className="text-sm text-[#727273]">Apenas imóveis que combinam com você</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-[#BEAF87]/10 p-3 rounded-full">
              <Eye className="w-6 h-6 text-[#BEAF87]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#252526]">Acesso Exclusivo</h4>
              <p className="text-sm text-[#727273]">Imóveis não listados publicamente</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-[#BEAF87]/10 p-3 rounded-full">
              <Shield className="w-6 h-6 text-[#BEAF87]" />
            </div>
            <div>
              <h4 className="font-semibold text-[#252526]">Segurança Total</h4>
              <p className="text-sm text-[#727273]">Processo confiável e transparente</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="p-8">
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-[#252526] font-semibold mb-2 text-lg">
              Seu Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={contact.name}
              onChange={handleInputChange}
              placeholder="Digite seu nome completo"
              className={`w-full px-4 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent transition-all ${
                errors.name ? 'border-red-500' : 'border-gray-200 hover:border-[#BEAF87]/50'
              }`}
              required
            />
            {errors.name && (
              <p className="mt-2 text-red-500 text-sm">Por favor, insira seu nome.</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-[#252526] font-semibold mb-2 text-lg">
              Seu WhatsApp
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={contact.phone}
              onChange={handlePhoneChange}
              placeholder="(11) 99999-9999"
              className={`w-full px-4 py-4 text-lg border-2 rounded-lg focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-200 hover:border-[#BEAF87]/50'
              }`}
              required
            />
            {errors.phone && (
              <p className="mt-2 text-red-500 text-sm">Por favor, insira um WhatsApp válido no formato (XX) XXXXX-XXXX.</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={!isValid() || isSubmitting}
          className={`w-full mt-8 bg-gradient-to-r from-[#BEAF87] to-[#746649] hover:from-[#746649] hover:to-[#BEAF87] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
            (!isValid() || isSubmitting) ? 'opacity-50 cursor-not-allowed transform-none hover:scale-100' : ''
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando sua solicitação...
            </div>
          ) : (
            <>
              🏠 Receber Seleção Exclusiva Agora
            </>
          )}
        </button>

        <p className="text-center text-sm text-[#727273] mt-4">
          ✅ Sem compromisso • ✅ Totalmente gratuito • ✅ Resposta em até 2 horas
        </p>
      </form>
    </div>
  );
};

export default SingleStepForm;
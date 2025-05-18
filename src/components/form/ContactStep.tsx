import React, { useState, useEffect } from 'react';
import { FormData } from './FormContainer';

interface ContactStepProps {
  contact: FormData['contact'];
  updateContact: (contact: FormData['contact']) => void;
  onPrev: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
}

const ContactStep: React.FC<ContactStepProps> = ({ 
  contact, 
  updateContact, 
  onPrev, 
  onSubmit,
  isSubmitting
}) => {
  const [localContact, setLocalContact] = useState(contact);
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
  });
  
  // Update local state when props change
  useEffect(() => {
    setLocalContact(contact);
  }, [contact]);
  
  // Update parent component state when local state changes
  useEffect(() => {
    // Only update if the data is valid to avoid premature updates
    if (localContact.name.trim().length >= 3 && 
        /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(localContact.phone)) {
      updateContact(localContact);
    }
  }, [localContact, updateContact]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalContact({
      ...localContact,
      [name]: value
    });
    
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let isValid = true;
    
    if (name === 'name') {
      isValid = value.trim().length >= 3;
    } else if (name === 'phone') {
      // Simple validation for Brazilian phone numbers
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
    
    // Remove all non-digits
    const phoneNumber = value.replace(/\D/g, '');
    
    // Format the phone number as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
    if (phoneNumber.length <= 10) {
      return phoneNumber.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').trim();
    } else {
      return phoneNumber.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setLocalContact({
      ...localContact,
      phone: formattedPhoneNumber
    });
    
    validateField('phone', formattedPhoneNumber);
  };

  const handleSubmitForm = () => {
    // Final validation before submitting
    const nameValid = localContact.name.trim().length >= 3;
    const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    const phoneValid = phoneRegex.test(localContact.phone);
    
    const newErrors = {
      name: !nameValid,
      phone: !phoneValid,
    };
    
    setErrors(newErrors);
    
    if (nameValid && phoneValid) {
      // Make sure to update the parent component's state with the latest contact data
      updateContact(localContact);
      
      // Add a small delay to ensure state is updated before submission
      setTimeout(() => {
        onSubmit();
      }, 100);
    }
  };

  const isValid = () => {
    return (
      localContact.name.trim().length >= 3 &&
      /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(localContact.phone) &&
      !errors.name && !errors.phone
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#252526]">Seus Dados de Contato</h3>
        <p className="text-[#727273]">
          Preencha seus dados para que possamos entrar em contato sobre seu Dia de Visitas exclusivo.
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-[#252526] font-medium mb-2">
            Nome
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={localContact.name}
            onChange={handleInputChange}
            placeholder="Seu nome"
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-red-500 text-sm">Por favor, insira seu nome.</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-[#252526] font-medium mb-2">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={localContact.phone}
            onChange={handlePhoneChange}
            placeholder="(XX) XXXXX-XXXX"
            className={`w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-[#BEAF87] focus:border-transparent ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="mt-1 text-red-500 text-sm">Por favor, insira um telefone válido no formato (XX) XXXXX-XXXX.</p>
          )}
        </div>
      </div>

      <div className="flex justify-between pt-6">
        <button
          onClick={onPrev}
          className="border border-[#BEAF87] text-[#BEAF87] hover:bg-[#BEAF87]/10 font-medium py-3 px-6 rounded transition-colors duration-300"
        >
          Voltar
        </button>
        <button
          onClick={handleSubmitForm}
          disabled={!isValid() || isSubmitting}
          className={`bg-[#BEAF87] hover:bg-[#746649] text-white font-medium py-3 px-6 rounded transition-colors duration-300 ${
            (!isValid() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enviando...
            </div>
          ) : (
            'Receber Lista de Imóveis'
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactStep;

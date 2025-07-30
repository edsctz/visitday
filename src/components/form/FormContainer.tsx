import React, { useState, useRef, useEffect } from 'react';
import SingleStepForm from './SingleStepForm';

interface FormContainerProps {
  neighborhoodName: string;
}

const FormContainer: React.FC<FormContainerProps> = ({ neighborhoodName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formSectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (contact: { name: string; phone: string }) => {
    setIsSubmitting(true);
    
    try {
      if (!contact.name || !contact.phone) {
        console.error('Contact information is missing:', contact);
        throw new Error('Contact information is required');
      }

      const response = await fetch('https://workflowwebhook.prospectz.com.br/webhook/c21-diavisitasintake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: contact.name,
          phone: contact.phone,
          neighborhood: neighborhoodName,
          submittedAt: new Date().toISOString()
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // Push form submission event to GTM
      window.dataLayer?.push({
        event: 'formSubmission',
        formType: 'diaVisitas',
        neighborhood: neighborhoodName,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-section" ref={formSectionRef} className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          {!isSuccess ? (
            <SingleStepForm 
              neighborhoodName={neighborhoodName}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-luxury p-12 text-center">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-[#252526]">🎉 Solicitação Enviada com Sucesso!</h2>
              <p className="text-lg text-[#727273] mb-8 max-w-2xl mx-auto">
                Recebemos sua solicitação! Nossa equipe de especialistas entrará em contato em até <strong>2 horas</strong> para apresentar uma seleção exclusiva de imóveis no {neighborhoodName}.
              </p>
              <div className="bg-[#BEAF87]/10 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold text-[#252526] mb-3">O que acontece agora?</h3>
                <div className="space-y-2 text-[#727273]">
                  <p>✅ Análise do seu perfil por nossos especialistas</p>
                  <p>✅ Seleção de 3-5 imóveis exclusivos para você</p>
                  <p>✅ Contato via WhatsApp com sua seleção personalizada</p>
                </div>
              </div>
              <p className="text-lg font-semibold text-[#BEAF87]">
                🏠 Você está mais perto de encontrar seu lar ideal no {neighborhoodName}!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormContainer;

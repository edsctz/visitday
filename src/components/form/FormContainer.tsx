import React, { useState } from 'react';
import BudgetStep from './BudgetStep';
import PreferencesStep from './PreferencesStep';
import ContactStep from './ContactStep';
import ProgressIndicator from './ProgressIndicator';
import { FormPreferences } from '../../types';

export interface FormData {
  budget: {
    type: 'venda' | 'locacao';
    min: number;
    max: number;
  };
  preferences: FormPreferences;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
}

const initialFormData: FormData = {
  budget: {
    type: 'venda',
    min: 2000000,
    max: 5000000
  },
  preferences: {
    architecturalStyle: [],
    floors: null,
    minArea: 400,
    maxArea: 600,
    suites: null,
    additionalRequests: '',
  },
  contact: {
    name: '',
    email: '',
    phone: '',
  }
};

interface FormContainerProps {
  neighborhoodName: string;
  budgetRanges: {
    venda: {
      min: number;
      max: number;
      step: number;
    };
    locacao: {
      min: number;
      max: number;
      step: number;
    };
  };
}

const FormContainer: React.FC<FormContainerProps> = ({ neighborhoodName, budgetRanges }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateBudget = (budget: FormData['budget']) => {
    setFormData(prev => ({
      ...prev,
      budget
    }));
  };

  const updatePreferences = (preferences: FormData['preferences']) => {
    setFormData(prev => ({
      ...prev,
      preferences
    }));
  };

  const updateContact = (contact: FormData['contact']) => {
    setFormData(prev => ({
      ...prev,
      contact
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://workflowwebhook.prospectz.com.br/webhook/c21-diavisitasintake', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          budget: formData.budget,
          preferences: formData.preferences,
          contact: formData.contact,
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
        propertyType: formData.budget.type,
        budgetRange: `${formData.budget.min}-${formData.budget.max}`,
      });

      setIsSuccess(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="form-section" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-4 text-[#252526]">
            {isSuccess ? 'Solicitação Enviada com Sucesso!' : 'Agende seu Dia de Visitas'}
          </h2>
          <p className="text-center text-[#727273] mb-12 max-w-2xl mx-auto">
            {isSuccess 
              ? `Nossa equipe entrará em contato em breve para confirmar os detalhes do seu Dia de Visitas exclusivo em ${neighborhoodName}.` 
              : `Conte-nos sobre suas preferências para encontrarmos as propriedades perfeitas para você em ${neighborhoodName}.`}
          </p>
          
          {!isSuccess ? (
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ProgressIndicator currentStep={currentStep} totalSteps={3} />
              
              <div className="p-8">
                {currentStep === 1 && (
                  <BudgetStep 
                    budget={formData.budget}
                    updateBudget={updateBudget}
                    onNext={handleNextStep}
                  />
                )}
                
                {currentStep === 2 && (
                  <PreferencesStep 
                    preferences={formData.preferences}
                    updatePreferences={updatePreferences}
                    onNext={handleNextStep}
                    onPrev={handlePrevStep}
                  />
                )}
                
                {currentStep === 3 && (
                  <ContactStep 
                    contact={formData.contact}
                    updateContact={updateContact}
                    onPrev={handlePrevStep}
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#252526]">Agradecemos seu Interesse</h3>
              <p className="text-[#727273] mb-6">
                Recebemos suas preferências e entraremos em contato em até 24 horas para agendar seu Dia de Visitas em {neighborhoodName}.
              </p>
              <p className="font-medium text-[#BEAF87]">
                Você está mais perto de encontrar sua casa ideal.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FormContainer;
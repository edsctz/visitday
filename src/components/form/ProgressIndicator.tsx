import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  currentStep, 
  totalSteps 
}) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);
  const stepLabels = ['Orçamento', 'Preferências', 'Contato'];
  
  return (
    <div className="bg-[#F9F9F9] border-b border-gray-200">
      <div className="flex justify-between items-center px-8 py-4">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div 
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full font-medium text-sm mb-2
                  ${step < currentStep 
                    ? 'bg-[#BEAF87] text-white' 
                    : step === currentStep 
                      ? 'bg-[#BEAF87] text-white'
                      : 'bg-gray-200 text-[#727273]'
                  }
                `}
              >
                {step < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span 
                className={`text-xs font-medium ${
                  step <= currentStep ? 'text-[#252526]' : 'text-[#727273]'
                }`}
              >
                {stepLabels[index]}
              </span>
            </div>
            
            {index < totalSteps - 1 && (
              <div 
                className={`flex-1 h-0.5 mx-2 ${
                  step < currentStep ? 'bg-[#BEAF87]' : 'bg-gray-200'
                }`}
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
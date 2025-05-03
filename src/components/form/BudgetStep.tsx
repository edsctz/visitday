import React, { useState, useEffect } from 'react';

interface BudgetStepProps {
  budget: {
    type: 'venda' | 'locacao';
    min: number;
    max: number;
  };
  updateBudget: (value: { type: 'venda' | 'locacao'; min: number; max: number; }) => void;
  onNext: () => void;
}

const BudgetStep: React.FC<BudgetStepProps> = ({ budget, updateBudget, onNext }) => {
  const [localBudget, setLocalBudget] = useState(budget);
  const minPossibleBudget = localBudget.type === 'venda' ? 2000000 : 10000;
  const maxPossibleBudget = localBudget.type === 'venda' ? 15000000 : 50000;

  useEffect(() => {
    setLocalBudget(budget);
  }, [budget]);

  const handleTypeChange = (type: 'venda' | 'locacao') => {
    const newBudget = {
      type,
      min: type === 'venda' ? 2000000 : 10000,
      max: type === 'venda' ? 5000000 : 20000
    };
    setLocalBudget(newBudget);
    updateBudget(newBudget);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = parseInt(e.target.value);
    if (isMin && value < localBudget.max) {
      setLocalBudget(prev => ({ ...prev, min: value }));
    } else if (!isMin && value > localBudget.min) {
      setLocalBudget(prev => ({ ...prev, max: value }));
    }
  };

  const handleMouseUp = () => {
    updateBudget(localBudget);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const getSliderBackground = () => {
    const minPercent = ((localBudget.min - minPossibleBudget) / (maxPossibleBudget - minPossibleBudget)) * 100;
    const maxPercent = ((localBudget.max - minPossibleBudget) / (maxPossibleBudget - minPossibleBudget)) * 100;
    
    return {
      background: `linear-gradient(to right, 
        #E5E7EB 0%, #E5E7EB ${minPercent}%, 
        #BEAF87 ${minPercent}%, #BEAF87 ${maxPercent}%, 
        #E5E7EB ${maxPercent}%, #E5E7EB 100%)`
    };
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-2 text-[#252526]">Qual é o seu interesse?</h3>
        <p className="text-[#727273]">
          Defina se você está procurando para comprar ou alugar, e qual a faixa de investimento.
        </p>
      </div>

      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => handleTypeChange('venda')}
          className={`flex-1 py-3 px-6 rounded-full font-medium transition-colors ${
            localBudget.type === 'venda'
              ? 'bg-[#BEAF87] text-white'
              : 'bg-white border border-[#BEAF87] text-[#BEAF87] hover:bg-[#BEAF87]/10'
          }`}
        >
          Comprar
        </button>
        <button
          onClick={() => handleTypeChange('locacao')}
          className={`flex-1 py-3 px-6 rounded-full font-medium transition-colors ${
            localBudget.type === 'locacao'
              ? 'bg-[#BEAF87] text-white'
              : 'bg-white border border-[#BEAF87] text-[#BEAF87] hover:bg-[#BEAF87]/10'
          }`}
        >
          Alugar
        </button>
      </div>

      <div className="space-y-6 py-4">
        <div>
          <label className="block text-[#252526] font-medium mb-2">
            Faixa de {localBudget.type === 'venda' ? 'Investimento' : 'Aluguel'}
          </label>
          <div className="relative pt-6 pb-6">
            <div className="relative">
              <input
                type="range"
                min={minPossibleBudget}
                max={maxPossibleBudget}
                value={localBudget.min}
                step={localBudget.type === 'venda' ? 100000 : 1000}
                onChange={(e) => handleRangeChange(e, true)}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleMouseUp}
                className="absolute w-full -top-2 h-2 bg-transparent appearance-none pointer-events-none"
                style={{
                  zIndex: 3,
                  '--range-color': '#BEAF87'
                } as React.CSSProperties}
              />
              <input
                type="range"
                min={minPossibleBudget}
                max={maxPossibleBudget}
                value={localBudget.max}
                step={localBudget.type === 'venda' ? 100000 : 1000}
                onChange={(e) => handleRangeChange(e, false)}
                onMouseUp={handleMouseUp}
                onTouchEnd={handleMouseUp}
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
                {formatCurrency(localBudget.min)}
              </div>
              <div className="text-[#252526] font-medium">
                {formatCurrency(localBudget.max)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end pt-6">
        <button
          onClick={onNext}
          className="bg-[#BEAF87] hover:bg-[#746649] text-white font-medium py-3 px-6 rounded transition-colors duration-300"
        >
          Próximo Passo
        </button>
      </div>
    </div>
  );
};

export default BudgetStep;
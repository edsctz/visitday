import React from 'react';
import { X, Tv, Gift, Clock, Award } from 'lucide-react';

interface PromotionModalProps {
  isOpen: boolean;
  onClose: () => void;
  neighborhoodName: string;
}

const PromotionModal: React.FC<PromotionModalProps> = ({ 
  isOpen, 
  onClose, 
  neighborhoodName 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-all"
          aria-label="Fechar modal"
        >
          <X size={20} />
        </button>

        {/* Header with Gradient */}
        <div className="bg-gradient-to-r from-[#BEAF87] to-[#746649] text-white text-center py-6 px-6 rounded-t-2xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gift className="w-8 h-8" />
            <h2 className="text-lg sm:text-2xl font-bold whitespace-nowrap">Promoção Comprou-Ganhou</h2>
          </div>
          <p className="text-lg opacity-95">
            Compre um Imóvel no <span className="font-semibold">{neighborhoodName}</span> e Ganhe uma TV
          </p>
        </div>

        <div className="p-6">
          {/* Promotional Image */}
          <div className="w-full max-w-[300px] h-[300px] mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://novos.c21alpha.com.br/images/squaredesign/compre-ganhe/COMPROU-GANHOU.png"
              alt="Promoção Comprou-Ganhou - Ganhe uma SmartTV HD"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback em caso de erro no carregamento da imagem
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            {/* Fallback placeholder (hidden by default) */}
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300" style={{ display: 'none' }}>
              <div className="text-center">
                <Tv className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500 text-sm font-medium">SmartTV HD</p>
                <p className="text-gray-400 text-xs">Imagem promocional</p>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h3 className="text-xl font-bold text-[#252526] text-center mb-4">
            🎁 Ganhe uma SmartTV HD
          </h3>

          {/* Benefits List */}
          <div className="space-y-4 mb-6">
            {/* Benefit 1 */}
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#BEAF87]/10 to-[#746649]/10 rounded-lg">
              <div className="w-8 h-8 bg-[#BEAF87] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Tv className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#252526] mb-1">SmartTV HD</h4>
                <p className="text-sm text-[#727273] leading-relaxed">
                  Exclusivo para clientes da Century 21 Alpha
                </p>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#BEAF87]/10 to-[#746649]/10 rounded-lg">
              <div className="w-8 h-8 bg-[#BEAF87] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Award className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#252526] mb-1">Assessoria Completa</h4>
                <p className="text-sm text-[#727273] leading-relaxed">
                  Acompanhamento personalizado da Century 21 Alpha durante todo o processo de compra e financiamento
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#BEAF87]/10 to-[#746649]/10 rounded-lg">
              <div className="w-8 h-8 bg-[#BEAF87] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-[#252526] mb-1">Brinde Surpresa</h4>
                <p className="text-sm text-[#727273] leading-relaxed">
                  Kit surpresa para os primeiros 10 compradores
                </p>
              </div>
            </div>
          </div>

          {/* Urgency Section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-red-700 mb-1">⏰ Oferta por Tempo Limitado</h4>
                <p className="text-sm text-red-600 leading-relaxed">
                  Apenas até o final deste mês ou enquanto durarem as unidades reservadas. 
                  <span className="font-semibold"> Não perca esta oportunidade única!</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-[#BEAF87] to-[#746649] hover:from-[#746649] hover:to-[#BEAF87] text-white font-bold py-4 px-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Quero Aproveitar Esta Promoção! 🎉
          </button>

          {/* Fine Print */}
          <p className="text-xs text-[#727273] text-center mt-4 leading-relaxed">
            * Promoção válida para compras realizadas através da Century 21 Alpha. 
            Consulte regulamento completo com nossos consultores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromotionModal;

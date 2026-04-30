import { motion } from 'motion/react';
import { ProgressBar } from './ProgressBar';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/Button';

interface QuizResultsIntermediateProps {
  onNext: () => void;
  currentStep: number;
  totalSteps: number;
}

export function QuizResultsIntermediate({
  onNext,
  currentStep,
  totalSteps,
}: QuizResultsIntermediateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-md mx-auto bg-white rounded-[24px] shadow-xl relative p-6 sm:p-8 min-h-[580px] flex flex-col items-center"
    >
      {/* Upper Progress Section */}
      <div className="w-full mb-8">
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} label="Resultados reales" />
      </div>

      <div className="flex-grow flex flex-col items-center w-full">
        {/* Title */}
        <h2 
          className="text-[22px] font-bold text-center leading-tight mb-6 px-4"
          style={{ color: '#2C2C2C' }}
        >
          Mira el resultado de Ana una mujer como tú:
        </h2>

        {/* Before/After Image Container */}
        <div className="w-full rounded-xl overflow-hidden mb-6">
          <img 
            src="https://i.imgur.com/bZzMAO7.jpeg" 
            alt="Resultados Antes y Después"
            className="w-full h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Support Text */}
        <p 
          className="text-center px-4 mb-8"
          style={{ 
            color: '#2c4a2e',
            lineHeight: '18.375px',
            fontSize: '13px',
            fontWeight: 'bold'
          }}
        >
          También puedes lograr estos resultados con el método adecuado.
        </p>

        {/* CTA Button */}
        <div className="w-full mt-auto flex justify-center">
          <button 
            onClick={onNext}
            className="w-[90%] bg-brand-pink hover:bg-brand-pink/90 text-white rounded-full h-14 text-lg font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-brand-pink/20"
          >
            Continúa
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

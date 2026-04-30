import { motion } from 'motion/react';
import { ProgressBar } from './ProgressBar';
import { useState } from 'react';

interface Option {
  id: string;
  label: string;
  icon?: string;
}

interface QuizStepProps {
  question: string;
  options: Option[];
  currentStep: number;
  totalSteps: number;
  onSelect: (optionId: string) => void;
}

export function QuizStep({
  question,
  options,
  currentStep,
  totalSteps,
  onSelect,
}: QuizStepProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    // Delay selection slightly to show the selected state
    setTimeout(() => {
      onSelect(id);
      setSelectedId(null);
    }, 400);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="max-w-md mx-auto bg-white rounded-[24px] shadow-xl relative p-6 sm:p-8 min-h-[540px] flex flex-col"
    >
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      <div className="mt-10 flex-grow">
        <h2 
          className="text-[22px] font-bold text-center leading-tight mb-8"
          style={{ color: '#2C2C2C' }}
        >
          {question}
        </h2>

        <div className="space-y-4">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            return (
              <button
                key={option.id}
                onClick={() => handleSelect(option.id)}
                className={`w-full flex items-center justify-between p-5 rounded-[12px] border transition-all duration-200 text-left cursor-pointer group ${
                  isSelected 
                    ? 'border-brand-green bg-brand-green/[0.08]' 
                    : 'border-[#E5E5E5] bg-white hover:border-gray-300 shadow-sm'
                }`}
              >
                <span className={`text-[16px] font-medium text-[#2C2C2C] transition-colors`}>
                  {option.label}
                </span>
                
                {/* Radio Selector */}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected ? 'border-brand-green bg-brand-green' : 'border-gray-200 group-hover:border-gray-300'
                }`}>
                  {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-full" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-gray-50">
        <p className="text-[11px] text-gray-400 text-center italic">
          Tu respuesta nos ayuda a personalizar tu plan al 100%
        </p>
      </div>
    </motion.div>
  );
}

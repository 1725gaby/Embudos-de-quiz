import { motion } from 'motion/react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  label?: string;
  variant?: 'default' | 'hero';
}

export function ProgressBar({ currentStep, totalSteps, label, variant = 'default' }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  if (variant === 'hero') {
    return (
      <div className="w-full flex flex-col gap-2 mb-8">
        <div className="flex justify-between items-center px-1">
          <span 
            className="text-[10px] uppercase tracking-widest font-bold"
            style={{ color: '#26472b' }}
          >
            Quiz
          </span>
          <div className="relative flex items-center justify-between w-24">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-200 -translate-y-1/2 z-0" />
            
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i}
                className={`w-2 h-2 rounded-full border relative z-10 transition-colors duration-300 ${
                  i === 0 ? 'bg-[#26472b]' : 'bg-white'
                }`}
                style={{ borderColor: '#26472b' }}
              />
            ))}
          </div>
        </div>
        <div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `8%` }}
            className="h-full"
            style={{ backgroundColor: '#26472b' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center gap-3 mb-6">
      <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">
        {label || `Pregunta ${currentStep} de ${totalSteps}`}
      </span>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden max-w-[200px]">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="h-full bg-brand-green"
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

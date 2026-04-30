import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface QuizTransitionProps {
  onComplete: () => void;
}

const STEPS = [
  "Analizando tus respuestas...",
  "Buscando las mejores recetas para ti...",
  "Calculando tu protocolo personalizado...",
  "Optimizando tu plan de resultados...",
  "Finalizando tu plan..."
];

export function QuizTransition({ onComplete }: QuizTransitionProps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 6000; // 6 seconds
    const stepDuration = totalDuration / STEPS.length;
    
    // Progress bar interval
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + (100 / (totalDuration / 50)); // smooth progress
      });
    }, 50);

    // Steps rotation interval
    const stepInterval = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev >= STEPS.length - 1) return prev;
        return prev + 1;
      });
    }, stepDuration);

    // Final completion timeout
    const completionTimeout = setTimeout(() => {
      onComplete();
    }, totalDuration + 500);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearTimeout(completionTimeout);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-[#F7F7F7] z-50 flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-md flex flex-col items-center space-y-12">
        
        {/* 1. ANIMACIÓN SUPERIOR (LOADER) */}
        <div className="relative w-16 h-16 mt-12">
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-gray-200"
          />
          <motion.div 
            className="absolute inset-0 rounded-full border-4 border-t-transparent"
            style={{ 
              borderColor: '#2f5d3a', 
              borderTopColor: 'transparent' 
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* 2 & 3. HEADLINE DINÁMICO + SUBTEXTO */}
        <div className="text-center space-y-3 min-h-[80px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h2 
              key={currentStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-2xl sm:text-3xl font-extrabold text-[#2C2C2C] leading-tight"
            >
              {STEPS[currentStepIndex]}
            </motion.h2>
          </AnimatePresence>
          <p className="text-gray-500 font-regular">
            Preparar tu plan personalizado
          </p>
        </div>

        {/* 4. BARRA DE PROGRESO */}
        <div className="w-full space-y-2 pb-12">
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <motion.div 
              className="h-full"
              style={{ backgroundColor: '#2f5d3a' }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="text-right text-[10px] uppercase tracking-widest font-bold text-gray-400">
            {Math.round(progress)}%
          </p>
        </div>
        
      </div>
    </div>
  );
}

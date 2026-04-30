/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { QuizHero } from './components/QuizHero';
import { QuizStep } from './components/QuizStep';
import { QuizResultsIntermediate } from './components/QuizResultsIntermediate';
import { QuizResults } from './components/QuizResults';
import { QuizTransition } from './components/QuizTransition';

interface Option {
  id: string;
  label: string;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: 'priority',
    question: '¿Cuál es tu MAYOR prioridad ahora mismo?',
    options: [
      { id: 'lose_weight', label: 'Perder peso' },
      { id: 'reduce_inflammation', label: 'Desinflamar el abdomen' },
      { id: 'better_nutrition', label: 'Mejorar mi alimentación' },
      { id: 'more_energy', label: 'Tener más energía' },
    ]
  },
  {
    id: 'obstacle',
    question: '¿Tu MAYOR obstáculo para mantener una dieta ha sido?',
    options: [
      { id: 'consistency', label: 'La falta de constancia' },
      { id: 'know_what_to_eat', label: 'No saber qué comer exactamente' },
      { id: 'no_time', label: 'No tener tiempo para cocinar' },
      { id: 'cravings', label: 'Los antojos de dulces que no puedo controlar' },
    ]
  },
  {
    id: 'bloating',
    question: '¿Con qué frecuencia sientes HINCHAZÓN abdominal?',
    options: [
      { id: 'every_day', label: 'Todos los días después de comer' },
      { id: 'often', label: '3-4 veces por semana' },
      { id: 'occasionally', label: 'Solo ocasionalmente' },
      { id: 'never', label: 'Casi nunca me pasa' },
    ]
  },
  {
    id: 'failed_diets',
    question: '¿Cuántas dietas has intentado SIN éxito?',
    options: [
      { id: '5_plus', label: 'Más de 5 (ya perdí la cuenta)' },
      { id: '2_4', label: 'Entre 2-4 dietas diferentes' },
      { id: '1_2', label: 'Solo 1-2 intentos' },
      { id: 'none', label: 'Esta sería mi primera vez' },
    ]
  },
  {
    id: 'current_diet',
    question: '¿Cómo va tu alimentación actualmente?',
    options: [
      { id: 'disordered', label: 'Desordenada' },
      { id: 'so_so', label: 'Más o menos' },
      { id: 'balanced', label: 'Equilibrada' },
    ]
  },
  {
    id: 'sweet_cravings',
    question: '¿Con qué frecuencia te apetece comer dulces?',
    options: [
      { id: 'daily', label: 'Todos los días' },
      { id: 'weekly', label: 'Algunas veces a la semana' },
      { id: 'rarely', label: 'Rara vez' },
    ]
  },
  {
    id: 'weight_loss_goal',
    question: '¿Cuánto peso te gustaría perder en los próximos 21 días?',
    options: [
      { id: '9_12kg', label: 'Entre 9-12kg (mi meta ideal)' },
      { id: '5_8kg', label: 'Entre 5-8kg (sería perfecto)' },
      { id: '3_5kg', label: 'Entre 3-5kg (estaría bien)' },
      { id: 'desinflamar', label: 'Solo desinflamar ya sería genial' },
    ]
  },
  {
    id: 'chia_experience',
    question: '¿Alguna vez has consumido CHÍA?',
    options: [
      { id: 'yes_used', label: 'Sí, la he usado antes' },
      { id: 'heard_of', label: 'He oído hablar de ella' },
      { id: 'never_tried', label: 'No, nunca la he probado' },
    ]
  },
  {
    id: 'recipe_preference',
    question: '¿Preferirías?:',
    options: [
      { id: 'sweet', label: 'Recetas dulces' },
      { id: 'savory', label: 'Recetas saladas' },
      { id: 'both', label: 'Ambos' },
    ]
  },
  {
    id: 'practical_recipes',
    question: '¿Te gustan las recetas prácticas?',
    options: [
      { id: 'yes', label: 'Sí' },
      { id: 'fast', label: 'Prefiero algo rápido' },
      { id: 'no_matter', label: 'No importa' },
    ]
  },
  {
    id: 'importance',
    question: '¿Qué tan importante es para ti lograr este cambio AHORA?',
    options: [
      { id: 'priority_1', label: 'Es mi prioridad número uno este mes' },
      { id: 'no_pressure', label: 'Me gustaría, pero sin presión' },
      { id: 'exploring', label: 'Solo estoy explorando opciones' },
    ]
  },
  {
    id: 'commitment',
    question: 'Si tuvieras un plan PROBADO paso a paso, ¿estarías dispuesta a seguirlo por 21 días?',
    options: [
      { id: 'ready', label: '¡Sí! Estoy lista para comprometerme' },
      { id: 'needs_easy', label: 'Sí, pero necesito que sea muy fácil' },
      { id: 'scared', label: 'Me da miedo no poder mantenerlo' },
    ]
  }
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showIntermediate, setShowIntermediate] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleSelectOption = (optionId: string) => {
    const questionIndex = currentStep - 1;
    const currentQuestion = QUESTIONS[questionIndex];
    
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));

    if (currentStep === 6) {
      setShowIntermediate(true);
    } else if (currentStep < QUESTIONS.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      setIsProcessing(true);
    }
  };

  const handleNextFromIntermediate = () => {
    setShowIntermediate(false);
    setCurrentStep(7);
  };

  const handleTransitionComplete = () => {
    setIsProcessing(false);
    setCurrentStep(QUESTIONS.length + 1);
  };

  return (
    <div className={`min-h-screen bg-brand-gray-light flex flex-col items-center p-4 ${currentStep <= QUESTIONS.length && !isProcessing ? 'justify-center' : 'pt-8'}`}>
      <main className={`w-full ${currentStep > QUESTIONS.length ? 'max-w-4xl' : 'max-w-lg'}`}>
        <AnimatePresence mode="wait">
          {isProcessing && (
            <motion.div key="transition">
              <QuizTransition onComplete={handleTransitionComplete} />
            </motion.div>
          )}

          {currentStep === 0 && !isProcessing && (
            <motion.div key="hero">
              <QuizHero onStart={handleStart} />
            </motion.div>
          )}

          {currentStep > 0 && currentStep <= QUESTIONS.length && !showIntermediate && !isProcessing && (
            <motion.div key={`step-${currentStep}`}>
              <QuizStep
                currentStep={currentStep}
                totalSteps={12}
                question={QUESTIONS[currentStep - 1].question}
                options={QUESTIONS[currentStep - 1].options}
                onSelect={handleSelectOption}
              />
            </motion.div>
          )}

          {showIntermediate && !isProcessing && (
            <motion.div key="intermediate-results">
              <QuizResultsIntermediate
                currentStep={currentStep}
                totalSteps={12}
                onNext={handleNextFromIntermediate}
              />
            </motion.div>
          )}

          {currentStep > QUESTIONS.length && !isProcessing && (
            <motion.div 
              key="step-results"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full"
            >
              <QuizResults />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

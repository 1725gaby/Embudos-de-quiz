import { motion } from 'motion/react';
import { ShieldCheck, Leaf, Sparkles } from 'lucide-react';
import { Button } from './ui/Button';
import { ProgressBar } from './ProgressBar';

interface QuizHeroProps {
  onStart: () => void;
}

export function QuizHero({ onStart }: QuizHeroProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-md mx-auto bg-white rounded-[32px] overflow-hidden shadow-2xl relative"
      style={{
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(https://i.imgur.com/6lr5hlj.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center'
      }}
    >
      <div className="relative z-10 p-6 sm:p-8 flex flex-col items-center">
        {/* Progress Bar Container */}
        <ProgressBar currentStep={1} totalSteps={12} variant="hero" />

        {/* Welcome Section */}
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-brand-pink fill-brand-pink" />
          <span 
            className="font-bold text-sm tracking-wide"
            style={{ color: '#2c4a2e', fontFamily: 'Georgia, serif' }}
          >
            ¡Bienvenida!
          </span>
        </div>

        {/* Headline Section */}
        <div className="text-center mt-4">
          <h1 
            className="text-3xl sm:text-4xl font-bold leading-tight text-balance"
            style={{ fontFamily: 'Georgia, serif', color: '#26472b' }}
          >
            Descubre cómo acelerar tu pérdida de peso <br />
            <span 
              className="text-brand-pink italic font-semibold"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              de forma natural
            </span>
          </h1>
        </div>

        {/* Highlight Badge */}
        <div 
          className="mt-8 px-4 py-2 rounded-full flex items-center gap-2 shadow-sm"
          style={{ backgroundColor: '#285636' }}
        >
          <Leaf className="w-4 h-4 text-white fill-white" />
          <p className="text-white font-semibold tracking-wide" style={{ fontSize: '13px' }}>
            Con recetas deliciosas con chía
          </p>
        </div>

        {/* Sub-headline */}
        <p 
          className="mt-6 text-center text-gray-600 max-w-[340px]"
          style={{ lineHeight: '19px', fontSize: '15px' }}
        >
          Responde unas preguntas rápidas y recibe un plan personalizado que te ayudará a desinflamar, perder peso y alcanzar tus mejores resultados.
        </p>

        {/* Benefits Row */}
        <div className="grid grid-cols-3 gap-4 w-full mt-6 mb-2 px-2">
          {[
            { icon: "🥗", text: "Recetas\nprácticas y\ndeliciosas" },
            { icon: "⚡", text: "Plan\npersonalizado\npara ti" },
            { icon: "📉", text: "Resultados\nreales y\nvisibles" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <span className="text-2xl">{item.icon}</span>
              <p className="text-[12px] font-medium text-gray-700 whitespace-pre-line leading-tight">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Main Visual Image for Content (The Chia Bowl) */}
        <div className="w-full h-52 rounded-2xl overflow-hidden mb-6 shadow-lg">
          <img 
            src="https://i.imgur.com/WKaUybC.png" 
            alt="Chia Pudding Bowl"
            className="w-full h-full object-cover"
            style={{ opacity: 0.85 }}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Call to Action Section */}
        <div className="w-full mt-auto space-y-4">
          <div className="flex flex-col items-center gap-4">
            <p 
              className="font-bold animate-bounce"
              style={{ fontSize: '13px', lineHeight: '16px', color: '#2c4a2e' }}
            >
              ¡Te tomará menos de 2 minutos!
            </p>
            <Button onClick={onStart}>
              ¡Vamos a empezar!
            </Button>
          </div>

          {/* Security Note */}
          <div className="flex items-center justify-center gap-1.5 pb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <p className="text-[11px] font-medium" style={{ color: '#454d54' }}>Resultados seguros y verificados</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import { ReactNode } from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  className?: string;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  fullWidth = true,
  className = ""
}: ButtonProps) {
  const baseStyles = "relative flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all active:scale-95 shadow-lg overflow-hidden";
  
  const variants = {
    primary: "bg-brand-pink text-white hover:bg-opacity-90",
    secondary: "bg-brand-green text-white hover:bg-opacity-90",
  };

  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
      <ChevronRight className="w-5 h-5" />
    </motion.button>
  );
}

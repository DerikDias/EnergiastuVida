import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

interface IntroScreenProps {
  onNext: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onNext }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onNext();
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg">
      {/* Floating mystical numbers background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400 opacity-20 text-6xl font-mystical"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              y: [null, -100],
              rotate: 360,
              opacity: [0.2, 0.1, 0.2]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {Math.floor(Math.random() * 9) + 1}
          </motion.div>
        ))}
      </div>

      {/* Sacred geometry pattern */}
      <div className="absolute inset-0 sacred-geometry opacity-30"></div>

      {/* Main content */}
      <motion.div
        className="text-center z-10 px-6 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Mystical icon */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
        >
          <div className="relative">
            <Sparkles className="w-16 h-16 text-gold-400 animate-glow" />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-gold-300" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-mystical font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Descubre las Energías de tu{' '}
          <motion.span
            className="text-gold-400 relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Nombre Completo
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gold-400 to-gold-600"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            />
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gold-100 mb-12 font-elegant"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          Descifra los secretos ocultos en tu identidad y desbloquea tu verdadero potencial
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.button
            className="relative px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 font-mystical font-bold text-xl rounded-full shadow-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            disabled={isClicked}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer bg-[length:200%_100%]" />
            
            {/* Pulse animation */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold-400"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative z-10">ANALIZAR MIS ENERGÍAS</span>
          </motion.button>
        </motion.div>

        {/* Ripple effect on click */}
        {isClicked && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-gold-400 rounded-full"
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </motion.div>

      {/* Light flares */}
      <motion.div
        className="absolute top-20 left-20 w-2 h-2 bg-gold-400 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0,
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-3 h-3 bg-gold-300 rounded-full"
        animate={{
          opacity: [0, 1, 0],
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );
};

export default IntroScreen;
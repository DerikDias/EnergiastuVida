import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Sparkles } from 'lucide-react';

interface NameInputScreenProps {
  onNext: () => void;
  userName: string;
  setUserName: (name: string) => void;
}

const NameInputScreen: React.FC<NameInputScreenProps> = ({ onNext, userName, setUserName }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim()) return;
    
    setIsSubmitting(true);
    
    // Pulse animation for input field
    setTimeout(() => {
      onNext();
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400 opacity-10 text-4xl font-mystical"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: 0 
            }}
            animate={{ 
              y: -100,
              rotate: 180,
              x: Math.random() * window.innerWidth
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          >
            {String.fromCharCode(0x2728 + Math.floor(Math.random() * 10))}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="max-w-2xl mx-auto px-6 z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Sparkles className="w-12 h-12 text-gold-400 mx-auto mb-6 animate-glow" />
          <h1 className="text-4xl md:text-5xl font-mystical font-bold text-white mb-6">
            Revela tu Esencia Numerológica
          </h1>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gold-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p className="text-gold-100 text-lg leading-relaxed font-elegant">
            Escribe aquí abajo <strong className="text-gold-400">SOLO tu nombre completo de bautismo</strong>, 
            exactamente igual que en tu acta de nacimiento, no olvides los acentos (si los hay).
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          {/* Input field */}
          <motion.div
            className="relative"
            animate={isSubmitting ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3, repeat: isSubmitting ? 3 : 0 }}
          >
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Escribe tu nombre completo..."
              className="w-full px-6 py-4 bg-white/20 backdrop-blur-sm border-2 border-gold-400/50 rounded-xl text-white text-xl placeholder-gold-200 focus:border-gold-400 focus:outline-none focus:ring-4 focus:ring-gold-400/20 transition-all duration-300 font-elegant"
              required
              disabled={isSubmitting}
            />
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-gold-400 pointer-events-none"
              initial={{ opacity: 0, scale: 1 }}
              animate={userName ? { 
                opacity: [0, 0.5, 0],
                scale: [1, 1.02, 1]
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            className="w-full relative px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 font-mystical font-bold text-xl rounded-xl shadow-2xl overflow-hidden group disabled:opacity-50"
            whileHover={!isSubmitting ? { 
              scale: 1.02,
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)"
            } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            disabled={!userName.trim() || isSubmitting}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer bg-[length:200%_100%]" />
            
            <span className="relative z-10">
              {isSubmitting ? 'Calculando energías...' : 'Calcular energías'}
            </span>

            {/* Loading spinner */}
            {isSubmitting && (
              <motion.div
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-6 h-6 text-maroon-900" />
              </motion.div>
            )}
          </motion.button>
        </motion.form>

        {/* Warning box */}
        <motion.div
          className="mt-8 bg-red-900/30 border border-red-500/50 rounded-xl p-6 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-red-400 font-bold mb-2 font-mystical">¡IMPORTANTE!</h3>
              <p className="text-red-200 font-elegant">
                <strong>SOLO</strong> tu nombre completo de bautismo, si escribes algo más, 
                el resultado será incorrecto.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Golden aura loading effect */}
        {isSubmitting && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-32 h-32 bg-gold-400/20 rounded-full blur-3xl"
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ 
                scale: [0, 2, 4],
                opacity: [0.5, 0.3, 0]
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default NameInputScreen;
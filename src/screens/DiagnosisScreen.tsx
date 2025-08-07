import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown } from 'lucide-react';

interface DiagnosisScreenProps {
  onNext: () => void;
  userName: string;
}

const DiagnosisScreen: React.FC<DiagnosisScreenProps> = ({ onNext, userName }) => {
  const negativeSequences = [
    {
      number: '222',
      description: 'Cuando la autoconfianza se ve debilitada y la indecisión toma control de tu vida...'
    },
    {
      number: '777',
      description: 'Cuando el miedo y la intolerancia se sobreponen a tu sabiduría interior...'
    },
    {
      number: '444',
      description: 'Cuando la rigidez mental bloquea tu capacidad de adaptación y crecimiento...'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg py-12">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-red-400 opacity-10 text-3xl font-mystical"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              rotate: 360,
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ 
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ⚠
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            <AlertCircle className="w-16 h-16 text-red-400 animate-pulse" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-mystical font-bold text-white mb-4">
            Diagnóstico de Secuencias Negativas
          </h1>
          
          <p className="text-xl text-gold-200 font-elegant">
            {userName}, tu nombre tiene las siguientes secuencias negativas:
          </p>
        </motion.div>

        {/* Negative sequences list */}
        <motion.div
          className="space-y-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {negativeSequences.map((sequence, index) => (
            <motion.div
              key={index}
              className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.2, duration: 0.8 }}
            >
              {/* Warning glow effect */}
              <motion.div
                className="absolute inset-0 bg-red-500/5 rounded-2xl"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              />
              
              <div className="flex items-start space-x-4 relative z-10">
                <motion.div
                  className="flex-shrink-0 w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center border-2 border-red-500/50"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-red-400 font-mystical font-bold text-xl">
                    {sequence.number}
                  </span>
                </motion.div>
                
                <div className="flex-1">
                  <motion.p
                    className="text-red-200 text-lg font-elegant leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {sequence.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated pyramid visualization */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gold-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h3 className="text-2xl font-mystical font-bold text-gold-400 text-center mb-8">
            Visualización Energética
          </h3>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Pyramid structure */}
              {[4, 3, 2, 1].map((count, rowIndex) => (
                <motion.div
                  key={rowIndex}
                  className="flex justify-center space-x-2 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + rowIndex * 0.2 }}
                >
                  {[...Array(count)].map((_, dotIndex) => (
                    <motion.div
                      key={dotIndex}
                      className={`w-6 h-6 rounded-full ${
                        Math.random() > 0.6 ? 'bg-red-500' : 'bg-gold-400'
                      }`}
                      animate={Math.random() > 0.6 ? {
                        boxShadow: [
                          '0 0 0 0 rgba(239, 68, 68, 0.7)',
                          '0 0 0 10px rgba(239, 68, 68, 0)',
                        ]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-8 mt-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-red-400 font-elegant">Secuencias Negativas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gold-400 rounded-full"></div>
              <span className="text-gold-400 font-elegant">Energías Neutras</span>
            </div>
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <motion.button
            className="px-12 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 font-mystical font-bold text-xl rounded-full shadow-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.6)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 group-hover:animate-shimmer bg-[length:200%_100%]" />
            
            <span className="relative z-10 flex items-center">
              <TrendingDown className="w-5 h-5 mr-2" />
              Entender el Diagnóstico
            </span>
          </motion.button>
        </motion.div>

        {/* Scroll-up transition effect */}
        <motion.div
          className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-gold-400/20 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        />
      </div>
    </div>
  );
};

export default DiagnosisScreen;
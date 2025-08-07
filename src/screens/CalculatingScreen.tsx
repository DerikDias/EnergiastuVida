import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Clock } from 'lucide-react';

interface CalculatingScreenProps {
  onNext: () => void;
}

const CalculatingScreen: React.FC<CalculatingScreenProps> = ({ onNext }) => {
  const [progress, setProgress] = useState(0);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 85) {
          clearInterval(timer);
          setTimeout(() => {
            onNext();
          }, 1000);
          return 85;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onNext]);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{ 
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
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
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Clock className="w-16 h-16 text-gold-400" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-mystical font-bold text-white mb-4">
            Estamos calculando la energía de tu nombre
          </h1>
          
          <p className="text-xl text-gold-200 font-elegant">
            Mientras calculamos tus energías, te explicaré cómo la numerología puede transformar tu vida.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gold-400/30"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {showVideo ? (
            <div className="aspect-video bg-gradient-to-br from-maroon-800 to-maroon-900 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Simulated video content */}
              <div className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-transparent animate-pulse" />
              
              <motion.div
                className="text-center z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.div
                  className="w-20 h-20 bg-gold-400/20 rounded-full flex items-center justify-center mb-4 mx-auto"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-10 h-10 text-gold-400 ml-1" />
                </motion.div>
                <p className="text-gold-200 text-lg font-elegant">
                  Descubre los secretos de la numerología
                </p>
              </motion.div>

              {/* Mystical particles */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gold-400 rounded-full"
                  initial={{ 
                    x: Math.random() * 100 + '%',
                    y: Math.random() * 100 + '%',
                    opacity: 0
                  }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    y: [null, '-20px'],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: Math.random() * 3
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="aspect-video bg-gradient-to-br from-maroon-800 to-maroon-900 rounded-xl flex items-center justify-center">
              <p className="text-gold-200 text-xl font-elegant">Video iniciando...</p>
            </div>
          )}

          {/* Video controls */}
          <div className="flex justify-center space-x-4 mt-6">
            <motion.button
              className="px-6 py-2 bg-gold-500/20 text-gold-400 rounded-lg border border-gold-400/30 font-mystical hover:bg-gold-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 inline mr-2" />
              Continuar viendo
            </motion.button>
            
            <motion.button
              className="px-6 py-2 bg-gold-500/20 text-gold-400 rounded-lg border border-gold-400/30 font-mystical hover:bg-gold-500/30 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4 inline mr-2" />
              Ver desde el inicio
            </motion.button>
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gold-200 font-mystical">Analizando energías...</span>
              <span className="text-gold-400 font-bold">{progress}%</span>
            </div>
            
            <div className="w-full bg-maroon-800 rounded-full h-3 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-400 to-gold-600 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer bg-[length:200%_100%]" />
              </motion.div>
            </div>
          </div>

          {/* Progress indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            {[
              { label: 'Secuencias numéricas', completed: progress > 30 },
              { label: 'Patrones energéticos', completed: progress > 60 },
              { label: 'Alineación cósmica', completed: progress > 85 }
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-2 ${item.completed ? 'text-gold-400' : 'text-gold-200/50'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
              >
                <motion.div
                  className={`w-3 h-3 rounded-full ${item.completed ? 'bg-gold-400' : 'bg-gold-200/30'}`}
                  animate={item.completed ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5 }}
                />
                <span className="font-elegant text-sm">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Zoom transition effect */}
        {progress >= 85 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="absolute top-1/2 left-1/2 w-4 h-4 bg-gold-400 rounded-full"
              initial={{ scale: 0, x: '-50%', y: '-50%' }}
              animate={{ scale: 200, opacity: 0 }}
              transition={{ duration: 1, ease: "easeIn" }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CalculatingScreen;
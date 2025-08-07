import React from 'react';
import { motion } from 'framer-motion';
import { Check, Download, Sparkles, Star, Zap } from 'lucide-react';

const OfferScreen: React.FC = () => {
  const benefits = [
    'Secuencias positivas alineadas',
    'Corrección de energías limitantes',
    'Descifrar tu vibración interna',
    'Claves para prosperidad',
    'PDF personalizado exclusivo'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg py-12">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400 opacity-10 text-4xl"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              rotate: 360,
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ✨
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
            <div className="relative">
              <Sparkles className="w-16 h-16 text-gold-400 animate-glow" />
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-gold-300" />
              </motion.div>
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl font-mystical font-bold text-white mb-4">
            Descubre el Camino de tu{' '}
            <span className="text-gold-400">Prosperidad</span> ✨
          </h1>
          
          <p className="text-xl text-gold-200 font-elegant max-w-2xl mx-auto">
            Transforma tu vida con tu Mapa Numerológico Personalizado
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          {/* Benefits List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 className="text-3xl font-mystical font-bold text-gold-400 mb-8">
              Lo que recibirás:
            </h2>
            
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-gold-400/20"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              >
                <motion.div
                  className="flex-shrink-0 w-8 h-8 bg-gold-400 rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Check className="w-5 h-5 text-maroon-900" />
                </motion.div>
                <p className="text-white font-elegant text-lg">{benefit}</p>
              </motion.div>
            ))}

            {/* Special bonus */}
            <motion.div
              className="bg-gradient-to-r from-gold-500/20 to-gold-600/20 backdrop-blur-sm rounded-xl p-6 border-2 border-gold-400/50 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-6 h-6 text-gold-400" />
                  <span className="text-gold-400 font-mystical font-bold">BONUS EXCLUSIVO</span>
                </div>
                <p className="text-white font-elegant">
                  Consulta personalizada de 30 minutos para interpretar tu mapa
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="relative mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Book/PDF mockup */}
              <div className="w-80 h-96 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg shadow-2xl relative overflow-hidden transform rotate-3">
                {/* Book cover design */}
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-900 to-maroon-800 m-4 rounded-lg flex flex-col items-center justify-center text-center p-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-16 h-16 text-gold-400 mb-4" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-mystical font-bold text-gold-400 mb-2">
                    MAPA
                  </h3>
                  <h4 className="text-xl font-mystical font-bold text-white mb-4">
                    NUMEROLÓGICO
                  </h4>
                  <p className="text-gold-200 text-sm font-elegant">
                    Personalizado
                  </p>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                  <div className="absolute bottom-4 right-4 w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
                </div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gold-400/20 rounded-lg"
                  animate={{ opacity: [0, 0.3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              
              {/* Floating elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gold-400 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>

            {/* Price and urgency */}
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="text-gold-200 text-lg font-elegant line-through mb-2">
                Precio regular: $197
              </div>
              <div className="text-4xl font-mystical font-bold text-gold-400 mb-2">
                Solo $47
              </div>
              <div className="text-red-400 font-elegant animate-pulse">
                ¡Oferta limitada por tiempo!
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button
            className="relative px-16 py-6 bg-gradient-to-r from-gold-500 to-gold-600 text-maroon-900 font-mystical font-bold text-2xl rounded-full shadow-2xl overflow-hidden group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 50px rgba(255, 215, 0, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              y: [0, -5, 0],
            }}
            transition={{ 
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-shimmer bg-[length:200%_100%]" />
            
            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-gold-400"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <span className="relative z-10 flex items-center">
              <Download className="w-8 h-8 mr-3" />
              DESCARGAR MI MAPA AHORA
            </span>
          </motion.button>

          {/* Security badges */}
          <motion.div
            className="flex justify-center items-center space-x-6 mt-8 text-gold-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-sm font-elegant">Pago Seguro</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-sm font-elegant">Garantía 30 días</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-sm font-elegant">Descarga Inmediata</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Final fade-out effect */}
        <motion.div
          className="fixed inset-0 pointer-events-none z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          whileHover={{ opacity: 0.1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gold-400/10 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default OfferScreen;
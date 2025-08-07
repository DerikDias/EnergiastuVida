import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';

interface EnergyAlignmentScreenProps {
  onNext: () => void;
}

const EnergyAlignmentScreen: React.FC<EnergyAlignmentScreenProps> = ({ onNext }) => {
  const [alignedPercentage, setAlignedPercentage] = useState(0);
  const [misalignedPercentage, setMisalignedPercentage] = useState(0);

  useEffect(() => {
    // Animate percentages
    const timer1 = setTimeout(() => {
      setAlignedPercentage(35);
    }, 1000);
    
    const timer2 = setTimeout(() => {
      setMisalignedPercentage(65);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden mystical-bg py-12">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400 opacity-5 text-2xl font-mystical"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              rotate: 0 
            }}
            animate={{ 
              rotate: [0, 180, 360],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ 
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            ⚡
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto px-6 z-10">
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
            <BarChart3 className="w-16 h-16 text-gold-400 animate-pulse" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-mystical font-bold text-white mb-4">
            Entiende el Diagnóstico
          </h1>
          
          <p className="text-xl text-gold-200 font-elegant">
            Corrección de alineación de tus energías
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Circular Energy Diagram */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/30"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 className="text-2xl font-mystical font-bold text-gold-400 text-center mb-8">
              Estado Energético Actual
            </h3>
            
            <div className="relative w-64 h-64 mx-auto">
              {/* Background circle */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="8"
                />
                
                {/* Misaligned energy (red) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${misalignedPercentage * 2.51} 251`}
                  initial={{ strokeDasharray: "0 251" }}
                  animate={{ strokeDasharray: `${misalignedPercentage * 2.51} 251` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1.5 }}
                />
                
                {/* Aligned energy (green) */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${alignedPercentage * 2.51} 251`}
                  strokeDashoffset={`-${misalignedPercentage * 2.51}`}
                  initial={{ strokeDasharray: "0 251" }}
                  animate={{ strokeDasharray: `${alignedPercentage * 2.51} 251` }}
                  transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                />
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-3xl font-mystical font-bold text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    {alignedPercentage}%
                  </motion.div>
                  <div className="text-gold-400 text-sm font-elegant">Alineado</div>
                </div>
              </div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-green-400 font-elegant">Energías Alineadas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-red-400 font-elegant">Energías Desalineadas</span>
              </div>
            </div>
          </motion.div>

          {/* Improvement Graph */}
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gold-400/30"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl font-mystical font-bold text-gold-400 text-center mb-8">
              Proyección de Mejora
            </h3>
            
            <div className="relative h-48">
              <svg className="w-full h-full" viewBox="0 0 300 150">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line
                    key={i}
                    x1="0"
                    y1={30 + i * 30}
                    x2="300"
                    y2={30 + i * 30}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="1"
                  />
                ))}
                
                {/* Current state */}
                <motion.path
                  d="M 0 120 Q 75 100 150 90 T 300 60"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="3"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                
                {/* Improved state */}
                <motion.path
                  d="M 0 120 Q 75 80 150 50 T 300 20"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1.5 }}
                />
                
                {/* Data points */}
                {[
                  { x: 0, y: 120, color: '#ef4444' },
                  { x: 150, y: 90, color: '#ef4444' },
                  { x: 300, y: 60, color: '#ef4444' },
                  { x: 0, y: 120, color: '#10b981' },
                  { x: 150, y: 50, color: '#10b981' },
                  { x: 300, y: 20, color: '#10b981' }
                ].map((point, index) => (
                  <motion.circle
                    key={index}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    fill={point.color}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 2 + index * 0.1 }}
                  />
                ))}
              </svg>
              
              {/* Labels */}
              <div className="absolute bottom-0 left-0 text-xs text-gold-200 font-elegant">Actual</div>
              <div className="absolute bottom-0 right-0 text-xs text-gold-200 font-elegant">Potencial</div>
            </div>
            
            {/* Legend */}
            <div className="flex justify-center space-x-6 mt-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-red-500"></div>
                <span className="text-red-400 font-elegant text-sm">Estado Actual</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-0.5 bg-green-500"></div>
                <span className="text-green-400 font-elegant text-sm">Después de Corrección</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key insights */}
        <motion.div
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gold-400/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <h3 className="text-2xl font-mystical font-bold text-gold-400 text-center mb-6">
            Puntos Clave de Transformación
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: 'Potencial de Mejora',
                value: '85%',
                description: 'Incremento posible en alineación energética'
              },
              {
                icon: PieChart,
                title: 'Bloqueos Identificados',
                value: '7',
                description: 'Patrones negativos detectados'
              },
              {
                icon: BarChart3,
                title: 'Tiempo Estimado',
                value: '21 días',
                description: 'Para ver cambios significativos'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.2 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gold-400/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <item.icon className="w-8 h-8 text-gold-400" />
                </motion.div>
                <h4 className="text-xl font-mystical font-bold text-white mb-2">{item.title}</h4>
                <div className="text-3xl font-bold text-gold-400 mb-2">{item.value}</div>
                <p className="text-gold-200 text-sm font-elegant">{item.description}</p>
              </motion.div>
            ))}
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
            
            <span className="relative z-10">Descubrir la Solución</span>
          </motion.button>
        </motion.div>

        {/* Slide-left transition effect */}
        <motion.div
          className="fixed right-0 top-0 w-32 h-full bg-gradient-to-l from-gold-400/20 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        />
      </div>
    </div>
  );
};

export default EnergyAlignmentScreen;
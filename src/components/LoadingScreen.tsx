import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface LoadingScreenProps {
  isVisible: boolean;
  message?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  isVisible, 
  message = "AI IS ANALYZING THE POSSIBILITIES..." 
}) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-emerald-900/90 backdrop-blur-sm flex flex-col items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div 
              className="w-20 h-20 mx-auto mb-6"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-full h-full text-white" />
            </motion.div>
            
            <motion.h2 
              className="text-2xl md:text-3xl font-bold text-white mb-2"
              animate={{ 
                opacity: [1, 0.7, 1],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse" 
              }}
            >
              {message}
            </motion.h2>
            
            <p className="text-emerald-200">
              Our artificial intelligence is processing millions of data points to generate your personalized lucky numbers...
            </p>
            
            {/* Progress bar */}
            <motion.div 
              className="h-1 bg-emerald-700 w-64 md:w-96 mx-auto mt-8 rounded-full overflow-hidden"
            >
              <motion.div 
                className="h-full bg-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 10, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
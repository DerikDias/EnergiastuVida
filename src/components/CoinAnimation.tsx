import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CoinProps {
  size: number;
  x: number;
  delay: number;
  duration: number;
}

const Coin: React.FC<CoinProps> = ({ size, x, delay, duration }) => {
  return (
    <motion.div
      className="absolute top-0 z-10"
      initial={{ y: -100, x, opacity: 0, rotate: 0 }}
      animate={{ 
        y: window.innerHeight + 100,
        opacity: [0, 1, 1, 0],
        rotate: 360,
        x: x + (Math.random() * 200 - 100)
      }}
      transition={{ 
        delay,
        duration,
        ease: "easeIn" 
      }}
      style={{ width: size, height: size }}
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-4 border-yellow-400 shadow-lg flex items-center justify-center">
        <div className="text-yellow-800 font-bold text-xs">$</div>
      </div>
    </motion.div>
  );
};

interface CoinAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

const CoinAnimation: React.FC<CoinAnimationProps> = ({ isVisible, onComplete }) => {
  const [coins, setCoins] = useState<React.ReactNode[]>([]);
  
  useEffect(() => {
    if (isVisible) {
      const coinElements = [];
      const coinCount = 30;
      
      for (let i = 0; i < coinCount; i++) {
        const size = Math.random() * 30 + 20; // Random size between 20-50px
        const x = Math.random() * window.innerWidth;
        const delay = Math.random() * 0.5; // Random delay up to 0.5s
        const duration = Math.random() * 1.5 + 1.5; // Random duration between 1.5-3s
        
        coinElements.push(
          <Coin 
            key={i} 
            size={size} 
            x={x} 
            delay={delay} 
            duration={duration} 
          />
        );
      }
      
      setCoins(coinElements);
      
      // Complete the animation after all coins have fallen
      const timer = setTimeout(() => {
        onComplete();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {coins}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CoinAnimation;
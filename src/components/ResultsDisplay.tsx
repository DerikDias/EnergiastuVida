import React from 'react';
import { motion } from 'framer-motion';
import { Lottery } from '../data/lotteries';
import { formatNumber } from '../utils/numberGenerator';

interface ResultsDisplayProps {
  results: Array<{
    mainNumbers: number[];
    specialNumbers?: number[];
  }>;
  lottery: Lottery;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ results, lottery }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Your Lucky Numbers</h2>
        <p className="text-gray-600">
          Based on our AI analysis, these numbers have been intelligently selected for {lottery.name}
        </p>
      </div>
      
      <div className="space-y-6">
        {results.map((result, setIndex) => (
          <motion.div
            key={setIndex}
            className="border border-emerald-100 rounded-lg p-4 bg-gradient-to-r from-emerald-50 to-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: setIndex * 0.2 }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-emerald-700">Set {setIndex + 1}</h3>
              <span className="text-xs text-gray-500">Generated for {lottery.name}</span>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center my-4">
              {result.mainNumbers.map((number, idx) => (
                <motion.div
                  key={idx}
                  className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: setIndex * 0.2 + idx * 0.1 }}
                >
                  {formatNumber(number)}
                </motion.div>
              ))}
              
              {result.specialNumbers && result.specialNumbers.map((number, idx) => (
                <motion.div
                  key={`special-${idx}`}
                  className={`w-12 h-12 rounded-full ${lottery.specialNumbers?.color || 'bg-amber-500'} text-white flex items-center justify-center font-bold text-lg shadow-md border-2 border-white`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: setIndex * 0.2 + result.mainNumbers.length * 0.1 + 0.2 }}
                >
                  {formatNumber(number)}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center text-sm text-emerald-700 bg-emerald-50 rounded-full py-1 px-4 mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
            >
              AI Generated ✨
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-gray-600 text-center">
        <p>These AI-generated numbers are for entertainment purposes only.</p>
        <p>Past performance is not indicative of future results.</p>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;
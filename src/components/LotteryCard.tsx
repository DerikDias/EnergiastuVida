import React from 'react';
import { motion } from 'framer-motion';
import { Lottery } from '../data/lotteries';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface LotteryCardProps {
  lottery: Lottery;
  index: number;
}

const LotteryCard: React.FC<LotteryCardProps> = ({ lottery, index }) => {
  const navigate = useNavigate();
  const Icon = lottery.icon;
  
  const handleClick = () => {
    navigate(`/generate/${lottery.id}`);
  };
  
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <div className="bg-emerald-100 p-3 rounded-lg">
              <Icon className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-bold text-gray-800">{lottery.name}</h3>
              <p className="text-sm text-gray-500">{lottery.description}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-emerald-500" />
        </div>
        
        <div className="mt-4 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-gray-500">Main Numbers</p>
              <p className="text-sm font-medium">
                {lottery.mainNumbers.count} numbers ({lottery.mainNumbers.min}-{lottery.mainNumbers.max})
              </p>
            </div>
            {lottery.specialNumbers && (
              <div>
                <p className="text-xs text-gray-500">{lottery.specialNumbers.name}</p>
                <p className="text-sm font-medium">
                  {lottery.specialNumbers.count} number ({lottery.specialNumbers.min}-{lottery.specialNumbers.max})
                </p>
              </div>
            )}
          </div>
        </div>
        
        {lottery.jackpotAmount && (
          <div className="mt-4 bg-gradient-to-r from-emerald-50 to-emerald-100 p-2 rounded-lg">
            <p className="text-xs text-emerald-800">Current Jackpot:</p>
            <p className="text-lg font-bold text-emerald-800">{lottery.jackpotAmount}</p>
          </div>
        )}
        
        <div className="mt-4 flex flex-wrap gap-1">
          {lottery.drawDays.map((day, idx) => (
            <span 
              key={idx}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {day}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LotteryCard;
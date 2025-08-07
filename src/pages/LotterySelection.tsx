import React from 'react';
import { motion } from 'framer-motion';
import lotteries from '../data/lotteries';
import LotteryCard from '../components/LotteryCard';
import { useAuth } from '../context/AuthContext';
import { LogOut, Brain } from 'lucide-react';

const LotterySelection: React.FC = () => {
  const { logout, user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-4 px-6 shadow-lg"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <h1 className="text-2xl font-bold">Lotto Genius AI</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-emerald-100 hidden sm:inline-block">
                Welcome, {user?.email}
              </span>
              <button 
                onClick={logout}
                className="flex items-center text-sm bg-white/10 hover:bg-white/20 rounded-full px-3 py-1 transition-colors"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Select a Lottery</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose your preferred lottery to generate personalized lucky numbers with our intelligent algorithm.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lotteries.map((lottery, index) => (
            <LotteryCard 
              key={lottery.id} 
              lottery={lottery} 
              index={index} 
            />
          ))}
        </div>
        
        <motion.div
          className="mt-10 p-6 bg-white rounded-xl shadow-md text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-lg font-medium text-gray-800 mb-2">Feeling Lucky?</h3>
          <p className="text-gray-600">
            Our advanced AI analyzes millions of data points, historical patterns, and statistical 
            probabilities to generate the most intelligent lottery number predictions.
          </p>
        </motion.div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-gray-500 text-sm mt-auto">
        <p>© 2025 Lotto Genius AI. Powered by artificial intelligence for entertainment and life-changing purposes only.</p>
      </footer>
    </div>
  );
};

export default LotterySelection;
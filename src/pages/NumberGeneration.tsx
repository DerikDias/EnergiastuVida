import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import lotteries from '../data/lotteries';
import Button from '../components/Button';
import LoadingScreen from '../components/LoadingScreen';
import ResultsDisplay from '../components/ResultsDisplay';
import { generateLuckyNumbers } from '../utils/numberGenerator';
import { ArrowLeft, Calendar, MapPin, DollarSign, Wand2 } from 'lucide-react';

interface GenerationFormData {
  zipCode: string;
  date: string;
  budget: string;
}

const NumberGeneration: React.FC = () => {
  const { lotteryId } = useParams<{ lotteryId: string }>();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<GenerationFormData>({
    zipCode: '',
    date: new Date().toISOString().split('T')[0],
    budget: '10'
  });
  const [showLoading, setShowLoading] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [formErrors, setFormErrors] = useState<Partial<GenerationFormData>>({});
  
  const lottery = lotteries.find(l => l.id === lotteryId);
  
  useEffect(() => {
    if (!lottery) {
      navigate('/lotteries');
    }
  }, [lottery, navigate]);
  
  if (!lottery) {
    return null;
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user types
    if (formErrors[name as keyof GenerationFormData]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };
  
  const validateForm = (): boolean => {
    const errors: Partial<GenerationFormData> = {};
    
    if (!formData.zipCode) {
      errors.zipCode = 'ZIP code is required';
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
      errors.zipCode = 'Enter a valid ZIP code';
    }
    
    if (!formData.date) {
      errors.date = 'Date is required';
    }
    
    if (!formData.budget) {
      errors.budget = 'Budget is required';
    } else if (isNaN(Number(formData.budget)) || Number(formData.budget) <= 0) {
      errors.budget = 'Enter a valid amount';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };
  
  const handleGenerateNumbers = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setShowLoading(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const generatedNumbers = generateLuckyNumbers(lottery, formData);
      setResults(generatedNumbers);
      setShowLoading(false);
    }, 10000); // 10 seconds as specified
  };
  
  const goBack = () => {
    navigate('/lotteries');
  };
  
  const Icon = lottery.icon;
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-6 px-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="container mx-auto">
          <button 
            onClick={goBack}
            className="flex items-center text-emerald-100 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            <span>Back to lotteries</span>
          </button>
          
          <div className="flex items-center">
            <div className="bg-white/10 p-3 rounded-lg">
              <Icon className="h-8 w-8" />
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold">{lottery.name}</h1>
              <p className="text-emerald-100 text-sm">{lottery.description}</p>
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        {!results ? (
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Generate Lucky Numbers</h2>
              <p className="text-gray-600 mb-6">
                Enter your information below to generate personalized lucky numbers for {lottery.name}.
              </p>
              
              <form onSubmit={handleGenerateNumbers}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP Code
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="zipCode"
                        name="zipCode"
                        type="text"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          formErrors.zipCode ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                        placeholder="90210"
                      />
                    </div>
                    {formErrors.zipCode && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.zipCode}</p>
                    )}
                    <p className="mt-1 text-xs text-gray-500">
                      Your ZIP code helps us analyze regional patterns
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Draw Date
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          formErrors.date ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                      />
                    </div>
                    {formErrors.date && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.date}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      Budget ($)
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="budget"
                        name="budget"
                        type="number"
                        min="1"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className={`block w-full pl-10 pr-3 py-2 border ${
                          formErrors.budget ? 'border-red-300' : 'border-gray-300'
                        } rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                        placeholder="10"
                      />
                    </div>
                    {formErrors.budget && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.budget}</p>
                    )}
                  </div>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  className="mt-6 w-full"
                  icon={<Wand2 size={20} />}
                >
                  Generate Lucky Numbers
                </Button>
              </form>
              
              <div className="mt-8 border-t border-gray-100 pt-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">About {lottery.name}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {lottery.mainNumbers.count} numbers from {lottery.mainNumbers.min} to {lottery.mainNumbers.max}
                  {lottery.specialNumbers && ` plus ${lottery.specialNumbers.count} ${lottery.specialNumbers.name} from ${lottery.specialNumbers.min} to ${lottery.specialNumbers.max}`}
                </p>
                <p className="text-sm text-gray-600">
                  Draw days: {lottery.drawDays.join(', ')}
                </p>
                {lottery.jackpotAmount && (
                  <p className="text-sm font-medium text-emerald-700 mt-2">
                    Current jackpot: {lottery.jackpotAmount}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        ) : (
          <ResultsDisplay results={results} lottery={lottery} />
        )}
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-gray-500 text-sm mt-auto">
        <p>© 2025 Lotto Genius AI. Powered by artificial intelligence for entertainment and life-changing purposes only.</p>
      </footer>
      
      {/* Loading screen */}
      <LoadingScreen isVisible={showLoading} />
    </div>
  );
};

export default NumberGeneration;
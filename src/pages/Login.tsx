import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import AgeVerificationModal from '../components/AgeVerificationModal';
import CoinAnimation from '../components/CoinAnimation';
import { Brain, Mail, Lock, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);
  const [loginAttempted, setLoginAttempted] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginAttempted(true);
    
    if (!email || !password) {
      return;
    }
    
    try {
      await login(email, password);
      setShowAgeModal(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  
  const handleAgeModalClose = () => {
    setShowAgeModal(false);
    setShowCoinAnimation(true);
  };
  
  const handleCoinAnimationComplete = () => {
    setShowCoinAnimation(false);
  };
  
  // Generate brain pattern background
  const BrainPattern = () => {
    return (
      <div className="fixed inset-0 z-0 opacity-5">
        <div className="flex flex-wrap">
          {Array(100).fill(null).map((_, index) => (
            <div key={index} className="p-4">
              <Brain size={24} />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-800 to-emerald-600 flex items-center justify-center p-4 relative overflow-hidden">
      <BrainPattern />
      
      <motion.div
        className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="p-8">
          <div className="text-center mb-8">
            <motion.div
              className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4"
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <Brain className="w-8 h-8 text-emerald-600" />
            </motion.div>
            
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Lotto Genius AI</h1>
            <p className="text-gray-600">AI-powered lottery number intelligence</p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      loginAttempted && !email ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                    placeholder="you@example.com"
                  />
                </div>
                {loginAttempted && !email && (
                  <p className="mt-1 text-sm text-red-600">Email is required</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`block w-full pl-10 pr-3 py-2 border ${
                      loginAttempted && !password ? 'border-red-300' : 'border-gray-300'
                    } rounded-lg shadow-sm focus:ring-emerald-500 focus:border-emerald-500`}
                    placeholder="••••••••"
                  />
                </div>
                {loginAttempted && !password && (
                  <p className="mt-1 text-sm text-red-600">Password is required</p>
                )}
              </div>
              
              <div>
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={loading}
                  icon={loading ? undefined : <ArrowRight size={20} />}
                  className="mt-2"
                >
                  {loading ? 'Signing in...' : 'Sign in'}
                </Button>
              </div>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-500">
            <p> Your email and password sent to your email</p>
          </div>
        </div>
        
        {/* Decorative bottom section */}
        <div className="h-2 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />
      </motion.div>
      
      <AgeVerificationModal isOpen={showAgeModal} onClose={handleAgeModalClose} />
      <CoinAnimation isVisible={showCoinAnimation} onComplete={handleCoinAnimationComplete} />
    </div>
  );
};

export default Login;
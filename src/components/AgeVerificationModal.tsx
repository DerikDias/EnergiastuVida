import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import Button from './Button';
import { CheckCircle, XCircle } from 'lucide-react';

interface AgeVerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AgeVerificationModal: React.FC<AgeVerificationModalProps> = ({ isOpen, onClose }) => {
  const { verifyAge } = useAuth();
  
  const handleAgeConfirmation = (isOver20: boolean) => {
    verifyAge(isOver20);
    onClose();
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full"
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Age Verification</h2>
              <p className="text-gray-600">
                To comply with legal requirements, please confirm that you are over 20 years old.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                fullWidth 
                onClick={() => handleAgeConfirmation(true)}
                icon={<CheckCircle size={20} />}
              >
                Yes, I'm over 20
              </Button>
              
              <Button 
                variant="outline" 
                fullWidth 
                onClick={() => handleAgeConfirmation(false)}
                icon={<XCircle size={20} />}
              >
                No, I'm under 20
              </Button>
            </div>
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              By confirming, you agree to our Terms of Service and Privacy Policy.
              You must be over 20 years old to use Lotto Genius AI.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeVerificationModal;
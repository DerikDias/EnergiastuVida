import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import IntroScreen from './screens/IntroScreen';
import NameInputScreen from './screens/NameInputScreen';
import CalculatingScreen from './screens/CalculatingScreen';
import DiagnosisScreen from './screens/DiagnosisScreen';
import EnergyAlignmentScreen from './screens/EnergyAlignmentScreen';
import OfferScreen from './screens/OfferScreen';

export type Screen = 'intro' | 'nameInput' | 'calculating' | 'diagnosis' | 'energyAlignment' | 'offer';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('intro');
  const [userName, setUserName] = useState('');

  const nextScreen = () => {
    const screens: Screen[] = ['intro', 'nameInput', 'calculating', 'diagnosis', 'energyAlignment', 'offer'];
    const currentIndex = screens.indexOf(currentScreen);
    if (currentIndex < screens.length - 1) {
      setCurrentScreen(screens[currentIndex + 1]);
    }
  };

  const goToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'intro':
        return <IntroScreen onNext={nextScreen} />;
      case 'nameInput':
        return <NameInputScreen onNext={nextScreen} userName={userName} setUserName={setUserName} />;
      case 'calculating':
        return <CalculatingScreen onNext={nextScreen} />;
      case 'diagnosis':
        return <DiagnosisScreen onNext={nextScreen} userName={userName} />;
      case 'energyAlignment':
        return <EnergyAlignmentScreen onNext={nextScreen} />;
      case 'offer':
        return <OfferScreen />;
      default:
        return <IntroScreen onNext={nextScreen} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-maroon-900 via-maroon-800 to-black overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="min-h-screen"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
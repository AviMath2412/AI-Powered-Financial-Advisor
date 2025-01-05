import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitch: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
      className="fixed top-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
      title={language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
    >
      <Languages className="w-6 h-6 text-blue-600" />
    </button>
  );
};
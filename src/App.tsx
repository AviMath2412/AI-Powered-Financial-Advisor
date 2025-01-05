import React from 'react';
import { Header } from './components/Layout/Header';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import ChatBot from './components/ChatBot/ChatBot';
import FinancialCard from './components/FinancialCard';
import { financialTopics } from './data/financialTopics';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';

const AppContent: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {financialTopics.map((topic, index) => (
            <FinancialCard
              key={index}
              title={t(topic.titleKey)}
              description={t(topic.descriptionKey)}
              icon={<topic.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />}
              topicKey={topic.topicKey}
            />
          ))}
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800 dark:text-white">
            {t('app.askQuestions')}
          </h2>
          <ChatBot />
        </div>
      </main>

      <Footer />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
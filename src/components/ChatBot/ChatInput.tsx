import React from 'react';
import { Send } from 'lucide-react';
import { VoiceInput } from './VoiceInput';
import { useLanguage } from '../../context/LanguageContext';

interface ChatInputProps {
  input: string;
  setInput: (value: string) => void;
  handleSend: () => void;
  isLoading: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  handleSend,
  isLoading
}) => {
  const { t } = useLanguage();

  return (
    <div className="border-t dark:border-gray-700 p-4 flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
        placeholder={t('chat.placeholder')}
        className="flex-1 border dark:border-gray-700 dark:bg-gray-800 dark:text-white
          rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500
          transition-all duration-200 hover:shadow-md"
        disabled={isLoading}
      />
      <VoiceInput setInput={setInput} />
      <button
        onClick={handleSend}
        disabled={isLoading || !input.trim()}
        className={`bg-blue-500 text-white rounded-lg p-2 
          transition-all duration-200
          ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600 hover:shadow-md'}
          transform hover:scale-105`}
      >
        <Send className="w-5 h-5" />
      </button>
    </div>
  );
};
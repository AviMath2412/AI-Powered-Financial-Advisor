import React, { useState } from 'react';
import { Mic } from 'lucide-react';
import { VoiceIndicator } from '../VoiceIndicator';

interface VoiceInputProps {
  setInput: (value: string) => void;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ setInput }) => {
  const [isListening, setIsListening] = useState(false);

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;

      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onerror = () => setIsListening(false);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };

      recognition.start();
    }
  };

  return (
    <button
      onClick={handleVoiceInput}
      className={`p-2 rounded-lg relative transition-colors
        ${isListening ? 'bg-red-100 dark:bg-red-900' : 'bg-gray-100 dark:bg-gray-800'}
        hover:bg-opacity-90`}
    >
      {isListening ? (
        <VoiceIndicator isListening={isListening} />
      ) : (
        <Mic className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      )}
    </button>
  );
};
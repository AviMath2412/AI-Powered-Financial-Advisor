import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';
import { LoadingDots } from './LoadingDots';
import { useLanguage } from '../../context/LanguageContext';
import { generalResponses } from '../../services/chatbot/responses';
import { getRandomResponse, isGreeting } from '../../services/chatbot/utils';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    { text: getRandomResponse(generalResponses[language as keyof typeof generalResponses].greetings), isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setIsLoading(true);

    // Simulate response delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const responses = generalResponses[language as keyof typeof generalResponses];
    const responseText = isGreeting(userMessage)
      ? getRandomResponse(responses.greetings)
      : getRandomResponse(responses.general);

    setMessages(prev => [...prev, { text: responseText, isBot: true }]);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-lg 
      transform transition-all duration-300 hover:shadow-xl">
      <div className="h-[400px] overflow-y-auto p-4 scroll-smooth">
        {messages.map((message, index) => (
          <ChatMessage key={index} {...message} />
        ))}
        {isLoading && (
          <div className="flex justify-start mb-4">
            <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-3">
              <LoadingDots />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <ChatInput 
        input={input} 
        setInput={setInput} 
        handleSend={handleSend} 
        isLoading={isLoading}
      />
    </div>
  );
}
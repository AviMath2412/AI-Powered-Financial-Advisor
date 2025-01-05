import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
}

export default function ChatBot() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "नमस्ते! मैं आपका वित्तीय सलाहकार हूं। आप मुझसे वित्तीय सलाह के बारे में पूछ सकते हैं।", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { text: input, isBot: false }]);
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "मैं आपकी मदद करने की कोशिश करूंगा। कृपया अपना सवाल विस्तार से बताएं।", 
        isBot: true 
      }]);
    }, 1000);
    setInput('');
  };

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-lg">
      <div className="h-[400px] overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`${message.isBot ? 'bg-blue-100' : 'bg-green-100'} rounded-lg p-3 max-w-[80%]`}>
              {message.isBot && <Bot className="inline-block w-4 h-4 mr-2" />}
              <span className="text-gray-800">{message.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="अपना सवाल पूछें..."
          className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition-colors"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
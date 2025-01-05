export const getRandomResponse = (responses: string[]): string => {
  const index = Math.floor(Math.random() * responses.length);
  return responses[index];
};

export const isGreeting = (message: string): boolean => {
  const greetings = ['hello', 'hi', 'hey', 'नमस्ते', 'हैलो', 'हाय'];
  return greetings.some(greeting => 
    message.toLowerCase().includes(greeting.toLowerCase())
  );
};
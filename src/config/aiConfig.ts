// Add your OpenAI API key in the .env file
export const AI_CONFIG = {
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  maxTokens: 150
};
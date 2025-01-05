// OpenAI configuration
export const OPENAI_CONFIG = {
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  model: import.meta.env.VITE_OPENAI_MODEL || 'gpt-3.5-turbo',
  temperature: Number(import.meta.env.VITE_OPENAI_TEMPERATURE) || 0.7,
  maxTokens: Number(import.meta.env.VITE_OPENAI_MAX_TOKENS) || 150
} as const;

if (!OPENAI_CONFIG.apiKey) {
  console.warn('OpenAI API key is not configured in .env file');
}
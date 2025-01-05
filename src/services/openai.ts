import OpenAI from 'openai';
import { OPENAI_CONFIG } from '../config/openai';

const openai = new OpenAI({
  apiKey: OPENAI_CONFIG.apiKey,
  dangerouslyAllowBrowser: true
});

export const generateResponse = async (
  prompt: string, 
  language: string
): Promise<string> => {
  try {
    const systemPrompt = language === 'en' 
      ? "You are a helpful financial advisor. Provide clear, concise advice about personal finance, investments, and savings."
      : "आप एक सहायक वित्तीय सलाहकार हैं। व्यक्तिगत वित्त, निवेश और बचत के बारे में स्पष्ट, संक्षिप्त सलाह प्रदान करें।";

    const response = await openai.chat.completions.create({
      model: OPENAI_CONFIG.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: OPENAI_CONFIG.temperature,
      max_tokens: OPENAI_CONFIG.maxTokens,
    });

    return response.choices[0]?.message?.content || 'No response generated';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    throw error;
  }
};
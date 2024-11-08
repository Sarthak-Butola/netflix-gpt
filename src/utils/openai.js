import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';
import Groq from "groq-sdk";
import { GROQ_API_KEY } from './constants';

const openAi = new OpenAI({
  apiKey: OPEN_AI_KEY, // This is the default and can be omitted,
  dangerouslyAllowBrowser : true,

});

export default openAi



export const groq = new Groq({ apiKey: GROQ_API_KEY, dangerouslyAllowBrowser: true });
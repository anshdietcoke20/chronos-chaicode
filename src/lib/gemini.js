import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.GEMINI_API_KEY; 

const apikeyChecker = () => {
    if(!API_KEY){ 
        console.error('Error: Gemini API key not set in env variable') 
        process.exit(1);
    }
}; 

export const checkGemini = async () => {
    const {GoogleGenAI} = await import ('@google/genai');

    const client = new GoogleGenAI({
        apiKey: API_KEY,
    });

    if(!client){ 
        console.error('Error: Failed to initialise Gemini client'); 
        process.exit(1);
    }

    console.log('Gemini client initialised successfully');

    return client;
}
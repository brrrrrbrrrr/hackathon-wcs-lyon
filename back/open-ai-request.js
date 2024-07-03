import OpenAI from 'openai';
import dotenv from 'dotenv';

// Charge les variables d'environnement depuis le fichier .env
dotenv.config();

// Vérifiez que la clé API est bien chargée
if (!process.env.API_OPENAI_KEY) {
  console.error(
    'API key is missing. Please set your API key in the .env file.'
  );
  process.exit(1);
}

// Créez une instance de l'API OpenAI avec la clé API
const openai = new OpenAI({ apiKey: process.env.API_OPENAI_KEY });

async function createCompletion() {
  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: 'system', content: 'You are a helpful assistant.' }],
      model: 'gpt-3.5-turbo',
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error(
        'Quota exceeded. Please check your plan and billing details.'
      );
    } else if (error.response) {
      console.error(
        `Error: ${error.response.status} - ${error.response.data.message}`
      );
    } else {
      console.error('Error:', error.message);
    }
  }
}

async function main() {
  await createCompletion();
}

// Appeler la fonction principale
main();

import fetch from 'node-fetch';
import dotenv from 'dotenv';
import fs from 'fs';
import speech from '@google-cloud/speech';
dotenv.config();

// Simuler une transcription en utilisant une API de reconnaissance vocale
const transcribeAudio = (filePath) => {
  console.log('filePath :', filePath);
  return new Promise((resolve, reject) => {
    const client = new speech.SpeechClient();

    const request = {
      audio: {
        content: fs.readFileSync(filePath).toString('base64'),
      },
      config: {
        encoding: 'OGG_OPUS',
        sampleRateHertz: 48000,
        languageCode: 'fr-FR',
      },
    };
    console.log('request : ', request.audio.content);
    client
      .recognize(request)
      .then((response) => {
        console.log('response : ', response);
        const transcription = response[0].results
          .map((result) => result.alternatives[0].transcript)
          .join('\n');
        console.log("Transcription de l'API Google :", transcription);
        resolve(transcription);
      })
      .catch((err) => {
        console.error('Erreur lors de la transcription audio :', err.message);
        reject(err);
      });
  });
};
const analyzeText = (text) => {
  console.log('text :', text);
  const messages = [
    {
      role: 'system',
      content:
        "Vous êtes un assistant qui aide à évaluer l'inclusivité des questions d'entretien d'embauche.",
    },
    {
      role: 'user',
      content: `Évaluez les questions suivantes pour déterminer si elles sont inclusives et autorisées dans le cadre d'un entretien d'embauche :

[${text}]

Critères à considérer :

  Absence de sexisme : La question ne doit pas contenir de préjugés ou de stéréotypes basés sur le sexe ou le genre.
  Absence de racisme : Éviter toute référence raciale ou culturelle discriminatoire.
  Absence de validisme : Ne pas poser de questions qui pourraient discriminer ou stigmatiser les personnes en raison d'un handicap ou d'une condition médicale.
  Respect de la législation : Selon la législation en vigueur, éviter les questions sur des sujets tels que la situation familiale, la maternité/paternité, la religion, l'âge, etc., sauf si pertinents et autorisés par la loi.
  Diversité culturelle : La question ne doit pas exclure ou marginaliser les candidats en raison de leur origine ethnique, culturelle ou linguistique.
  Non-stéréotypage des genres : Éviter les stéréotypes de genre dans la formulation de la question.
  Respect de la vie privée et de la confidentialité : Ne pas poser de questions intrusives ou qui pourraient compromettre la vie privée des candidats.
  Langage inclusif et non-discriminatoire : Utiliser un langage respectueux et inclusif qui ne discrimine pas sur la base de l'identité de genre, de l'orientation sexuelle, de l'origine ethnique, etc.`,
    },
  ];

  return fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.API_OPENAI_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('DATA :', data);
      return data.choices[0].message.content;
    })
    .catch((error) => {
      console.error('Error analyzing text:', error);
      throw error;
    });
};

export { analyzeText, transcribeAudio };

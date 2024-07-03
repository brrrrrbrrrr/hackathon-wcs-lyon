import OpenAI from 'openai';
import dotenv from 'dotenv';
// import chart from  "./charte.json" assert { type: 'json' }

dotenv.config();

const openai = new OpenAI({ apiKey: process.env.API_OPENAI_KEY });

function createCompletion(req, res) {
  const question = req.body;
  const message = `"Évaluez la question suivante pour déterminer si elle est inclusive et autorisée dans le cadre d'un entretien d'embauche :

[${question}]

Critères à considérer :

    Absence de sexisme : La question ne doit pas contenir de préjugés ou de stéréotypes basés sur le sexe ou le genre.
    Absence de racisme : Éviter toute référence raciale ou culturelle discriminatoire.
    Absence de validisme : Ne pas poser de questions qui pourraient discriminer ou stigmatiser les personnes en raison d'un handicap ou d'une condition médicale.
    Respect de la législation : Selon la législation en vigueur, éviter les questions sur des sujets tels que la situation familiale, la maternité/paternité, la religion, l'âge, etc., sauf si pertinents et autorisés par la loi.
    Diversité culturelle : La question ne doit pas exclure ou marginaliser les candidats en raison de leur origine ethnique, culturelle ou linguistique.
    Non-stéréotypage des genres : Éviter les stéréotypes de genre dans la formulation de la question.
    Respect de la vie privée et de la confidentialité : Ne pas poser de questions intrusives ou qui pourraient compromettre la vie privée des candidats.
    Langage inclusif et non-discriminatoire : Utiliser un langage respectueux et inclusif qui ne discrimine pas sur la base de l'identité de genre, de l'orientation sexuelle, de l'origine ethnique, etc.`;

  console.log('question : ', question);

  openai.chat.completions
    .create({
      messages: [{ role: 'system', content: message + question }],
      model: 'gpt-3.5-turbo',
    })
    .then((completion) => {
      res.json({ content: completion.choices[0].message.content });
    })
    .catch((error) => {
      if (error.response && error.response.status === 429) {
        res.status(429).json({
          error: 'Quota exceeded. Please check your plan and billing details.',
        });
      } else if (error.response) {
        res
          .status(error.response.status)
          .json({ error: error.response.data.message });
      } else {
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
}

// const createCompletion = (req, res) => {
//   return console.log('je passe');
// };

export default createCompletion;

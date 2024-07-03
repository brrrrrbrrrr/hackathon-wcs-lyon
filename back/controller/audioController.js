import fs from 'fs';

import { transcribeAudio, analyzeText } from '../services/audioServices.js';

const uploadAudio = (req, res) => {
  const audioFilePath = req.file.path;

  transcribeAudio(audioFilePath)
    .then((transcript) => {
      analyzeText(transcript)
        .then((response) => {
          console.log('response : ', response);
          res.json({ transcript, analysis: response });
          fs.unlinkSync(audioFilePath); // Supprimer le fichier audio après traitement
        })
        .catch((error) => {
          console.error('Error analyzing text:', error);
          res.status(500).json({ error: 'Error analyzing text' });
        });
    })
    .catch((error) => {
      console.error('Error transcribing audio:', error);
      res.status(500).json({ error: 'Error transcribing audio' });
    });
};

export default uploadAudio;

import fs from 'fs';
import ffmpeg from 'fluent-ffmpeg';

const convertToMono = (inputPath, outputPath) => {
  return new Promise((resolve, reject) => {
    ffmpeg(inputPath)
      .audioChannels(1)
      .toFormat('wav') // Assurez-vous de convertir en wav pour Google Speech API
      .on('end', () => resolve(outputPath))
      .on('error', (err) => reject(err))
      .save(outputPath);
  });
};

const audioConversionMiddleware = (req, res, next) => {
  const audioFilePath = req.file.path;
  const monoFilePath = `mono_${req.file.filename}`;

  convertToMono(audioFilePath, monoFilePath)
    .then(() => {
      req.file.path = monoFilePath; // Met à jour le chemin du fichier dans la requête
      fs.unlinkSync(audioFilePath); // Supprime le fichier original
      next(); // Passe au middleware suivant ou au contrôleur
    })
    .catch((error) => {
      console.error('Erreur lors de la conversion en canal unique :', error);
      res
        .status(500)
        .json({ error: 'Erreur lors de la conversion en canal unique' });

      fs.unlinkSync(audioFilePath); // Supprime le fichier original en cas d'erreur
    });
};

export default audioConversionMiddleware;

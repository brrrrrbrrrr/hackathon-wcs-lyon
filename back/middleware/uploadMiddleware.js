import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: 'uploads/', // dossier de destination
  filename: function (req, file, cb) {
    // Générer un nom de fichier unique avec une extension .wav
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const originalName = path.parse(file.originalname).name;
    const fileName =
      originalName.toLowerCase().replace(/[^a-z0-9]/g, '_') +
      '-' +
      uniqueSuffix +
      '.wav';
    cb(null, fileName);
  },
});

const upload = multer({ storage: storage });

const uploadSingleAudio = upload.single('audio');

export default uploadSingleAudio;

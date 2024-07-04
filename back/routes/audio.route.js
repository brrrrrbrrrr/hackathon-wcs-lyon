import { Router } from 'express';
import uploadSingleAudio from '../middleware/uploadMiddleware.js';

import uploadAudio from '../controller/audioController.js';

const router = Router();

router.post('/upload', uploadSingleAudio, uploadAudio);

export default router;

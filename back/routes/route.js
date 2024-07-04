import { Router } from 'express';
import openai from './openai.route.js';
import audio from './audio.route.js';

const router = Router();

router.use('/open-ai', openai);
router.use('/audio', audio);

export default router;

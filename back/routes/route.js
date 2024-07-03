import { Router } from 'express';
import openai from './openai.route.js';


const router = Router();

router.use('/open-ai', openai);

export default router;

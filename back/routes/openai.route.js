import { Router } from 'express';
import createCompletion from '../controller/openAiController.js';

const router = Router();

router.post('/', createCompletion);

export default router;

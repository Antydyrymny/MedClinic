import express from 'express';
import getDocs from './getDocs.js';

const router = express.Router();

router.use('/getDocs', getDocs);

export default router;

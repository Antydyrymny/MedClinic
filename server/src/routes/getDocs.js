import express from 'express';
import establishConnection from '../../establishConnection.js';
import findData from '../models/findData.js';
import { Doctor } from '../models/initialData/doctors.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [() => findData(Doctor)];
    const data = await establishConnection(onConnection);
    res.json({ doctors: data[0] });
});

export default router;

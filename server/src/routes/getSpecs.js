import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Specialty } from '../models/initialData/specialities.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [() => findData(Specialty)];
    const data = await establishConnection(onConnection);
    res.json({ specialties: data[0] });
});

export default router;

import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Doctor } from '../models/initialData/doctors.js';

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const onConnection = [() => findData(Doctor)];
        const data = await establishConnection(onConnection);
        res.status(200).json({ doctors: data[0] });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

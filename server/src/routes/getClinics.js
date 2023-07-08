import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Clinic } from '../models/initialData/clinics.js';

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const onConnection = [() => findData(Clinic)];
        const data = await establishConnection(onConnection);
        res.status(200).json({ clinics: data[0] });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

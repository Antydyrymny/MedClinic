import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Clinic } from '../models/initialData/clinics.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [() => findData(Clinic)];
    const data = await establishConnection(onConnection);
    res.json({ clinics: data[0] });
});

export default router;

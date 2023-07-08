import express from 'express';
import establishConnection from '../../establishConnection.js';
import findData from '../models/findData.js';
import { Clinic } from '../models/initialData/clinics.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [() => findData(Clinic)];
    const clinics = await establishConnection(onConnection);
    res.json({ clinics });
});

export default router;

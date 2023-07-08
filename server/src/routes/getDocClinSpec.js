import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Doctor } from '../models/initialData/doctors.js';
import { Clinic } from '../models/initialData/clinics.js';
import { Specialty } from '../models/initialData/specialities.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [
        () => findData(Doctor),
        () => findData(Clinic),
        () => findData(Specialty),
    ];
    const data = await establishConnection(onConnection);
    res.json({ doctors: data[0], clinics: data[1], specialties: data[2] });
});

export default router;

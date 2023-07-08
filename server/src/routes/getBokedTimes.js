import express from 'express';
import establishConnection from '../../establishConnection.js';
import findData from '../models/findData.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const onConnection = [() => findData(BookedTime)];
    const bookedTimes = await establishConnection(onConnection);
    res.json({ bookedTimes });
});

export default router;

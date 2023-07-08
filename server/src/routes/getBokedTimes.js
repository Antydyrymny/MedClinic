import express from 'express';
import establishConnection from '../../establishConnection.js';
import findData from '../models/findData.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const doctorIds = req.query.docIds.split(',');
    const onConnection = [() => findData(BookedTime, { docId: { $in: doctorIds } })];
    const bookedTimes = await establishConnection(onConnection);
    res.json({ bookedTimes });
});

export default router;

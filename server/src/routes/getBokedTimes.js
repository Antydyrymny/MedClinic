import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.get('/', async (req, res) => {
    const doctorIds = req.query.docIds.split(',');
    const onConnection = [() => findData(BookedTime, { docId: { $in: doctorIds } })];
    const data = await establishConnection(onConnection);
    res.json({ bookedTimes: data[0] });
});

export default router;

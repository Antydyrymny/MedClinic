import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const doctorIds = req.query.docIds.split(',');
        const onConnection = [() => findData(BookedTime, { docId: { $in: doctorIds } })];
        const data = await establishConnection(onConnection);
        res.status(200).json({ bookedTimes: data[0] });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

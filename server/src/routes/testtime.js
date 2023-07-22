import express from 'express';
import dayjs from 'dayjs';

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const a = dayjs('2023-09-08T00:00:00.000+00:00').format('DD:MM:YYYY');
        const b = dayjs('Thu, 07 Sep 2023 21:00:00 GMT').format('DD:MM:YYYY');
        const c = dayjs('2023-09-08T00:00:00.000+00:00').isSame(
            dayjs('Thu, 07 Sep 2023 21:00:00 GMT'),
            'day'
        );
        res.status(200).json({ a, b, c });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

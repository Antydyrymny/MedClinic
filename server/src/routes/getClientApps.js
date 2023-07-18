import express from 'express';
import passport from 'passport';

const router = express.Router();
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const client = req.user;
    res.status(200).json({ appointments: client.bookedTimes });
});

export default router;

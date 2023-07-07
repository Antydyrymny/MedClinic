import express from 'express';

const router = express.Router();

router.use('/user', userRoute);
router.use('/person', personRoute);
router.use('/reviews', reviewRoute);
router.use('/:mediaType', mediaRoute);

export default router;
const a = 1;
const b = a + c;

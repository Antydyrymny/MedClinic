import express from 'express';
import getDocs from './getDocs.js';
import getClinics from './getClinics.js';
import getSpecs from './getSpecs.js';
import getBookedTimes from './getBokedTimes.js';
import getDocClinicSpec from './getDocClinSpec.js';
import register from './register.js';

const router = express.Router();

router.use('/getDocs', getDocs);
router.use('/getClinics', getClinics);
router.use('/getSpecs', getSpecs);
router.use('/getBookedTimes', getBookedTimes);
router.use('/getDocClinicSpec', getDocClinicSpec);
router.use('/register', register);

export default router;

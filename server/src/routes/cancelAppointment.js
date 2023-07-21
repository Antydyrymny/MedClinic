import express from 'express';
import passport from 'passport';
import dayjs from 'dayjs';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import saveData from '../dbRequests/saveData.js';
import { Client } from '../models/client.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.put('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const client = req.user;
    try {
        const { appointmentId, date, time } = req.body;

        let onConnection = [() => findData(BookedTime, { _id: appointmentId }, true)];
        const [doctorAppointmentDays] = await establishConnection(onConnection);

        if (!doctorAppointmentDays) {
            res.status(400).json({ error: 'No such doctor found' });
            return;
        }

        const appointmenDay = doctorAppointmentDays.bookedDateTime.find((entry) =>
            dayjs(entry.date).isSame(date, 'date')
        );
        if (
            !appointmenDay ||
            !appointmenDay.times.find((appointment) => appointment.time === time)
        ) {
            res.status(400).json({ error: 'Appointment not found' });
            return;
        }

        appointmenDay.times = appointmenDay.times.filter((t) => t !== time);
        if (!appointmenDay.times.length) {
            doctorAppointmentDays.bookedDateTime =
                doctorAppointmentDays.bookedDateTime.filter(
                    (entry) => entry !== appointmenDay
                );
        }
        client.bookedTimes = client.bookedTimes.filter(
            (app) => !dayjs(date).isSame(app.date, 'date') || time !== app.time
        );

        onConnection = [
            () => saveData(BookedTime, doctorAppointmentDays),
            () => saveData(Client, client),
        ];
        await establishConnection(onConnection);
        res.status(200).json({ message: 'Appointment successfully canceled' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

import express from 'express';
import passport from 'passport';
import dayjs from 'dayjs';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import saveData from '../dbRequests/saveData.js';
import { Client } from '../models/client.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const router = express.Router();
router.post('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
    const client = req.user;
    try {
        const { docId, date, time, followUp, specialityId, onlineAppointment, clinicId } =
            req.body;

        let onConnection = [() => findData(BookedTime, { docId }, true)];
        const [doctorAppointmentDays] = await establishConnection(onConnection);

        if (!doctorAppointmentDays) {
            res.status(400).json({ error: 'No such doctor found' });
            return;
        }

        // objects are serializable
        const backupClient = JSON.parse(JSON.stringify(client));
        const backupDoctorAppointmentDays = JSON.parse(
            JSON.stringify(doctorAppointmentDays)
        );

        const appointmenDay = doctorAppointmentDays.bookedDateTime.find((entry) =>
            dayjs(entry.date).isSame(date, 'date')
        );
        if (
            appointmenDay &&
            appointmenDay.times.find((appointment) => appointment.time === time)
        ) {
            // res.status(409).json({ error: 'Appointment slot is already booked' });
            res.status(409).json({ error: appointmenDay });
            return;
        }

        if (appointmenDay) {
            const newAppointment = { time, clientId: client._id };
            appointmenDay.times.push(newAppointment);
        } else {
            const newAppointmentDay = { date, times: [{ time, clientId: client._id }] };
            doctorAppointmentDays.bookedDateTime.push(newAppointmentDay);
        }
        const newClientAppointment = {
            appointmentId: doctorAppointmentDays._id,
            docId,
            date,
            time,
            followUp,
            specialityId,
            onlineAppointment,
            clinicId,
        };
        client.bookedTimes.push(newClientAppointment);
        onConnection = [
            () => saveData(BookedTime, doctorAppointmentDays),
            () => saveData(Client, client),
        ];
        const onFail = [
            () => saveData(BookedTime, backupDoctorAppointmentDays),
            () => saveData(Client, backupClient),
        ];

        await establishConnection(onConnection, onFail);
        res.status(200).json({ message: 'Appointment successfully booked' });
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

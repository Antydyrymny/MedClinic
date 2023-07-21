import express from 'express';
import dayjs from 'dayjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import saveData from '../dbRequests/saveData.js';
import deleteData from '../dbRequests/deleteData.js';
import { Client } from '../models/client.js';
import { BookedTime } from '../models/initialData/bookedTimes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const {
            name,
            surname,
            birthday,
            email,
            telephone,
            docId,
            date,
            time,
            followUp,
            specialityId,
            onlineAppointment,
            clinicId,
        } = req.body;

        let onConnection = [() => findData(BookedTime, { docId }, true)];
        const [doctorAppointmentDays] = await establishConnection(onConnection);

        if (!doctorAppointmentDays) {
            res.status(400).json({ error: 'No such doctor found' });
            return;
        }

        const appointmenDay = doctorAppointmentDays.bookedDateTime.find((entry) =>
            dayjs(entry.date).isSame(date, 'date')
        );
        if (
            appointmenDay &&
            appointmenDay.times.find((appointment) => appointment.time === time)
        ) {
            res.status(409).json({ error: 'Appointment slot is already booked' });
            return;
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
        const newClient = new Client({
            name,
            surname,
            birthday,
            email,
            telephone,
            password: telephone,
            bookedTimes: [newClientAppointment],
        });
        if (appointmenDay) {
            const newAppointment = { time, clientId: newClient._id };
            appointmenDay.times.push(newAppointment);
        } else {
            const newAppointmentDay = {
                date,
                times: [{ time, clientId: newClient._id }],
            };
            doctorAppointmentDays.bookedDateTime.push(newAppointmentDay);
        }
        onConnection = [
            () => saveData(Client, newClient),
            () => saveData(BookedTime, doctorAppointmentDays),
        ];
        const onFail = [() => deleteData(Client, { _id: newClient._id })];
        await establishConnection(onConnection, onFail, false);

        const jwtToken = jwt.sign(
            {
                id: newClient._id,
                email,
            },
            process.env.JWT_SECRET
        );
        res.status(200).json({
            message: 'Account created',
            token: jwtToken,
            name,
            surname,
        });
    } catch (error) {
        if (error.message.includes('Duplicate values found')) {
            const duplicates = error.message
                .split('Duplicate values found: ')[1]
                .split(', ');
            if (duplicates.includes('telephone') && duplicates.includes('email')) {
                res.status(409).json({
                    error: 'Telephone number and email are already in use',
                });
            } else if (duplicates.includes('telephone')) {
                res.status(409).json({ error: 'Telephone number already in use' });
            } else if (duplicates.includes('email')) {
                res.status(409).json({ error: 'Email already in use' });
            }
        } else {
            res.status(500).json({ error });
        }
    }
});

export default router;

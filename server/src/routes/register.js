import express from 'express';
import establishConnection from '../dbRequests/establishConnection.js';
import saveData from '../dbRequests/saveData.js';
import { Client } from '../models/client.js';

const router = express.Router();
router.post('/', async (req, res) => {
    const { name, surname, birthday, email, telephone, password } = req.body;
    const newClient = new Client({ name, surname, birthday, email, telephone, password });

    try {
        const onConnection = [() => saveData(Client, newClient)];
        await establishConnection(onConnection);

        res.json({ status: 'Data saved successfully' });
    } catch (error) {
        if (error.message.startsWith('Duplicate')) {
            const duplicates = error.message
                .split('Duplicate values found: ')[1]
                .split(', ');
            if (duplicates.includes('telephone') && duplicates.includes('email')) {
                res.status(400).json({
                    error: 'Telephone number and email are already in use',
                });
            } else if (duplicates.includes('telephone')) {
                res.status(400).json({ error: 'Telephone number already in use' });
            } else if (duplicates.includes('email')) {
                res.status(400).json({ error: 'Email already in use' });
            }
        } else {
            res.status(500).json({ error });
        }
    }
});

export default router;

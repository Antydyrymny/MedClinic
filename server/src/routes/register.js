import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import establishConnection from '../dbRequests/establishConnection.js';
import saveData from '../dbRequests/saveData.js';
import { Client } from '../models/client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const router = express.Router();
router.post('/', async (req, res) => {
    const { name, surname, birthday, email, telephone, password } = req.body;
    const newClient = new Client({ name, surname, birthday, email, telephone, password });

    try {
        const onConnection = [() => saveData(Client, newClient)];
        await establishConnection(onConnection);

        const jwtToken = jwt.sign(
            {
                id: newClient._id,
                email,
            },
            process.env.JWT_SECRET
        );
        res.status(200).json({
            message: 'Data saved successfully',
            token: jwtToken,
            name,
            surname,
            birthday,
            email,
            telephone,
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

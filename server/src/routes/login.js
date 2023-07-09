import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import establishConnection from '../dbRequests/establishConnection.js';
import findData from '../dbRequests/findData.js';
import { Client } from '../models/client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const router = express.Router();
router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body;
        const onConnection = [() => findData(Client, { email }, true)];
        const [clientWithEmail] = await establishConnection(onConnection);

        if (!clientWithEmail) {
            res.status(401).json({ message: 'Email or password does not match' });
        } else if (clientWithEmail.password !== password) {
            res.status(401).json({ message: 'Email or password does not match' });
        } else {
            const jwtToken = jwt.sign(
                {
                    id: clientWithEmail._id,
                    email: clientWithEmail.email,
                },
                process.env.JWT_SECRET
            );
            res.status(200).json({
                message: 'Login successful',
                token: jwtToken,
                name: clientWithEmail.name,
                surname: clientWithEmail.surname,
                birthday: clientWithEmail.birthday,
                email: clientWithEmail.email,
                telephone: clientWithEmail.telephone,
            });
        }
    } catch (error) {
        res.status(500).json({ error });
    }
});

export default router;

// const onConnection = [() => findData(Client, { email: 'IamHome@yourhome.boom1' }, true)];
// try {
//     const [clientWithEmail] = await establishConnection(onConnection);
//     console.log(clientWithEmail);
// } catch (error) {
//     console.log(error);
// }

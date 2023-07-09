import passport from 'passport';
import passportJwt from 'passport-jwt';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import establishConnection from '../../dbRequests/establishConnection.js';
import findData from '../../dbRequests/findData.js';
import { Client } from '../../models/client.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../../.env') });

const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;

passport.use(
    new StrategyJwt(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_SECRET,
        },
        async (jwtPayload, done) => {
            try {
                const onConnection = [
                    () => findData(Client, { _id: jwtPayload.id }, true),
                ];
                const [clientWithEmail] = await establishConnection(onConnection);
                if (clientWithEmail) done(null, clientWithEmail);
            } catch (error) {
                done(error);
            }
        }
    )
);

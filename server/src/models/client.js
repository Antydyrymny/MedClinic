import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    birthday: Date,
    email: { type: String, unique: true },
    telephone: { type: String, unique: true },
    password: String,
    bookedTimes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookedTime' }],
});

export const Client = mongoose.model('Client', clientSchema);

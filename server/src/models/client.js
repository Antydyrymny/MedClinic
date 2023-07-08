import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    birthday: Number,
    email: { type: String, unique: true },
    telephone: { type: String, unique: true },
    password: String,
    bookedTimes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BookedTimes' }],
});

export const Client = mongoose.model('Client', clientSchema);

import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    birthday: Date,
    email: { type: String, unique: true },
    telephone: { type: String, unique: true },
    password: String,
    bookedTimes: [
        {
            appointmentId: { type: mongoose.Schema.Types.ObjectId, ref: 'BookedTime' },
            date: Date,
            time: String,
            docId: Number,
            followUp: Boolean,
            specialityId: Number,
            onlineAppointment: Boolean,
            clinicId: Number,
        },
    ],
});

export const Client = mongoose.model('Client', clientSchema);

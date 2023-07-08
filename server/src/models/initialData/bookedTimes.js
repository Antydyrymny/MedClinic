import mongoose from 'mongoose';

export const timeSchema = new mongoose.Schema({
    time: String,
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', default: null },
});

export const bookedTimeSchema = new mongoose.Schema({
    id: { type: Number, unique: true },
    docId: { type: Number, unique: true },
    bookedDateTime: [
        {
            date: Date,
            times: [timeSchema],
        },
    ],
});

export const BookedTime = mongoose.model('BookedTime', bookedTimeSchema);

export const bookedTimes = [
    {
        id: 1,
        docId: 1,
        bookedDateTime: [
            {
                date: '2023-07-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                ],
            },
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [{ clientId: null, time: '11:00' }],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [{ clientId: null, time: '11:00' }],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [{ clientId: null, time: '12:00' }],
            },
        ],
    },
    {
        id: 2,
        docId: 2,
        bookedDateTime: [
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [{ clientId: null, time: '15:00' }],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [{ clientId: null, time: '12:00' }],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 3,
        docId: 3,
        bookedDateTime: [
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 4,
        docId: 4,
        bookedDateTime: [
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 5,
        docId: 5,
        bookedDateTime: [
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 6,
        docId: 6,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 7,
        docId: 7,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 8,
        docId: 8,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 9,
        docId: 9,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 10,
        docId: 10,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
        ],
    },
    {
        id: 11,
        docId: 11,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
        ],
    },
    {
        id: 12,
        docId: 12,
        bookedDateTime: [
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-18T00:00:00.000Z',
                times: [{ clientId: null, time: '09:00' }],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 13,
        docId: 13,
        bookedDateTime: [
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [{ clientId: null, time: '10:00' }],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 14,
        docId: 14,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [{ clientId: null, time: '15:00' }],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [{ clientId: null, time: '19:00' }],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [{ clientId: null, time: '15:00' }],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [{ clientId: null, time: '19:00' }],
            },
        ],
    },
    {
        id: 15,
        docId: 15,
        bookedDateTime: [
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [{ clientId: null, time: '16:00' }],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
        ],
    },
    {
        id: 16,
        docId: 16,
        bookedDateTime: [
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [{ clientId: null, time: '10:00' }],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [{ clientId: null, time: '13:00' }],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 17,
        docId: 17,
        bookedDateTime: [
            {
                date: '2023-07-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [{ clientId: null, time: '11:00' }],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [{ clientId: null, time: '11:00' }],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 18,
        docId: 18,
        bookedDateTime: [
            {
                date: '2023-07-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [{ clientId: null, time: '19:00' }],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-07-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [{ clientId: null, time: '19:00' }],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 19,
        docId: 19,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [{ clientId: null, time: '10:00' }],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [{ clientId: null, time: '13:00' }],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 20,
        docId: 20,
        bookedDateTime: [
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '16:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '09:00' },
                    { clientId: null, time: '12:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '16:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
        ],
    },
    {
        id: 21,
        docId: 21,
        bookedDateTime: [
            {
                date: '2023-07-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [{ clientId: null, time: '10:00' }],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-18T00:00:00.000Z',
                times: [{ clientId: null, time: '14:00' }],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-24T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                ],
            },
            {
                date: '2023-09-05T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-26T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
        ],
    },
    {
        id: 22,
        docId: 22,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-05T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-17T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-07-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-30T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-11T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-22T00:00:00.000Z',
                times: [{ clientId: null, time: '19:00' }],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 23,
        docId: 23,
        bookedDateTime: [
            {
                date: '2023-07-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-07-06T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-12T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-07-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-28T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-22T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-29T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-18T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-20T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
            {
                date: '2023-09-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '11:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '15:00' },
                    { clientId: null, time: '18:00' },
                    { clientId: null, time: '19:00' },
                ],
            },
        ],
    },
    {
        id: 24,
        docId: 24,
        bookedDateTime: [
            {
                date: '2023-07-03T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-10T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-07-19T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-01T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-02T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-08-03T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-08-07T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-09T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                ],
            },
            {
                date: '2023-08-11T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-15T00:00:00.000Z',
                times: [
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-16T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-08-17T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-21T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-23T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-25T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-08-31T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-04T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-07T00:00:00.000Z',
                times: [{ clientId: null, time: '18:00' }],
            },
            {
                date: '2023-09-08T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '17:00' },
                ],
            },
            {
                date: '2023-09-13T00:00:00.000Z',
                times: [
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-14T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-15T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
            {
                date: '2023-09-27T00:00:00.000Z',
                times: [
                    { clientId: null, time: '10:00' },
                    { clientId: null, time: '13:00' },
                    { clientId: null, time: '14:00' },
                    { clientId: null, time: '17:00' },
                    { clientId: null, time: '18:00' },
                ],
            },
            {
                date: '2023-09-28T00:00:00.000Z',
                times: [{ clientId: null, time: '17:00' }],
            },
        ],
    },
];

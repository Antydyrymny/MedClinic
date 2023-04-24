export const appointmentSchema = {
    worksWithVhi: false,
    followUp: false,
    worksWithKids: false,
    openedTab: 'Doctor',
    doctorId: null,
    specialityId: null,
    onlineAppointment: false,
    clinicId: null,
    date: null,
    time: null,
};
export const step1Schema = ['worksWithVhi', 'followUp', 'worksWithKids'];
export const step2Schema = ['openedTab', 'doctorId', 'specialityId'];
export const step3Schema = ['onlineAppointment', 'date', 'time', 'clinicId'];

export const appointmentSchema = {
    worksWithVhi: false,
    followUp: false,
    worksWithKids: false,
    openedTab: 'Doctor',
    doctorId: null,
    specialityId: null,
    clinicId: null,
    date: '',
    time: '',
};
export const step1Schema = ['worksWithVhi', 'followUp', 'worksWithKids'];
export const step2Schema = ['openedTab', 'doctorId', 'specialityId'];
export const step3Schema = ['date', 'time', 'clinicId'];

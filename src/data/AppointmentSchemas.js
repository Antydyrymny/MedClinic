export const appointmentSchema = {
    Vhi: false,
    followUp: false,
    child: false,
    openedTab: 'Doctor',
    doctorId: null,
    specialityId: null,
    clinicId: null,
    date: '',
    time: '',
};
export const step1Schema = ['Vhi', 'followUp', 'child'];
export const step2Schema = ['openedTab', 'doctorId', 'specialityId'];
export const step3Schema = ['date', 'time', 'clinicId'];

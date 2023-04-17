import { step2Schema, step3Schema } from '../data/AppointmentSchemas';

export function permitVisitApp3(currentData) {
    // Has any of the data options from step 2
    return Object.entries(currentData)
        .filter(([key, value]) => step2Schema.includes(key))
        .reduce((valid, [key, value]) => {
            return valid ? true : value !== '' && value !== null ? true : false;
        }, false);
}

export function permitVisitApp4(currentData) {
    // Has required data from step 3
    return Object.entries(currentData)
        .filter(([key, value]) => step3Schema.includes(key))
        .reduce((valid, [key, value]) => {
            return !valid ? false : value === '' || value === null ? false : true;
        }, true);
}

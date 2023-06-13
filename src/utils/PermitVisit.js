import { step2Schema, step3Schema } from '../data/AppointmentSchemas';

export function permitVisitApp3(currentData) {
    // Has any of the data options from step 2
    return Object.entries(currentData)
        .filter(([key, value]) => step2Schema.includes(key) && key !== 'openedTab')
        .reduce((valid, [key, value]) => {
            return valid ? true : value !== '' && value !== null ? true : false;
        }, false);
}

export function permitVisitApp4(currentData) {
    // Has all required data from step 3, except for online appointment OR clinic
    return Object.entries(currentData)
        .filter(([key, value]) => step3Schema.includes(key))
        .reduce((valid, [key, value]) => {
            // return !valid
            //     ? false
            //     : value === '' || value === null
            //     ? key === 'clinicId' && currentData.onlineAppointment
            //         ? true
            //         : false
            //     : true;
            if (!valid) return false;
            if (value === '' || value === null) {
                return key === 'clinicId' && currentData.onlineAppointment;
            } else return true;
        }, true);
}

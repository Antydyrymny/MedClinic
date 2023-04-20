import { appointmentSchema, step1Schema, step2Schema } from '../data/AppointmentSchemas';

export function clearAppData(appParams, setAppParams, stepToClearFrom) {
    if (stepToClearFrom === 1) {
        setAppParams(appointmentSchema);
    } else if (stepToClearFrom === 2) {
        const newParams = { ...appointmentSchema };
        step1Schema.forEach((param) => {
            newParams[param] = appParams[param];
        });
        setAppParams(newParams);
    } else if (stepToClearFrom === 3) {
        const newParams = { ...appointmentSchema };
        step1Schema.concat(step2Schema).forEach((param) => {
            newParams[param] = appParams[param];
        });
        setAppParams(newParams);
    } else if (stepToClearFrom === 4) {
        return;
    }
}

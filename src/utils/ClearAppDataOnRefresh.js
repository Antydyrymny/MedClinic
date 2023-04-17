import { appointmentSchema, step1Schema, step2Schema } from '../data/AppointmentSchemas';

export function ClearAppDataOnRefresh(appParams, setAppParams, currentStep) {
    if (currentStep === 1) {
        setAppParams(appointmentSchema);
    } else if (currentStep === 2) {
        const newParams = { ...appointmentSchema };
        step1Schema.forEach((param) => {
            newParams[param] = appParams[param];
        });
        setAppParams(newParams);
    } else if (currentStep === 3) {
        const newParams = { ...appointmentSchema };
        step1Schema.concat(step2Schema).forEach((param) => {
            newParams[param] = appParams[param];
        });
        setAppParams(newParams);
    } else if (currentStep === 4) {
        return;
    }
}

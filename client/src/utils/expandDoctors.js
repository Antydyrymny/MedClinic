export function expandDoctors(doctors, specialties, clinics) {
    return doctors.map((doc) => {
        const speciality = specialties.filter((spec) =>
            doc.specialtyId.includes(spec.id)
        );
        const clinic = clinics.filter((clinic) => doc.clinicId.includes(clinic.id));
        return { ...doc, speciality, clinic };
    });
}

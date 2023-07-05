export function filterDoctors(doctorsExpanded, searchParams) {
    return doctorsExpanded.filter((doc) => {
        const { name, worksWithVhi, worksWithKids, clinic, speciality } = searchParams;
        if (
            (name && !doc.name.toLowerCase().includes(name.toLowerCase())) ||
            (worksWithVhi && !doc.worksWithVhi) ||
            (worksWithKids && !doc.worksWithKids) ||
            // Works in ANY of the clinics
            (clinic &&
                clinic.length &&
                !clinic.reduce((docWorksInClinic, curClinic) => {
                    if (
                        docWorksInClinic ||
                        doc.clinic.map((c) => c.name).includes(curClinic.name)
                    ) {
                        return true;
                    } else return false;
                }, false)) ||
            // Has ALL the specializations
            (speciality &&
                speciality.length &&
                speciality.reduce((docLacksSpec, curSpec) => {
                    if (
                        docLacksSpec ||
                        !doc.speciality.map((s) => s.name).includes(curSpec.name)
                    ) {
                        return true;
                    } else return false;
                }, false))
        ) {
            return false;
        } else return true;
    });
}

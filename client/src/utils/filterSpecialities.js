export function filterSpecialities(specialties, specSearch) {
    return specialties.filter((s) =>
        specSearch ? s.name.toLowerCase().includes(specSearch.toLowerCase()) : true
    );
}

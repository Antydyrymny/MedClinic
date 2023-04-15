import { useState } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import Doctors from './Doctors';

const doctorFilterSchema = {
    name: '',
    worksWithVhi: false,
    worksWithKids: false,
    clinic: [],
    speciality: [],
};

function DoctorsContext() {
    const [searchParams, setSearchParams] = useState(doctorFilterSchema);
    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            <Doctors />
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;

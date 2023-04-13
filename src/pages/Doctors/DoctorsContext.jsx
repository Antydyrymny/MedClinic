import { useState } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';
import Doctors from './Doctors';

const emptyOptions = {
    name: '',
    worksWithVhi: false,
    worksWithKids: false,
    clinic: [],
    speciality: [],
};

function DoctorsContext() {
    const [searchParams, setSearchParams] = useState(emptyOptions);
    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            <Doctors />
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;

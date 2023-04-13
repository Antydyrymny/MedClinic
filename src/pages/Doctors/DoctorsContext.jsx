import { useState } from 'react';
import { DocSearchContext } from 'src/context/DocSearchContext';

const options = {
    name: '',
    worksWithVhi: false,
    worksWithKids: false,
    clinic: [],
    speciality: [],
};

function DoctorsContext({ children }) {
    const [searchParams, setSearchParams] = useState(options);
    return (
        <DocSearchContext.Provider value={[searchParams, setSearchParams]}>
            {children}
        </DocSearchContext.Provider>
    );
}

export default DoctorsContext;

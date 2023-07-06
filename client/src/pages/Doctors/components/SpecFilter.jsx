import { useMemo } from 'react';
import SearchBar from 'src/components/SearchBar/SearchBar';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { filterSpecialities } from 'src/utils/filterSpecialities';
import SmallSearchBar from './SmallSearchBar.module.css';

function SpecFilter({ specialties, onChange, checkedArray, specSearchState }) {
    const [specSearch, setSpecSearch] = specSearchState;
    const specsFiltered = useMemo(
        () => filterSpecialities(specialties, specSearch),
        [specialties, specSearch]
    );
    return (
        <>
            <SearchBar
                value={specSearch}
                onChange={setSpecSearch}
                placeholder={'Search by specialization'}
                showForm={false}
                customStyles={SmallSearchBar}
            />
            <CheckboxList
                points={specsFiltered}
                onChange={onChange}
                checkedArray={checkedArray}
                square={true}
                highlight={false}
                customLabel={{ color: '#545a66' }}
                maxHeight={'15rem'}
            />
        </>
    );
}

export default SpecFilter;

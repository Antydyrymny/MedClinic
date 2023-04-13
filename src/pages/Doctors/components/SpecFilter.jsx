import SearchBar from 'src/components/SearchBar/SearchBar';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import SpecFilterCss from './SpecFilter.module.css';

function SpecFilter({ points, onChange, checkedArray, specSearchState }) {
    const { specSearch, setSpecSearch } = specSearchState;
    const pointsFiltered = points.filter((p) =>
        specSearch ? p.name.toLowerCase().includes(specSearch.toLowerCase()) : true
    );
    return (
        <>
            <SearchBar
                value={specSearch}
                onChange={setSpecSearch}
                placeholder={'Search by specialization'}
                showForm={false}
            />
            <CheckboxList
                points={pointsFiltered}
                onChange={onChange}
                checkedArray={checkedArray}
            />
        </>
    );
}

export default SpecFilter;

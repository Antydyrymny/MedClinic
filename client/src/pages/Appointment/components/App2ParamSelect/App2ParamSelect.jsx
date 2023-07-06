import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import SearchBar from 'src/components/SearchBar/SearchBar';
import App2ParamSelectCss from './App2ParamSelect.module.css';

function App2ParamSelect({ openedTab, onClick, docSearchProp, specSearchProp }) {
    const [docSearch, setDocSearch] = docSearchProp;
    const [specSearch, setSpecSearch] = specSearchProp;

    return (
        <div className={App2ParamSelectCss.wrapper}>
            <div className={App2ParamSelectCss.options}>
                <OptionSelect
                    options={['Doctor', 'Speciality']}
                    onClick={onClick}
                    active={openedTab}
                />
            </div>
            <div className={App2ParamSelectCss.searchBar}>
                {openedTab === 'Doctor' && (
                    <SearchBar
                        value={docSearch}
                        onChange={setDocSearch}
                        placeholder={"Doctor's name"}
                        styling={'Blue'}
                    />
                )}
                {openedTab === 'Speciality' && (
                    <SearchBar
                        value={specSearch}
                        onChange={setSpecSearch}
                        placeholder={'Speciality'}
                        styling={'Blue'}
                    />
                )}
            </div>
        </div>
    );
}

export default App2ParamSelect;

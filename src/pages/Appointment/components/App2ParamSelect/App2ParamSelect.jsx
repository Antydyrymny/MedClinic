import SearchBar from 'src/components/SearchBar/SearchBar';
import App2ParamSelectCss from './App2ParamSelect.module.css';

function App2ParamSelect({ openedTab, onClick, docSearchProp, specSearchProp }) {
    const [docSearch, setDocSearch] = docSearchProp;
    const [specSearch, setSpecSearch] = specSearchProp;

    return (
        <div className={App2ParamSelectCss.wrapper}>
            <div className={App2ParamSelectCss.tabs}>
                <div
                    className={`${App2ParamSelectCss.tab} ${
                        openedTab === 'Doctor' ? App2ParamSelectCss.active : null
                    }`}
                    onClick={() => onClick('Doctor')}
                >
                    Doctor
                </div>
                <div
                    className={`${App2ParamSelectCss.tab} ${
                        openedTab === 'Speciality' ? App2ParamSelectCss.active : null
                    }`}
                    onClick={() => onClick('Speciality')}
                >
                    Spectiality
                </div>
            </div>
            {openedTab === 'Doctor' && (
                <SearchBar
                    value={docSearch}
                    onChange={setDocSearch}
                    placeholder={"Doctor's name"}
                />
            )}
            {openedTab === 'Speciality' && (
                <SearchBar
                    value={specSearch}
                    onChange={setSpecSearch}
                    placeholder={'Speciality'}
                />
            )}
            {/* onChange, placeholder, showForm = true, value */}
        </div>
    );
}

export default App2ParamSelect;

// openedTab={openedTab}
// onClick={openTab}
// docSearch={[docSearch, setDocSearch]}
// specSearch={[specSearch, setSpecSearch]}

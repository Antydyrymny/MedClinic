import SearchBarCss from './SearchBar.module.css';

function SearchBar({ onChange, placeholder, showForm = true, value }) {
    return showForm ? (
        <form>
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </form>
    ) : (
        <fieldset>
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
            />
        </fieldset>
    );
}

export default SearchBar;

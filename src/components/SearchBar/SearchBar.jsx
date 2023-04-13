import SearchBarCss from './SearchBar.module.css';

function SearchBar({ onChange, placeholder }) {
    return (
        <form>
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
            />
        </form>
    );
}

export default SearchBar;

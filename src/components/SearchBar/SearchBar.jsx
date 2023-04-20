import SearchSvg from 'src/assets/Pictogram/SearchSvg';
import SearchBarCss from './SearchBar.module.css';

function SearchBar({ onChange, placeholder, showForm = true, value, styling }) {
    return showForm ? (
        <form
            className={`${SearchBarCss.wrapper} ${
                styling === 'Blue'
                    ? SearchBarCss.blue
                    : styling === 'Black'
                    ? SearchBarCss.black
                    : SearchBarCss.minimal
            }`}
        >
            <SearchSvg />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={SearchBarCss.searchInput}
            />
        </form>
    ) : (
        <fieldset
            className={`${SearchBarCss.wrapper} ${
                styling === 'Blue'
                    ? SearchBarCss.blue
                    : styling === 'Black'
                    ? SearchBarCss.black
                    : SearchBarCss.minimal
            }`}
        >
            <SearchSvg />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={SearchBarCss.searchInput}
            />
        </fieldset>
    );
}

export default SearchBar;

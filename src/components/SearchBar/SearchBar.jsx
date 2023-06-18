import SearchSvg from 'src/assets/Pictogram/SearchSvg';
import SearchBarCss from './SearchBar.module.css';

function SearchBar({
    onChange,
    placeholder,
    showForm = true,
    value,
    styling,
    fontSize,
    customStyles,
}) {
    return showForm ? (
        <form
            className={`${SearchBarCss.wrapper} ${
                styling === 'Blue'
                    ? SearchBarCss.blue
                    : styling === 'Black'
                    ? SearchBarCss.black
                    : SearchBarCss.minimal
            } ${customStyles ? customStyles.wrapper : null}`}
        >
            <SearchSvg />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={`${SearchBarCss.searchInput} ${
                    customStyles ? customStyles.searchInput : null
                }`}
                style={{ fontSize: `${fontSize}rem` }}
                name={placeholder}
            />
        </form>
    ) : (
        <div
            className={`${SearchBarCss.wrapper} ${
                styling === 'Blue'
                    ? SearchBarCss.blue
                    : styling === 'Black'
                    ? SearchBarCss.black
                    : SearchBarCss.minimal
            } ${customStyles ? customStyles.wrapper : null}`}
        >
            <SearchSvg />
            <input
                type='text'
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                className={`${SearchBarCss.searchInput} ${
                    customStyles ? customStyles.searchInput : null
                }`}
                style={{ fontSize: `${fontSize}rem` }}
                name={placeholder}
            />
        </div>
    );
}

export default SearchBar;

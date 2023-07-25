import LoadingSpinner from '../../../assets/Pictogram/LoadingSpinner';
import MyLyoutCss from './MyContentLayout.module.css';

function MyContentLayout({
    children,
    screenWidth,
    mainMenuIsOpen,
    closeMenu,
    aboutToLoad,
    isLoading,
    errorWhileLoading,
}) {
    const smallScreen = screenWidth <= 1200;

    return (
        <div
            className={`${MyLyoutCss.wrapper} ${
                smallScreen || !mainMenuIsOpen ? MyLyoutCss.fullWidth : null
            }`}
        >
            <div
                className={MyLyoutCss.content}
                onClick={smallScreen && mainMenuIsOpen ? closeMenu : null}
            >
                {aboutToLoad || isLoading ? (
                    <LoadingSpinner />
                ) : errorWhileLoading ? (
                    <div>{`Error while loading data: ${errorWhileLoading}`}</div>
                ) : (
                    children
                )}
            </div>
        </div>
    );
}

export default MyContentLayout;

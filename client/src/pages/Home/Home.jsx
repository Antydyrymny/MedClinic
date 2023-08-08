import { useContext } from 'react';
import { WindowHeight, DocumentScroll } from '../../context/WindowDimensionsContext';
import HomeMainBar from './HomeMainBar';
import HomeCarousel from './HomeCarousel';
import HomeQuote from './HomeQuote';
import BottomBar from '../../components/BottomBar/BottomBar';

function Home() {
    const screenHeight = useContext(WindowHeight);
    const scroll = useContext(DocumentScroll);

    return (
        <div>
            <HomeMainBar />
            <HomeCarousel />
            <HomeQuote />
            {scroll >= 0.9 * screenHeight && <BottomBar />}
        </div>
    );
}

export default Home;

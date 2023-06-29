import HomeMainBar from './HomeMainBar';
import HomeCarousel from './HomeCarousel';
import HomeQuote from './HomeQuote';
import HomeCss from './Home.module.css';

function Home() {
    return (
        <div className={HomeCss.wrapper}>
            <HomeMainBar />
            <HomeCarousel />
            <HomeQuote />
        </div>
    );
}

export default Home;

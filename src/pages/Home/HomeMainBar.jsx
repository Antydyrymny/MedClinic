import { Link } from 'react-router-dom';
import ScrollDownArrow from '../../components/ScrollDownArrow/ScrollDownArrow';
import Button from '../../components/Button/Button';
import HomeCss from './HomeMainBar.module.css';

function HomeMainBar() {
    return (
        <section
            className={HomeCss.mainBar}
            style={{
                backgroundImage: 'url(/src/assets/Images/MainPageImg.png)',
            }}
        >
            <div className={HomeCss.mainBarContent}>
                <h1 className={HomeCss.mainHeading}>
                    Caring for the health of the whole family
                </h1>
                <div className={HomeCss.appointmentButton}>
                    <Link to={'/app/step1'}>
                        <Button
                            text={'Appointment'}
                            colored={'active'}
                            customStyles={HomeCss}
                        />
                    </Link>
                </div>
                <div className={HomeCss.aboutList}>
                    <ul>
                        <li>
                            <p className={HomeCss.aboutNumber}>4</p>
                            <p className={HomeCss.aboutInfo}>clinics and more to come</p>
                        </li>
                        <li>
                            <p className={HomeCss.aboutNumber}>11</p>
                            <p className={HomeCss.aboutInfo}>years of expert work</p>
                        </li>
                        <li>
                            <p className={HomeCss.aboutNumber}>24</p>
                            <p className={HomeCss.aboutInfo}>hours 7 days a week</p>
                        </li>
                        <li>
                            <p className={HomeCss.aboutNumber}>250+</p>
                            <p className={HomeCss.aboutInfo}>
                                skilled general practitioners
                            </p>
                        </li>
                    </ul>
                </div>
                <div className={HomeCss.scrollArrow}>
                    <ScrollDownArrow to={'mainCarousel'} offset={-50} />
                </div>
            </div>
        </section>
    );
}

export default HomeMainBar;

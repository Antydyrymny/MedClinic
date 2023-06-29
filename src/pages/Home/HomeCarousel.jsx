import { useState, useRef, useContext } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OptionSelect from '../../components/OptionSelect/OptionSelect';
import BackButton from '../Appointment/components/BackButton/BackButton';
import CarouselCss from './HomeCarousel.module.css';

function HomeCarousel() {
    const clinics = useContext(ClinicsContext);
    const [chosenClinic, setChosenClinic] = useState(clinics[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const settings = {
        focusOnSelect: true,
        swipeToSlide: true,
        infinite: false,
        speed: 300,
        slidesToShow: 2.3,
        lazyLoad: false,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex),
    };
    const sliderRef = useRef(null);

    return (
        <section className={CarouselCss.wrapper}>
            <div className={CarouselCss.container}>
                <div className={CarouselCss.content}>
                    <p className={CarouselCss.mainHeading}>
                        Our clinic is part of the international group of companies known
                        as Global HealthCare Network, comprising Clinics and Hospitals.
                    </p>
                    <OptionSelect
                        elementOptions={true}
                        options={clinics.map((clinic) => (
                            <div id={clinic.id}>
                                {
                                    <div>
                                        <p className={CarouselCss.clinicName}>
                                            {clinic.name
                                                .split(' ')
                                                .slice(0, -1)
                                                .join(' ')}
                                        </p>
                                        <p className={CarouselCss.address}>
                                            {clinic.address}
                                        </p>
                                    </div>
                                }
                            </div>
                        ))}
                        active={chosenClinic.id}
                        onClick={(clinicId) => {
                            setChosenClinic(
                                clinics.find((clinic) => clinic.id === clinicId)
                            );
                            sliderRef.current.slickGoTo(0, true);
                        }}
                        customStyles={CarouselCss}
                    />
                </div>
            </div>
            <div className={CarouselCss.sliderContainer}>
                <div className={CarouselCss.slider}>
                    <Slider {...settings} ref={sliderRef}>
                        {chosenClinic.photos.map((photo, ind) => (
                            <div key={ind} className={CarouselCss.slide}>
                                <div className={CarouselCss.imageContainer}>
                                    <img src={photo} alt={`${chosenClinic.name}`} />
                                    <div className={CarouselCss.imageBackground} />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className={CarouselCss.sliderNavigation}>
                    <BackButton
                        onClick={() => sliderRef.current.slickPrev()}
                        disabled={currentIndex === 0}
                        arrowCollor={'#D3DAE6'}
                        customStyles={CarouselCss}
                    />
                    <BackButton
                        onClick={() => sliderRef.current.slickNext()}
                        forward={true}
                        disabled={
                            currentIndex ===
                            chosenClinic.photos.length - settings.slidesToShow
                        }
                        arrowCollor={'#D3DAE6'}
                        customStyles={CarouselCss}
                    />
                </div>
            </div>
        </section>
    );
}

export default HomeCarousel;

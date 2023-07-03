import { useState, useRef, useContext, useEffect } from 'react';
import { ClinicsContext } from 'src/context/FetchDataContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import OptionSelect from '../../components/OptionSelect/OptionSelect';
import BackButton from '../Appointment/components/BackButton/BackButton';
import { addDragNDrop } from '../../utils/DragNDrop';
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
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 2 } },
            { breakpoint: 1000, settings: { slidesToShow: 1.7 } },
            { breakpoint: 800, settings: { slidesToShow: 1.5 } },
            { breakpoint: 600, settings: { slidesToShow: 1.2 } },
        ],
    };
    const clinicSelectRef = useRef(null);
    const clinicParentDivRef = useRef(null);
    const sliderRef = useRef(null);
    const [slidingDragNDropFunc, setSlidingDragNDropFunc] = useState(null);

    useEffect(() => {
        if (clinicSelectRef.current && clinicParentDivRef.current) {
            setSlidingDragNDropFunc(() =>
                addDragNDrop(clinicSelectRef.current, clinicParentDivRef.current)
            );
        }
    }, [clinicSelectRef, clinicParentDivRef]);

    return (
        <section id={'mainCarousel'} className={CarouselCss.wrapper}>
            <div className={CarouselCss.container}>
                <div ref={clinicParentDivRef} className={CarouselCss.content}>
                    <div className={CarouselCss.aboutList}>
                        <ul>
                            <li>
                                <p className={CarouselCss.aboutNumber}>4</p>
                                <p className={CarouselCss.aboutInfo}>
                                    clinics and more to come
                                </p>
                            </li>
                            <li>
                                <p className={CarouselCss.aboutNumber}>11</p>
                                <p className={CarouselCss.aboutInfo}>
                                    years of expert work
                                </p>
                            </li>
                            <li>
                                <p className={CarouselCss.aboutNumber}>24</p>
                                <p className={CarouselCss.aboutInfo}>
                                    hours 7 days a week
                                </p>
                            </li>
                            <li>
                                <p className={CarouselCss.aboutNumber}>250+</p>
                                <p className={CarouselCss.aboutInfo}>
                                    skilled general practitioners
                                </p>
                            </li>
                        </ul>
                    </div>
                    <p className={CarouselCss.mainHeading}>
                        Our clinic is part of the international group of companies known
                        as Global HealthCare Network, comprising Clinics and Hospitals.
                    </p>
                    <div
                        className={CarouselCss.optionSelect}
                        onDragStart={() => false}
                        onPointerDown={slidingDragNDropFunc}
                    >
                        <OptionSelect
                            customRef={clinicSelectRef}
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
            </div>
            <div className={CarouselCss.sliderContainer}>
                <div className={CarouselCss.sliderContent}>
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
            </div>
        </section>
    );
}

export default HomeCarousel;

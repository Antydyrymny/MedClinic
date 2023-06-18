import { Link } from 'react-router-dom';
import GalleryItemCss from './DoctorGalleryItem.module.css';

function DoctorGalleryItem({ doctor }) {
    return (
        <>
            {/* On normal size screens */}
            <div className={GalleryItemCss.largeScreen}>
                <Link to={`/doctors/${doctor.name.split(' ').join('-')}`}>
                    <img
                        className={GalleryItemCss.largePhoto}
                        src={doctor.largePhoto}
                        alt={doctor.name}
                    />
                    <div className={GalleryItemCss.infoBlock}>
                        <p className={GalleryItemCss.name}>{doctor.name}</p>
                        <p className={GalleryItemCss.spec}>
                            {doctor.speciality.map((spec, index) =>
                                index === doctor.speciality.length - 1
                                    ? spec.name
                                    : spec.name + ', '
                            )}
                        </p>
                    </div>
                </Link>
            </div>

            {/* On small screens */}
            <div className={GalleryItemCss.smallScreen}>
                <Link
                    className={GalleryItemCss.smallLink}
                    to={`/doctors/${doctor.name.split(' ').join('-')}`}
                >
                    <div className={GalleryItemCss.smallPhotoOuter}>
                        <div className={GalleryItemCss.smallPhotoInner}>
                            <img
                                className={GalleryItemCss.smallPhoto}
                                src={doctor.smallPhoto}
                                alt={doctor.name}
                            />
                        </div>
                    </div>
                    <div className={GalleryItemCss.smallInfoBlock}>
                        <p className={GalleryItemCss.name}>{doctor.name}</p>
                        <p className={GalleryItemCss.spec}>
                            {doctor.speciality.map((spec, index) =>
                                index === doctor.speciality.length - 1
                                    ? spec.name
                                    : spec.name + ', '
                            )}
                        </p>
                    </div>
                </Link>
            </div>
        </>
    );
}

export default DoctorGalleryItem;

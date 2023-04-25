import DocDescrCss from './DoctorShortDescription.module.css';

function DoctorShortDescription({ doctor }) {
    return (
        <div className={DocDescrCss.wrapper}>
            <div className={DocDescrCss.imgWrapper}>
                <img
                    className={DocDescrCss.photo}
                    src={doctor.smallPhoto}
                    alt={doctor.name}
                />
            </div>
            <div className={DocDescrCss.info}>
                <p className={DocDescrCss.name}>{doctor.name}</p>
                <p className={DocDescrCss.spec}>
                    {doctor.speciality
                        .map((spec) => spec.name + ', ')
                        .join('')
                        .split('')
                        .slice(0, -2)}
                </p>
                <p className={DocDescrCss.price}>{doctor.price}</p>
            </div>
        </div>
    );
}

export default DoctorShortDescription;

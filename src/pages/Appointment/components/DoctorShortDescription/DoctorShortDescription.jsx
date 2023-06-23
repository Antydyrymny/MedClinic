import DocDescrCss from './DoctorShortDescription.module.css';

function DoctorShortDescription({
    doctor,
    followUp = false,
    small = false,
    noPrice = false,
}) {
    return (
        <div className={DocDescrCss.wrapper}>
            <div className={DocDescrCss.imgWrapper}>
                <img
                    className={`${DocDescrCss.photo} ${small && DocDescrCss.smallPhoto}`}
                    src={doctor.smallPhoto}
                    alt={doctor.name}
                />
            </div>
            <div className={DocDescrCss.info}>
                <p className={`${DocDescrCss.name} ${small && DocDescrCss.smallName}`}>
                    {doctor.name}
                </p>
                <p className={DocDescrCss.spec}>
                    {doctor.speciality
                        .map((spec) => spec.name + ', ')
                        .join('')
                        .split('')
                        .slice(0, -2)}
                </p>
                {!noPrice && (
                    <p className={DocDescrCss.price}>
                        {(followUp ? doctor.price - 20 : doctor.price) + ' usd'}
                    </p>
                )}
            </div>
        </div>
    );
}

export default DoctorShortDescription;

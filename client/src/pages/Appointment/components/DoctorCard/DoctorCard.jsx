import CardCss from './DoctorCard.module.css';

function DoctorCard({ name, photo, specialities, clinics, price, onClick }) {
    return (
        <div className={CardCss.wrapper} onClick={onClick}>
            <div className={CardCss.photoInfo}>
                <img className={CardCss.photo} src={photo} alt={name} />
                <div className={CardCss.nameAndSpec}>
                    <p className={CardCss.name}>{name}</p>
                    <p className={CardCss.spec}>
                        {specialities
                            .map((spec) => spec.name + ', ')
                            .join('')
                            .split('')
                            .slice(0, -2)}
                    </p>
                </div>
            </div>
            <div className={CardCss.clinicInfo}>
                <p className={CardCss.clinicTitle}>Clinic Availability</p>
                {clinics.length === 1 ? (
                    <p className={CardCss.clinic}>{clinics[0].address}</p>
                ) : (
                    <div className={CardCss.multipleClinics}>
                        {clinics.map((clinic) => (
                            <p key={clinic.id} className={CardCss.clinic}>
                                {clinic.address}
                            </p>
                        ))}
                    </div>
                )}
            </div>
            <div className={CardCss.priceInfo}>
                <p className={CardCss.priceTitle}>Price</p>
                <p className={CardCss.price}>{`${price} usd`}</p>
            </div>
        </div>
    );
}

export default DoctorCard;

import SpecCardCss from './SpecCard.module.css';

function SpecCard({ specialityName, lowestPrice, doctors, onClick }) {
    return (
        <div className={SpecCardCss.wrapper} onClick={onClick}>
            <h2 className={SpecCardCss.heading}>{specialityName}</h2>
            <div className={SpecCardCss.priceBar}>
                <p className={SpecCardCss.priceTitle}>{'Appointment price'}</p>
                <p className={SpecCardCss.price}>{`from ${lowestPrice} usd`}</p>
            </div>
            <div className={SpecCardCss.photos}>
                {doctors.length < 4 ? (
                    doctors.map((d, index) => (
                        <div
                            key={d.id}
                            className={SpecCardCss.photoBorder}
                            style={{
                                zIndex: (index + 1).toString(),
                                left: (-6 * index).toString() + 'px',
                            }}
                        >
                            <img
                                src={d.smallPhoto}
                                alt={d.name}
                                className={SpecCardCss.photo}
                            />
                        </div>
                    ))
                ) : (
                    <>
                        {doctors.slice(0, 3).map((d, index) => (
                            <div
                                key={d.id}
                                className={SpecCardCss.photoBorder}
                                style={{
                                    zIndex: (index + 1).toString(),
                                    left: (-6 * index).toString() + 'px',
                                }}
                            >
                                <img
                                    src={d.smallPhoto}
                                    alt={d.name}
                                    className={SpecCardCss.photo}
                                />
                            </div>
                        ))}
                        <div
                            className={SpecCardCss.counter}
                            style={{
                                zIndex: '4',
                                left: '-1.125rem',
                            }}
                        >{`+${doctors.length - 3}`}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SpecCard;

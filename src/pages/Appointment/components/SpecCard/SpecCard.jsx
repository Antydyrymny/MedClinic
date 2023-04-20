import SpecCardCss from './SpecCard.module.css';

function SpecCard({ specialityName, lowestPrice, doctors, onClick }) {
    return (
        <div className={SpecCardCss.wrapper} onClick={onClick}>
            <h2 className={SpecCardCss.heading}>{specialityName}</h2>
            <div className={SpecCardCss.priceBar}>
                <p className={SpecCardCss.priceTitle}>{'Price'}</p>
                <p className={SpecCardCss.price}>{`from ${lowestPrice} usd`}</p>
            </div>
            <div className={SpecCardCss.photos}>
                {doctors.length < 3 ? (
                    doctors.map((d, index) => (
                        <div key={d.id} className={SpecCardCss.photoBorder}>
                            <img
                                src={d.smallPhoto}
                                alt={d.name}
                                className={`${SpecCardCss.photo} ${
                                    index !== 0 ? SpecCardCss.offset : null
                                }`}
                                style={{ zIndex: index + 1 }}
                            />
                        </div>
                    ))
                ) : (
                    <>
                        {doctors.slice(0, 3).map((d, index) => (
                            <div key={d.id} className={SpecCardCss.photoBorder}>
                                <img
                                    src={d.smallPhoto}
                                    alt={d.name}
                                    className={`${SpecCardCss.photo} ${
                                        index !== 0 ? SpecCardCss.offset : null
                                    }`}
                                    style={{ zIndex: index + 1 }}
                                />
                            </div>
                        ))}
                        <div
                            className={SpecCardCss.photoBorder}
                            style={{ zIndex: 4 }}
                        >{`+${doctors.length - 3}`}</div>
                    </>
                )}
            </div>
        </div>
    );
}

export default SpecCard;

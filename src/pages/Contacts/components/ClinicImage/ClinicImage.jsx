import ClinicImageCss from './ClinicImage.module.css';

function ClinicImage({ clinic, active, highlighted = false, onClick }) {
    return !clinic ? null : (
        <div className={ClinicImageCss.wrapper} onClick={onClick}>
            <div
                className={`${ClinicImageCss.photo} ${
                    active ? ClinicImageCss.photoActive : null
                }`}
            >
                <img
                    className={ClinicImageCss.img}
                    src={clinic.image}
                    alt={clinic.name}
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>
            <div
                className={`${ClinicImageCss.info} ${
                    active || highlighted ? ClinicImageCss.infoActive : null
                }`}
            >
                <div className={ClinicImageCss.titleBlock}>
                    <div className={ClinicImageCss.title}>{clinic.name}</div>
                    <div
                        className={`${ClinicImageCss.infoText} ${ClinicImageCss.workHours}`}
                    >
                        {clinic.workHours}
                    </div>
                </div>
                <div className={`${ClinicImageCss.infoText} ${ClinicImageCss.address}`}>
                    {clinic.address}
                </div>
            </div>
        </div>
    );
}

export default ClinicImage;

import ClinicImage from '../ClinicImage/ClinicImage';
import ClinicListCss from './ClinicList.module.css';

function ClinicList({ clinics, chosenClinic, onClick }) {
    return (
        <div className={ClinicListCss.wrapper}>
            {clinics.map((clinic) => (
                <div key={clinic.id} className={ClinicListCss.clinic}>
                    <ClinicImage
                        clinic={clinic}
                        active={clinic.id === chosenClinic?.id}
                        onClick={onClick(clinic)}
                    />
                </div>
            ))}
        </div>
    );
}

export default ClinicList;

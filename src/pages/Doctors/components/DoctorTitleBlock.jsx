import { Link } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import DoctorShortDescription from '../../Appointment/components/DoctorShortDescription/DoctorShortDescription';
import TitleBlockCss from './DoctorTitleBlock.module.css';

function DoctorTitleBlock({ doctor }) {
    return (
        <div className={TitleBlockCss.wrapper}>
            {/* Normal size window */}
            <div
                className={TitleBlockCss.largeWindow}
                style={{ backgroundImage: `url(${doctor.largePhoto})` }}
            >
                <div className={TitleBlockCss.largeInfo}>
                    <h1 className={TitleBlockCss.largeHeading}>
                        {
                            <>
                                <span>{doctor.name.split(' ')[0]}</span>
                                <br />
                                <span>{doctor.name.split(' ').slice(1).join(' ')}</span>
                            </>
                        }
                    </h1>
                    <div className={TitleBlockCss.largeSpecs}>
                        {doctor.speciality.map((spec, ind) =>
                            ind === doctor.speciality.length - 1
                                ? spec.name
                                : spec.name + ', '
                        )}
                    </div>
                    <div className={TitleBlockCss.largeButton}>
                        <Link to={`/app/step1?doctorId=${doctor.id}`}>
                            <Button
                                text={'Schedule an appointment'}
                                colored={'active'}
                                customStyles={TitleBlockCss}
                            />
                        </Link>
                    </div>
                    <div className={TitleBlockCss.clinicTitle}>Works in clinics:</div>
                    <ul className={TitleBlockCss.clinicList}>
                        {doctor.clinic.map((clinic) => (
                            <li key={clinic.id} className={TitleBlockCss.clinic}>
                                {
                                    <Link to={`/contacts?clinic=${clinic.id}`}>
                                        {clinic.name}
                                    </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Small size window */}
            <div className={TitleBlockCss.smallWindow}>
                <div className={TitleBlockCss.smallInfo}>
                    <DoctorShortDescription doctor={doctor} noPrice={true} />
                    <div
                        className={`${TitleBlockCss.clinicTitle} ${TitleBlockCss.smallClinicTitle}`}
                    >
                        Works in clinics:
                    </div>
                    <ul className={TitleBlockCss.clinicList}>
                        {doctor.clinic.map((clinic) => (
                            <li key={clinic.id} className={TitleBlockCss.clinic}>
                                {
                                    <Link to={`/contacts?clinicId=${clinic.id}`}>
                                        {clinic.name}
                                    </Link>
                                }
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={TitleBlockCss.smallButton}>
                    <Link to={`/app/step1?doctor=${doctor.id}`}>
                        <Button
                            text={'Schedule an appointment'}
                            colored={'active'}
                            customStyles={TitleBlockCss}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DoctorTitleBlock;

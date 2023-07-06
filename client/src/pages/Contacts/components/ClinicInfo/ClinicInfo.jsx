import ContactInfo from '../ContactInfo/ContactInfo';
import QualityAssurance from '../QualityAssurance/QualityAssurance';
import Button from '../../../../components/Button/Button';
import direction32px from 'src/assets/Pictogram/direction32px.png';
import ClinicInfoCss from './ClinicInfo.module.css';

function ClinicInfo({ clinic }) {
    return !clinic ? null : (
        <div className={ClinicInfoCss.wrapper}>
            <div
                className={`${ClinicInfoCss.contactInfo} ${ClinicInfoCss.screen1000ContactInfo}`}
            >
                <ContactInfo clinic={clinic} />
            </div>
            <div className={ClinicInfoCss.descriptionBlock}>
                <div className={ClinicInfoCss.description}>{clinic?.description}</div>
                <div className={ClinicInfoCss.directions}>
                    <Button
                        text={
                            <a
                                target={'_blank'}
                                rel={'noopener noreferrer'}
                                href={`https://www.google.ru/maps/dir/''/${clinic.address}`}
                                className={ClinicInfoCss.directionsBtn}
                            >
                                <img src={direction32px} alt={'directions'} />
                                <span className={ClinicInfoCss.directionsText}>
                                    {'GET DIRECTIONS'}
                                </span>
                            </a>
                        }
                    />
                </div>
            </div>
            <div className={ClinicInfoCss.contactBlock}>
                <div
                    className={`${ClinicInfoCss.contactInfo} ${ClinicInfoCss.contactInfoMain}`}
                >
                    <ContactInfo clinic={clinic} />
                </div>
                <div className={ClinicInfoCss.QualityAssurance}>
                    <QualityAssurance />
                </div>
            </div>
        </div>
    );
}

export default ClinicInfo;

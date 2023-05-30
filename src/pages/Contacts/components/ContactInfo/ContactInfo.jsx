import ContactInfoCss from './ContactInfo.module.css';

function ContactInfo({ clinic }) {
    return !clinic ? null : (
        <div className={ContactInfoCss.wrapper}>
            <h1 className={ContactInfoCss.heading}>Contacts</h1>
            <div className={ContactInfoCss.block}>
                <span className={ContactInfoCss.paramName}>Phone:</span>
                <a className={ContactInfoCss.link} href={`tel:${clinic.telephone}`}>
                    {clinic.telephone}
                </a>
            </div>
            <div className={ContactInfoCss.block}>
                <span className={ContactInfoCss.paramName}>Email:</span>
                <a className={ContactInfoCss.link} href={`mailto:${clinic.email}`}>
                    {clinic.email}
                </a>
            </div>
            <div className={ContactInfoCss.block}>
                <span className={ContactInfoCss.paramName}>Contact us:</span>
                <a
                    className={ContactInfoCss.link}
                    href={`whatsapp://send?phone=${clinic.telephone}/`}
                >
                    <img
                        src={'src/assets/Pictogram/whatsapp32px.png'}
                        alt={'contact via whatsapp'}
                    />
                </a>
            </div>
            <div className={ContactInfoCss.block}>
                <span className={ContactInfoCss.paramName}>For media:</span>
                <a className={ContactInfoCss.link} href={'mailto:media@fullstack.com'}>
                    media@fullstack.com
                </a>
            </div>
        </div>
    );
}

export default ContactInfo;

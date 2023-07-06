import GenericPage from '../../components/GenericPage/GenericPage';
import GenericPageContent from '../../components/GenericPage/GenericPageContent';
import GenericPageQuoteBlock from '../../components/GenericPage/GenericPageQuoteBlock';
import PartnersCss from './Partners.module.css';

function Partners() {
    return (
        <GenericPage
            modalButtonText={'become a partner'}
            modalButtonColor={'active'}
            modalFeedbackHeading={'Become a partner'}
            modalFeedbackText={
                'We invite specialists and organizations to mutually beneficial cooperation'
            }
            modalSendButtonText={'Send request'}
            modalOnSuccessMessage={'We will reach out to you shortly'}
            modalCustomBtnWrapper={PartnersCss}
            mainTitle='Reliable, Profitable, and Experienced: Partner with Fullstack Clinic'
            subTitle='Building Strong Collaborations for Successful Healthcare Solutions'
            children={
                <div className={PartnersCss.wrapper}>
                    <GenericPageContent
                        mainHeading={`Partner with Fullstack Clinic: Unlocking New Opportunities`}
                        p1={`Fullstack Clinic is a trusted name in the healthcare industry, known for its reliability, profitability, and extensive experience. We are dedicated to forging strong partnerships that drive successful healthcare solutions.`}
                        p2={`As a potential business partner, you can benefit from our established reputation, state-of-the-art infrastructure, and a track record of delivering exceptional patient care. By aligning with Fullstack Clinic, you gain access to a wide range of resources, expertise, and opportunities for growth.`}
                        subheading={`Joining Forces for Mutual Success`}
                        p3={`For doctors seeking to partner with us, Fullstack Clinic offers an ideal environment to thrive and make a significant impact. As a valued member of our team, you will have the opportunity to collaborate with top-tier professionals, leverage advanced medical technologies, and contribute to our shared mission of delivering comprehensive and patient-centered care.`}
                    />
                    <GenericPageQuoteBlock
                        quoteText={`"Partnering with Fullstack Clinic means joining a reputable and forward-thinking healthcare organization. We believe in fostering strong collaborations that lead to mutual success. Together, we can achieve remarkable outcomes and make a meaningful difference in the lives of our patients."`}
                    />
                </div>
            }
        />
    );
}

export default Partners;

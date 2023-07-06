import GenericPage from '../../components/GenericPage/GenericPage';
import GenericPageContent from '../../components/GenericPage/GenericPageContent';
import GenericPageQuoteBlock from '../../components/GenericPage/GenericPageQuoteBlock';
import ServCss from './Services.module.css';

function Services() {
    return (
        <GenericPage
            buttonText={'schedule'}
            buttonColor={'active'}
            linkTo={'/app/step1'}
            customBtnWrapper={ServCss}
            mainTitle='Discover the Range of Services We Offer'
            subTitle='A network of versatile medical and diagnostic centers'
            children={
                <div className={ServCss.wrapper}>
                    <GenericPageContent
                        mainHeading={`Fullstack Clinic: Your Trusted Destination for Comprehensive and Specialized Medical Services`}
                        p1={`At Fullstack Clinic, we take pride in offering an extensive range of exceptional medical services designed to meet your diverse healthcare needs. Our dedicated team of highly skilled healthcare professionals is committed to providing comprehensive care that exceeds your expectations.`}
                        p2={`With our state-of-the-art facilities and cutting-edge technology, we offer a wide array of services to address various medical conditions. From preventive care and diagnostics to specialized treatments and surgical interventions, we are here to deliver top-quality care throughout your healthcare journey.`}
                        subheading={`Specialized Care for Every Individual`}
                        p3={`We firmly believe in personalized care that focuses on you as an individual. Our healthcare professionals take the time to understand your unique concerns, medical history, and goals. Through collaborative decision-making, we develop customized treatment plans that prioritize your well-being.`}
                    />
                    <GenericPageQuoteBlock
                        quoteText={`"At Fullstack Clinic, our mission is to provide holistic and patient-centered care. Our interdisciplinary team works in harmony to ensure accurate diagnoses, effective treatments, and optimal outcomes. We strive to empower our patients with the knowledge and resources they need to make informed decisions about their health."`}
                    />
                </div>
            }
        />
    );
}

export default Services;

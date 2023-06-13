import GenericPage from '../../components/GenericPage/GenericPage';
import GenericPageContent from '../../components/GenericPage/GenericPageContent';
import GenericPageQuoteBlock from '../../components/GenericPage/GenericPageQuoteBlock';
import AboutCss from './About.module.css';

export default function About() {
    return (
        <GenericPage
            buttonText={'schedule'}
            buttonColor={'active'}
            linkTo={'/app/step1'}
            customBtnWrapper={AboutCss}
            mainTitle='A network of state-of-the-art clinics in a vibrant city'
            subTitle='A network of versatile medical and diagnostic centers'
            children={
                <div className={AboutCss.wrapper}>
                    <GenericPageContent
                        mainHeading={`Fullstack Clinic is a network of multidisciplinary medical
                            centers in London, including a pediatric medical center and a
                            laboratory`}
                        p1={`The branches of the network are located in the Westminster and
                            Hackney districts of the city, on Oxford Street and Mare
                            Street.`}
                        p2={`The main principles of the company are the combination of
                            family medicine traditions and the latest advancements in the
                            field of disease prevention and treatment. Fullstack Clinic
                            provides assistance to adults and children of all ages. Today,
                            Fullstack Clinic enjoys well-deserved trust from private
                            clients and insurance companies.`}
                        subheading={`It is part of the international group of companies known as
                            Global HealthCare Network, comprising Clinics and Hospitals.`}
                        p3={`Since 2001, Fullstack Clinic has become a part of the
                            international medical system known as Global HealthCare
                            Network, comprising Clinics and Hospitals. Being a part of
                            GHCN means adhering to international treatment standards and
                            selecting the best specialists.`}
                    />
                    <GenericPageQuoteBlock
                        quoteText={`The core of Fullstack Clinic is our team of skilled
                                General Practitioners. With expertise and dedication, our
                                practitioners handle diverse pathologies in various
                                domains. They adopt a comprehensive approach, working
                                closely with individuals and collaborating with
                                specialized experts as needed. This collaborative effort
                                ensures an accurate diagnosis, a coordinated treatment
                                plan, and thorough answers to your questions. Our aim is
                                to provide you with a seamless healthcare experience that
                                effectively addresses your needs and concerns.`}
                    />
                </div>
            }
        />
    );
}

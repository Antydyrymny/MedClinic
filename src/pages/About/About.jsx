import { useNavigate } from 'react-router-dom';
import GenericPage from '../../components/GenericPage/GenericPage';
import AboutCss from './About.module.css';

export default function About() {
    const navigate = useNavigate();

    return (
        <GenericPage
            children={
                <div className={AboutCss.wrapper}>
                    <article className={AboutCss.article}>
                        <h2 className={AboutCss.mainHeading}>
                            Fullstack Clinic is a network of multidisciplinary medical
                            centers in London, including a pediatric medical center and a
                            laboratory
                        </h2>
                        <p className={AboutCss.text}>
                            The branches of the network are located in the Westminster and
                            Hackney districts of the city, on Oxford Street and Mare
                            Street.
                        </p>
                        <br />
                        <p className={AboutCss.text}>
                            The main principles of the company are the combination of
                            family medicine traditions and the latest advancements in the
                            field of disease prevention and treatment. Fullstack Clinic
                            provides assistance to adults and children of all ages. Today,
                            Fullstack Clinic enjoys well-deserved trust from private
                            clients and insurance companies.
                        </p>
                        <h3 className={AboutCss.subHeading}>
                            It is part of the international group of companies known as
                            Global HealthCare Network, comprising Clinics and Hospitals.
                        </h3>
                        <p className={AboutCss.text}>
                            Since 2001, Fullstack Clinic has become a part of the
                            international medical system known as Global HealthCare
                            Network, comprising Clinics and Hospitals. Being a part of
                            GHCN means adhering to international treatment standards and
                            selecting the best specialists.
                        </p>
                    </article>
                    <div className={AboutCss.quoteBlock}>
                        <div className={AboutCss.quote}>
                            <img
                                src={'src/assets/Pictogram/quote.png'}
                                alt={'quote'}
                                className={AboutCss.quoteImg}
                            />
                            <div className={AboutCss.quoteText}>
                                {/* The foundation of Fullstack Clinic lies in general
                                practice physicians. Our team of experienced and dedicated
                                General Practitioners treat a wide range of pathologies
                                across various domains. They work comprehensively with
                                each individual, collaborating with specialized experts
                                whenever necessary. These experts provide consultations to
                                our physicians, allowing us to provide not just a
                                collection of separate consultations and examinations, but
                                rather an accurate diagnosis, a coordinated treatment
                                plan, and comprehensive answers to all your questions. Our
                                goal is to ensure you receive a seamless healthcare
                                experience that addresses your needs and concerns
                                effectively. */}
                                The core of Fullstack Clinic is our team of skilled
                                General Practitioners. With expertise and dedication, our
                                practitioners handle diverse pathologies in various
                                domains. They adopt a comprehensive approach, working
                                closely with individuals and collaborating with
                                specialized experts as needed. This collaborative effort
                                ensures an accurate diagnosis, a coordinated treatment
                                plan, and thorough answers to your questions. Our aim is
                                to provide you with a seamless healthcare experience that
                                effectively addresses your needs and concerns.
                            </div>
                            <div className={AboutCss.signatureBlock}>
                                <div className={AboutCss.signatureCredentials}>
                                    <div className={AboutCss.signatureName}>
                                        Samuel Chandra
                                    </div>
                                    <div className={AboutCss.signatureText}>
                                        head physician of Fullstack Clinic on Oxford
                                        Street
                                    </div>
                                </div>
                                <img
                                    src={'src/assets/Images/headDoctorSignature.png'}
                                    alt={'signature'}
                                    className={AboutCss.signatureImg}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            }
            buttonText={'schedule'}
            buttonColor={'active'}
            onBtnClick={() => navigate('/app/step1')}
            customBtnWrapper={AboutCss}
            mainTitle='A network of state-of-the-art clinics in a vibrant city'
            subTitle='A network of versatile medical and diagnostic centers'
        />
    );
}

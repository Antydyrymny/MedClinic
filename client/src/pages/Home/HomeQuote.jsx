import GenericPageQuoteBlock from '../../components/GenericPage/GenericPageQuoteBlock';
import QuoteCss from './HomeQuote.module.css';

function HomeQuote() {
    return (
        <section className={QuoteCss.quoteBar}>
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
                backgroundImg={true}
            />
        </section>
    );
}

export default HomeQuote;

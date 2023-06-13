import ContentCss from './GenericPageContent.module.css';

function GenericPageContent({ mainHeading, p1, p2, subheading, p3 }) {
    return (
        <article className={ContentCss.article}>
            <h2 className={ContentCss.mainHeading}>{mainHeading}</h2>
            <p className={ContentCss.text}>{p1}</p>
            <br />
            <p className={ContentCss.text}>{p2}</p>
            <h3 className={ContentCss.subHeading}>{subheading}</h3>
            <p className={ContentCss.text}>{p3}</p>
        </article>
    );
}

export default GenericPageContent;

import quotePng from 'src/assets/Pictogram/quote.png';
import headDoctorSignaturePng from 'src/assets/Images/headDoctorSignature.png';
import QuoteBlockCss from './GenericPageQuoteBlock.module.css';

function GenericPageQuoteBlock({ quoteText, backgroundImg = true }) {
    return (
        <div
            className={`${QuoteBlockCss.quoteBlock} ${
                backgroundImg ? QuoteBlockCss.background : null
            }`}
        >
            <div className={QuoteBlockCss.quote}>
                <img src={quotePng} alt={'quote'} className={QuoteBlockCss.quoteImg} />
                <div className={QuoteBlockCss.quoteText}>{quoteText}</div>
                <div className={QuoteBlockCss.signatureBlock}>
                    <div className={QuoteBlockCss.signatureCredentials}>
                        <div className={QuoteBlockCss.signatureName}>Samuel Chandra</div>
                        <div className={QuoteBlockCss.signatureText}>
                            head physician of Fullstack Clinic on Oxford Street
                        </div>
                    </div>
                    <img
                        src={headDoctorSignaturePng}
                        alt={'signature'}
                        className={QuoteBlockCss.signatureImg}
                    />
                </div>
            </div>
        </div>
    );
}

export default GenericPageQuoteBlock;

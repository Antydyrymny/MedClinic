import QuoteBlockCss from './GenericPageQuoteBlock.module.css';

function GenericPageQuoteBlock({ quoteText }) {
    return (
        <div className={QuoteBlockCss.quoteBlock}>
            <div className={QuoteBlockCss.quote}>
                <img
                    src={'src/assets/Pictogram/quote.png'}
                    alt={'quote'}
                    className={QuoteBlockCss.quoteImg}
                />
                <div className={QuoteBlockCss.quoteText}>{quoteText}</div>
                <div className={QuoteBlockCss.signatureBlock}>
                    <div className={QuoteBlockCss.signatureCredentials}>
                        <div className={QuoteBlockCss.signatureName}>Samuel Chandra</div>
                        <div className={QuoteBlockCss.signatureText}>
                            head physician of Fullstack Clinic on Oxford Street
                        </div>
                    </div>
                    <img
                        src={'src/assets/Images/headDoctorSignature.png'}
                        alt={'signature'}
                        className={QuoteBlockCss.signatureImg}
                    />
                </div>
            </div>
        </div>
    );
}

export default GenericPageQuoteBlock;

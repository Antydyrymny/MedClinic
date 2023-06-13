import GenericPage from '../../components/GenericPage/GenericPage';
import GenericPageContent from '../../components/GenericPage/GenericPageContent';
import GenericPageQuoteBlock from '../../components/GenericPage/GenericPageQuoteBlock';
import BusinessCss from './Business.module.css';

function Business() {
    return (
        <GenericPage
            modalButtonText={'Get an offer'}
            modalButtonColor={'active'}
            modalFeedbackHeading={'Contact Us'}
            modalFeedbackText={
                'We provide great plans for voluntary health insurance for companies. Reach out to us for more information.'
            }
            modalSendButtonText={'Send request'}
            modalOnSuccessMessage={'We will reach out to you shortly.'}
            modalCustomBtnWrapper={BusinessCss}
            mainTitle='Caring for Your Business and Your People: Voluntary Health Insurance for Companies'
            subTitle='Investing in the Well-being of Your Employees'
            children={
                <div className={BusinessCss.wrapper}>
                    <GenericPageContent
                        mainHeading={`Why Voluntary Health Insurance Matters`}
                        p1={`At Fullstack Clinic, we understand the importance of businesses caring for their personnel. Our voluntary health insurance plans for companies provide comprehensive coverage and valuable benefits to safeguard the well-being of your employees.`}
                        p2={`By partnering with Fullstack Clinic, you can offer your workforce access to high-quality healthcare services, including preventive care, specialized treatments, and personalized wellness programs. Our insurance plans are designed to promote employee health, increase job satisfaction, and foster a culture of well-being within your organization.`}
                        subheading={`Invest in Your Employees' Health`}
                        p3={`We offer tailored insurance solutions that address the unique needs of your business. Our team of experienced professionals will work closely with you to design a plan that aligns with your company's goals and budget. With Fullstack Clinic as your partner, you can prioritize the health and happiness of your employees, ensuring a thriving and productive workforce.`}
                    />
                    <GenericPageQuoteBlock
                        quoteText={`"At Fullstack Clinic, we believe that investing in the health of your employees is an investment in the success of your business. By providing voluntary health insurance, you demonstrate your commitment to the well-being of your workforce and create a positive work environment. Let us help you create a customized insurance plan that meets the unique needs of your company and supports the long-term growth and prosperity of your business."`}
                    />
                </div>
            }
        />
    );
}

export default Business;

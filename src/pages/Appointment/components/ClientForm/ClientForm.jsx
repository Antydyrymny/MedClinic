import InputField from 'src/components/InputField/InputField';
import Textarea from 'src/components/Textarea/Textarea';
import Checkbox from 'src/components/Checkbox/Checkbox';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import ClientFormCss from './ClientForm.module.css';

function ClientForm({ clientData, termsAcceptedData }) {
    const [client, setClient] = clientData;
    const [termsAccepted, setTermsAccepted] = termsAcceptedData;

    return (
        <div className={ClientFormCss.wrapper}>
            <form className={ClientFormCss.form}>
                <fieldset className={ClientFormCss.fieldset}>
                    <InputField
                        type={'text'}
                        label={'Surname*'}
                        required={true}
                        onChange={onChange('surname')}
                    />
                    <InputField
                        type={'text'}
                        label={'Name*'}
                        required={true}
                        onChange={onChange('name')}
                    />
                    <InputField
                        type={'text'}
                        label={'Date of birth*'}
                        required={true}
                        onChange={onChange('birthday')}
                    />
                </fieldset>
                <fieldset className={ClientFormCss.fieldset}>
                    <InputField
                        type={'tel'}
                        label={'Phone number*'}
                        required={true}
                        onChange={onChange('telephone')}
                    />
                    <InputField
                        type={'email'}
                        label={'Email'}
                        onChange={onChange('email')}
                    />
                </fieldset>
                <fieldset className={ClientFormCss.fieldset}>
                    <Textarea
                        placeholder={
                            'Describe yourPlease describe what is troubling you, your symptoms, or the purpose of your visit*'
                        }
                        onChange={onChange('commment')}
                    />
                </fieldset>
                <fieldset className={ClientFormCss.fieldset}>
                    <Checkbox
                        checked={termsAccepted}
                        onChange={(boolean) => setTermsAccepted(boolean)}
                        leftAligned={true}
                        highlight={false}
                    >
                        {
                            <>
                                <p className={ClientFormCss.checkbox}>
                                    I agree to the processing of my personal data and to
                                    the privacy policy,
                                </p>
                                <a
                                    className={ClientFormCss.download}
                                    href={termsAndConditions}
                                    download='terms-and-conditions.txt'
                                >
                                    including the terms and conditions.
                                </a>
                            </>
                        }
                    </Checkbox>
                </fieldset>
            </form>
        </div>
    );

    function onChange(inputName) {
        return (value) => setClient({ ...client, [inputName]: value });
    }
}

export default ClientForm;

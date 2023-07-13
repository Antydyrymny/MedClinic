import InputField from 'src/components/InputField/InputField';
import Textarea from 'src/components/Textarea/Textarea';
import Checkbox from 'src/components/Checkbox/Checkbox';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import IMask from 'imask';
import { validateClientData } from 'src/utils/validateClientData';
import ClientFormCss from './ClientForm.module.css';

function ClientForm({ clientData, termsAcceptedData, inputErrorsState }) {
    const [client, setClient] = clientData;
    const [termsAccepted, setTermsAccepted] = termsAcceptedData;
    const [inputErrors, setInputErrors] = inputErrorsState;

    return (
        <div className={ClientFormCss.wrapper}>
            <fieldset className={ClientFormCss.fieldset}>
                <div className={ClientFormCss.input}>
                    <InputField
                        value={client.surname}
                        type={'text'}
                        label={'Surname*'}
                        autocomplete={'family-name'}
                        required={true}
                        forceShowError={inputErrors.surname}
                        disableForceError={disableForceError('surname')}
                        onChange={onChange('surname')}
                        maxlength={30}
                        valid={validateClientData(client, { surname: true })}
                    />
                </div>
                <div className={ClientFormCss.input}>
                    <InputField
                        value={client.name}
                        type={'text'}
                        label={'Name*'}
                        autocomplete={'given-name'}
                        required={true}
                        forceShowError={inputErrors.name}
                        disableForceError={disableForceError('name')}
                        onChange={onChange('name')}
                        maxlength={25}
                        valid={validateClientData(client, { name: true })}
                    />
                </div>
                <div className={ClientFormCss.input}>
                    <InputField
                        value={client.birthday}
                        type={'text'}
                        label={'Date of birth*'}
                        autocomplete={'bday'}
                        placeholder={'__.__.____'}
                        required={true}
                        forceShowError={inputErrors.birthday}
                        disableForceError={disableForceError('birthday')}
                        onChange={onBirthdayChange}
                        maxlength={10}
                        valid={validateClientData(client, { birthday: true })}
                    />
                </div>
            </fieldset>
            <fieldset className={ClientFormCss.fieldset}>
                <div className={ClientFormCss.input}>
                    <InputField
                        value={client.telephone}
                        type={'tel'}
                        label={'Phone number*'}
                        placeholder={'+1 (___) ___ __ __'}
                        autocomplete={'tel'}
                        required={true}
                        forceShowError={inputErrors.telephone}
                        disableForceError={disableForceError('telephone')}
                        onChange={onTelChange}
                        maxlength={18}
                        valid={validateClientData(client, { telephone: true })}
                    />
                </div>
                <div className={ClientFormCss.input}>
                    <InputField
                        value={client.email}
                        type={'email'}
                        label={'Email'}
                        autocomplete={'email'}
                        required={true}
                        forceShowError={inputErrors.email}
                        disableForceError={disableForceError('email')}
                        onChange={onChange('email')}
                        maxlength={40}
                        valid={validateClientData(client, { email: true })}
                        errorMessage={'Invalid email'}
                    />
                </div>
            </fieldset>
            <fieldset className={ClientFormCss.fieldset}>
                <Textarea
                    value={client.comment}
                    placeholder={
                        'Please describe what is troubling you, your symptoms, or the purpose of your visit*'
                    }
                    onChange={onChange('comment')}
                    rows={5}
                />
            </fieldset>
            <fieldset className={ClientFormCss.fieldset}>
                <div className={ClientFormCss.agree}>
                    <Checkbox
                        checked={termsAccepted}
                        onChange={(boolean) => setTermsAccepted(boolean)}
                        leftAligned={true}
                        highlight={false}
                        pointer={false}
                    >
                        {
                            <div className={ClientFormCss.checkbox}>
                                <p className={ClientFormCss.checkboxText}>
                                    {`I agree to the processing of my personal data and to
                                    the privacy policy, `}
                                </p>
                                <a
                                    className={ClientFormCss.checkboxDownload}
                                    href={termsAndConditions}
                                    download='terms-and-conditions.txt'
                                >
                                    {`including the terms and conditions.`}
                                </a>
                            </div>
                        }
                    </Checkbox>
                </div>
            </fieldset>
        </div>
    );

    function onChange(inputName) {
        return (value) =>
            setClient((prevClient) => ({ ...prevClient, [inputName]: value }));
    }

    function onBirthdayChange(value) {
        const masked = IMask.createMask({
            mask: Date,
            min: new Date(new Date().getFullYear() - 120, 0, 1),
            max: new Date(new Date().getFullYear() - 18, 0, 1),
            lazy: true,
        });
        const maskedValue = masked.resolve(value);
        onChange('birthday')(maskedValue);
    }

    function onTelChange(value) {
        const masked = IMask.createMask({
            mask: '+1 (000) 000 00 00',
        });
        const maskedValue = masked.resolve(value);
        onChange('telephone')(maskedValue);
    }

    function disableForceError(field) {
        return () => setInputErrors((prevState) => ({ ...prevState, [field]: false }));
    }
}

export default ClientForm;

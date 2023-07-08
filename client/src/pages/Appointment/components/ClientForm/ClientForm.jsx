import InputField from 'src/components/InputField/InputField';
import Textarea from 'src/components/Textarea/Textarea';
import Checkbox from 'src/components/Checkbox/Checkbox';
import termsAndConditions from 'src/assets/Example terms and conditions.txt';
import IMask from 'imask';
import { validateClientData } from 'src/utils/validateClientData';
import dayjs from 'dayjs';
import ClientFormCss from './ClientForm.module.css';

function ClientForm({ clientData, termsAcceptedData }) {
    const [client, setClient] = clientData;
    const [termsAccepted, setTermsAccepted] = termsAcceptedData;
    // const now = dayjs().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

    return (
        <div className={ClientFormCss.wrapper}>
            <form className={ClientFormCss.form}>
                <fieldset className={ClientFormCss.fieldset}>
                    <div className={ClientFormCss.input}>
                        <InputField
                            value={client.surname}
                            type={'text'}
                            label={'Surname*'}
                            required={true}
                            onChange={onChange('surname')}
                            maxlength={20}
                            valid={validateClientData(client, { surname: true })}
                        />
                    </div>
                    <div className={ClientFormCss.input}>
                        <InputField
                            value={client.name}
                            type={'text'}
                            label={'Name*'}
                            required={true}
                            onChange={onChange('name')}
                            maxlength={20}
                            valid={validateClientData(client, { name: true })}
                        />
                    </div>
                    <div className={ClientFormCss.input}>
                        <InputField
                            value={client.birthday}
                            type={'text'}
                            label={'Date of birth*'}
                            placeholder={'__.__.____'}
                            required={true}
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
                            required={true}
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
                            onChange={onChange('email')}
                            valid={
                                client.email.length === 0 ||
                                validateClientData(client, { email: true })
                            }
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
            </form>
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
}

export default ClientForm;

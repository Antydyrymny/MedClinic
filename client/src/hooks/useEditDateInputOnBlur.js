import { useEffect } from 'react';
import dayjs from 'dayjs';

export default function useEditDateInputOnBlur(client, setClient, birthdayRef) {
    const minBday = dayjs()
        .year(dayjs().year() - 120)
        .format('YYYY-MM-DD');
    const maxBday = dayjs().format('YYYY-MM-DD');

    useEffect(() => {
        function onBlur() {
            const enteredDate = dayjs(client.birthday);
            let finalDate = enteredDate;
            if (enteredDate.isValid && enteredDate.isBefore(minBday)) {
                finalDate = minBday;
            } else if (enteredDate.isValid && enteredDate.isAfter(maxBday)) {
                finalDate = maxBday;
            }
            setClient((prevClient) => ({ ...prevClient, birthday: finalDate }));
        }

        let birthdayInputField = birthdayRef.current;
        if (birthdayInputField) {
            birthdayInputField.addEventListener('blur', onBlur);
        }
        return () => birthdayInputField.removeEventListener('blur', onBlur);
    }, [birthdayRef, client.birthday, setClient, maxBday, minBday]);
}

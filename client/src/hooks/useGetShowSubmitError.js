import { useEffect } from 'react';

export default function useGetShowSubmitError({
    setErrorMessage,
    showSubmitErrorTimerRef,
    setIsShowingSubmitError,
    allowSubmit,
    setInputErrors,
}) {
    useEffect(() => {
        if (allowSubmit) setIsShowingSubmitError(() => false);
    }, [allowSubmit, setIsShowingSubmitError]);

    return function (errorMessage, errorParams = null, duration = 3500) {
        setErrorMessage(errorMessage);
        // highlight the respective fields
        if (setInputErrors && errorParams) {
            const newParams = {};
            errorParams.forEach((p) => (newParams[p] = true));
            setInputErrors((prevState) => ({ ...prevState, ...newParams }));
        }
        // show timed error
        clearTimeout(showSubmitErrorTimerRef.current);
        setIsShowingSubmitError(true);
        showSubmitErrorTimerRef.current = setTimeout(
            () => setIsShowingSubmitError(() => false),
            duration
        );
    };
}

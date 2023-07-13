import { useEffect } from 'react';

export default function useGetShowSubmitError({
    setErrorMessage,
    showSubmitErrorTimerRef,
    setIsShowingSubmitError,
    allowSubmit,
}) {
    useEffect(() => {
        if (allowSubmit) setIsShowingSubmitError(() => false);
    }, [allowSubmit, setIsShowingSubmitError]);

    return function (errorMessage, duration = 3500) {
        setErrorMessage(errorMessage);
        clearTimeout(showSubmitErrorTimerRef.current);
        setIsShowingSubmitError(true);
        showSubmitErrorTimerRef.current = setTimeout(
            () => setIsShowingSubmitError(() => false),
            duration
        );
    };
}

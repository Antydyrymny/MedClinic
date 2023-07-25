import { useEffect, useRef, useCallback } from 'react';

export default function useDialog(onCloseCallback) {
    const dialogRef = useRef(null);

    const closeModalCallback = useCallback(
        function closeModal(e) {
            const dimensions = dialogRef.current.getBoundingClientRect();
            if (
                e.clientX < dimensions.left ||
                e.clientX > dimensions.right ||
                e.clientY < dimensions.top ||
                e.clientY > dimensions.bottom
            ) {
                dialogRef.current.close();
                onCloseCallback && onCloseCallback();
                document.removeEventListener('mousedown', closeModal);
            }
        },
        [onCloseCallback]
    );

    function onDialogOpen() {
        dialogRef.current.show();
        document.addEventListener('mousedown', closeModalCallback);
    }

    useEffect(() => {
        return () => document.removeEventListener('mousedown', closeModalCallback);
    }, [closeModalCallback]);

    return [dialogRef, onDialogOpen];
}

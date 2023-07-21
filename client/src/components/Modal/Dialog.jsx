import DialogCss from './Dialog.module.css';

function Dialog({
    dialog,
    openButton,
    children,
    inactive = false,
    customStyles = null,
    onClose = null,
    borderRadius = '1rem',
}) {
    return (
        <>
            <div
                className={`${customStyles?.customModalButton || DialogCss.modalButton}`}
                onClick={inactive ? null : onDialogOpen}
            >
                {openButton}
            </div>
            <dialog
                ref={dialog}
                className={`${customStyles?.dialog || DialogCss.dialog}`}
                style={{ borderRadius: `${borderRadius}` }}
            >
                {children}
            </dialog>
        </>
    );

    function onDialogOpen() {
        dialog.current.show();
        document.addEventListener('mousedown', closeModal);

        function closeModal(e) {
            const dimensions = dialog.current.getBoundingClientRect();
            if (
                e.clientX < dimensions.left ||
                e.clientX > dimensions.right ||
                e.clientY < dimensions.top ||
                e.clientY > dimensions.bottom
            ) {
                dialog.current.close();
                onClose && onClose();
                document.removeEventListener('mousedown', closeModal);
            }
        }
    }
}

export default Dialog;

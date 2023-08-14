import DialogCss from './Dialog.module.css';

function Dialog({
    dialog,
    openingButton,
    openDialog,
    children,
    inactive = false,
    customStyles = null,
    borderRadius = '1rem',
}) {
    return (
        <>
            <div
                className={`${DialogCss.modalButton} ${
                    customStyles ? customStyles.customModalButton : null
                }`}
                onClick={inactive ? null : openDialog}
            >
                {openingButton}
            </div>
            <dialog
                ref={dialog}
                className={`${DialogCss.dialog} ${
                    customStyles ? customStyles.dialog : null
                }`}
                style={{ borderRadius: `${borderRadius}` }}
            >
                {children}
            </dialog>
        </>
    );
}

export default Dialog;

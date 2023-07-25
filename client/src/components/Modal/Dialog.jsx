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
                className={`${customStyles?.customModalButton || DialogCss.modalButton}`}
                onClick={inactive ? null : openDialog}
            >
                {openingButton}
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
}

export default Dialog;

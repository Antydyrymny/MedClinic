import ModalCss from './Modal.module.css';

function Modal({
    modal,
    openButton,
    content,
    customStyles = null,
    onClose = null,
    borderRadius = '1rem',
}) {
    return (
        <>
            <div
                className={`${customStyles?.customModalButton || ModalCss.modalButton}`}
                onClick={() => modal.current.showModal()}
            >
                {openButton}
            </div>
            <dialog
                ref={modal}
                className={`${customStyles?.dialog || ModalCss.dialog}`}
                onMouseDown={outOfBorder}
                onTouchEnd={outOfBorder}
                style={{ borderRadius: `${borderRadius}` }}
            >
                {content}
            </dialog>
        </>
    );

    function outOfBorder(e) {
        const dimensions = modal.current.getBoundingClientRect();
        if (
            e.clientX < dimensions.left ||
            e.clientX > dimensions.right ||
            e.clientY < dimensions.top ||
            e.clientY > dimensions.bottom
        ) {
            modal.current.close();
            onClose && onClose();
        }
    }
}

export default Modal;

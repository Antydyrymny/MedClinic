import { useRef } from 'react';
import FilterSvg from '../../../assets/Pictogram/FilterSvg';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import DoctorFilter from './DoctorFilter';
import ClearButtonCss from './ModalClearButton.module.css';
import ModalFilterCss from './ModalFilter.module.css';

function ModalFilter({
    specSearchState,
    specialties,
    clinics,
    clearFilter,
    allowClearFilter,
}) {
    const modalRef = useRef(null);

    return (
        <Modal
            modal={modalRef}
            openButton={
                <div className={ModalFilterCss.filterSvg}>
                    <FilterSvg />
                </div>
            }
            borderRadius='0'
            content={
                <div className={ModalFilterCss.wrapper}>
                    <div className={ModalFilterCss.topBar}>
                        <div
                            className={ModalFilterCss.closeButton}
                            onClick={() => modalRef.current.close()}
                        >
                            <img
                                src={'/src/assets/Pictogram/close20px.png'}
                                alt={'close'}
                            />
                        </div>
                        <div className={ModalFilterCss.clearButton}>
                            <Button
                                text={'Clear'}
                                onClick={clearFilter}
                                colored='blue'
                                customStyles={ClearButtonCss}
                                notAllowed={!allowClearFilter}
                            />
                        </div>
                    </div>
                    <div className={ModalFilterCss.filter}>
                        <DoctorFilter
                            specSearchState={specSearchState}
                            specialties={specialties}
                            clinics={clinics}
                            border={false}
                        />
                    </div>
                    <div className={ModalFilterCss.confirm}>
                        <Button
                            text={'Confirm'}
                            onClick={() => modalRef.current.close()}
                            colored='active'
                            customStyles={ModalFilterCss}
                        />
                    </div>
                </div>
            }
        />
    );
}

export default ModalFilter;

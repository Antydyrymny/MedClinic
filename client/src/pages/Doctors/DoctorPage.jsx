import { useContext } from 'react';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { LoadingContext } from 'src/context/LoadingContext';
import { ErrorWhileLoadingContext } from '../../context/ErrorWhileLoadingContext';
import useRedirect from 'src/hooks/useRedirect';
import { useParams } from 'react-router-dom';
import LoadingSpinner from 'src/assets/Pictogram/LoadingSpinner';
import { expandDoctors } from '../../utils/expandDoctors';
import DoctorTitleBlock from './components/DoctorTitleBlock';
import DoctorAboutBlock from './components/DoctorAboutBlock';
import DocCss from './DoctorPage.module.css';

function DoctorPage() {
    const loading = useContext(LoadingContext);
    const errorWhileLoading = useContext(ErrorWhileLoadingContext);
    const doctors = useContext(DoctorsAllContext);
    const specialties = useContext(SpecialitiesContext);
    const clinics = useContext(ClinicsContext);
    const { name } = useParams();
    const doctor = loading
        ? null
        : doctors.find((doc) => doc.name === name.split('-').join(' '));
    useRedirect('/Not-Found', !doctor && !loading);
    if (!doctor && !loading) return null;
    const docExpanded = loading ? null : expandDoctors([doctor], specialties, clinics);

    return loading ? (
        <LoadingSpinner />
    ) : errorWhileLoading ? (
        <div>{`Error while loading data: ${errorWhileLoading}`}</div>
    ) : (
        <section className={DocCss.wrapper}>
            <div className={DocCss.titleBlock}>
                <DoctorTitleBlock doctor={docExpanded[0]} />
            </div>
            <div className={DocCss.aboutBlock}>
                <DoctorAboutBlock doctor={docExpanded[0]} />
            </div>
        </section>
    );
}

export default DoctorPage;

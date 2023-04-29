import { useContext } from 'react';
import dayjs from 'dayjs';
import { AppointmentFilterContext } from 'src/context/AppointmentFilterContext';
import {
    DoctorsAllContext,
    SpecialitiesContext,
    ClinicsContext,
} from 'src/context/FetchDataContext';
import { expandDoctors } from 'src/utils/ExpandDoctors';
import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import AppSummaryCss from './AppSummary.module.css';

function AppSummary() {
    const appParams = useContext(AppointmentFilterContext)[0];
    const doctors = useContext(DoctorsAllContext)[0];
    const specialities = useContext(SpecialitiesContext)[0];
    const clinics = useContext(ClinicsContext)[0];
    const doctor = doctors.find((d) => d.id === appParams.doctorId);
    const speciality = specialities.find((s) => s.id === appParams.specialityId);
    const clinic = clinics.find((c) => c.id === appParams.clinicId);
    const docExpanded = expandDoctors([doctor], specialities, clinics)[0];

    return (
        <div className={AppSummaryCss.wrapper}>
            <div className={AppSummaryCss.dateTime}>
                <div className={AppSummaryCss.dateBlock}>
                    <div className={AppSummaryCss.info}>
                        {dayjs(appParams.date).format('dddd, D MMMM')}
                    </div>
                    <div className={AppSummaryCss.heading}>date</div>
                </div>
                <div className={AppSummaryCss.timeBlock}>
                    <div className={AppSummaryCss.info}>{appParams.time}</div>
                    <div className={AppSummaryCss.heading}>time</div>
                </div>
            </div>
            <div className={AppSummaryCss.priceBlock}>
                <div className={AppSummaryCss.price}>{doctor.price}</div>
                <div className={AppSummaryCss.heading}>price</div>
            </div>
            <div className={AppSummaryCss.specBlock}>
                <div className={AppSummaryCss.info}>{speciality.name}</div>
                <div className={AppSummaryCss.heading}>speciality</div>
            </div>
            <div className={AppSummaryCss.doctor}>
                <DoctorShortDescription doctor={docExpanded} small={true} />
            </div>
            <div className={AppSummaryCss.clinicBlock}>
                <div className={AppSummaryCss.info}>{clinic.address}</div>
                <div className={AppSummaryCss.heading}>clinic address</div>
            </div>
        </div>
    );
}

export default AppSummary;

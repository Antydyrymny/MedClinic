import { useState } from 'react';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from '@emotion/react';
import { calendarTheme } from 'src/assets/CalendarTheme';
import DoctorTimeList from '../DoctorTimesList/DoctorTimeList';
import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { filterDoctors } from 'src/utils/FilterDoctors';
import { getShouldDisableDateFunc } from 'src/utils/getShouldDisableDateFunc';
import { getAvailableTimesPerDocForDate } from 'src/utils/GetAvailableTimesPerDocForDate';
import { onOnlineChange, onClinicCheck } from 'src/utils/Step3Handlers';
import SpecStep3Css from './SpecStep3.module.css';

function SpecStep3({ step3Data, bookedData, appParamsData }) {
    const [appParams, setAppParams] = appParamsData;
    const doctors = step3Data.docsAvailable;
    const onlineOptions = doctors.find((doc) => doc.worksOnline)
        ? ['In clinic', 'Online']
        : ['In clinic', ''];
    const clinics = Array.from(
        doctors
            .reduce((clinicsMap, doc) => {
                doc.clinic.forEach((c) => clinicsMap.set(c.name, c));
                return clinicsMap;
            }, new Map())
            .values()
    );
    const [clinicsPicked, setClinicsPicked] = useState(clinics);
    const docsAvailable = filterDoctors(doctors, { clinic: clinicsPicked });

    return (
        <div className={SpecStep3Css.wrapper}>
            <div className={SpecStep3Css.online}>
                <OptionSelect
                    options={onlineOptions}
                    active={appParams.onlineAppointment ? onlineOptions[1] : 'In clinic'}
                    disabled={!onlineOptions[1] ? [''] : []}
                    onClick={onOnlineChange(appParams, setAppParams)}
                />
            </div>
            <div className={SpecStep3Css.main}>
                <div className={SpecStep3Css.specClinicDate}>
                    <div className={SpecStep3Css.specInfo}>
                        <h4 className={SpecStep3Css.heading}>Chosen Speciality</h4>
                        <h3 className={SpecStep3Css.spec}>{step3Data.specName}</h3>
                        <p className={SpecStep3Css.price}>
                            {'from ' + step3Data.price + ' usd'}
                        </p>
                    </div>
                    {appParams.onlineAppointment ? null : (
                        <div className={SpecStep3Css.clinics}>
                            <h4 className={SpecStep3Css.heading}>Available clinics</h4>
                            <CheckboxList
                                points={clinics}
                                checkedArray={clinicsPicked.map((c) => c.id)}
                                onChange={onClinicCheck({
                                    clinics,
                                    clinicsPicked,
                                    setClinicsPicked,
                                    appParams,
                                    setAppParams,
                                    bookedData,
                                    doctors: docsAvailable,
                                })}
                            />
                        </div>
                    )}
                    <div className={SpecStep3Css.date}>
                        <h4 className={SpecStep3Css.heading}>Choose appointment date</h4>
                        <div className={SpecStep3Css.datepicker}>
                            <ThemeProvider theme={calendarTheme}>
                                <DateCalendar
                                    value={appParams.date ? dayjs(appParams.date) : null}
                                    onChange={(newDate) => {
                                        setAppParams({
                                            ...appParams,
                                            date: dayjs(newDate).toString(),
                                        });
                                    }}
                                    shouldDisableDate={getShouldDisableDateFunc({
                                        bookedData,
                                        doctors: docsAvailable,
                                        onlineAppointment: appParams.onlineAppointment,
                                        clinicsPicked,
                                    })}
                                />
                            </ThemeProvider>
                        </div>
                    </div>
                </div>
                {!appParams.date ? null : (
                    <div className={SpecStep3Css.doctorTime}>
                        <h4 className={SpecStep3Css.heading}>Select time</h4>
                        <h3 className={SpecStep3Css.dateHeading}>
                            {dayjs(appParams.date).format('dddd, D MMMM YYYY')}
                        </h3>
                        <div className={SpecStep3Css.doctorList}>
                            <DoctorTimeList
                                entries={getAvailableTimesPerDocForDate({
                                    date: appParams.date,
                                    doctors: docsAvailable,
                                    clinicsPicked,
                                    bookedData,
                                    onlineAppointment: appParams.onlineAppointment,
                                })}
                                online={appParams.onlineAppointment}
                                followUp={appParams.followUp}
                                onClick={(time, clinicId, doctorId) =>
                                    setAppParams({
                                        ...appParams,
                                        time: time,
                                        clinicId: clinicId,
                                        doctorId: doctorId,
                                    })
                                }
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SpecStep3;

import { useState } from 'react';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from '@emotion/react';
import { calendarTheme } from 'src/assets/CalendarTheme';
import DoctorTimeList from '../DoctorTimesList/DoctorTimeList';
import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { getBookedDates } from 'src/utils/GetBookedDates';
import { getExcludedDates } from 'src/utils/GetExcludedDates';
import { getAvailableTimesPerDocForDate } from 'src/utils/GetAvailableTimesPerDocForDate';
import { onOnlineChange, onClinicCheck, getCLinicForDate } from 'src/utils/Step3Handlers';
import SpecStep3Css from './SpecStep3.module.css';

function SpecStep3({ step3Data, bookedTimesData, appParamsData }) {
    const [appParams, setAppParams] = appParamsData;
    const doctors = step3Data.docsAvailable;
    const onlineOptions = doctors.find((doc) => doc.worksOnline)
        ? ['In clinic', 'Online']
        : ['In clinic', ''];
    const clinics = Array.from(
        doctors.reduce((clinicsSet, doc) => {
            doc.clinic.forEach((c) => clinicsSet.add(c));
            return clinicsSet;
        }, new Set())
    );
    const [clinicsPicked, setClinicsPicked] = useState(clinics.map((c) => c.id));
    const bookedDates = getBookedDates(doctors, bookedTimesData).map((date) =>
        dayjs(date)
    );

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
                        <p className={SpecStep3Css.price}>{step3Data.price + ' usd'}</p>
                    </div>
                    {appParams.onlineAppointment ? null : (
                        <div className={SpecStep3Css.clinics}>
                            <h4 className={SpecStep3Css.heading}>Available clinics</h4>
                            <CheckboxList
                                points={clinics}
                                checkedArray={clinicsPicked}
                                onChange={onClinicCheck({
                                    clinics,
                                    clinicsPicked,
                                    setClinicsPicked,
                                    appParams,
                                    setAppParams,
                                    bookedDates,
                                    doctors,
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
                                    shouldDisableDate={getExcludedDates(
                                        bookedDates,
                                        doctors,
                                        appParams.onlineAppointment,
                                        clinicsPicked
                                    )}
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
                                entries={getAvailableTimesPerDocForDate(
                                    appParams.date,
                                    doctors,
                                    bookedTimesData
                                ).map((entry) => ({
                                    ...entry,
                                    clinic: getCLinicForDate(entry, appParams, clinics),
                                }))}
                                onClick={(time, clinicId) =>
                                    setAppParams({
                                        ...appParams,
                                        time: time,
                                        clinicId: clinicId,
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

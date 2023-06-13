import { useState } from 'react';
import dayjs from 'dayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from '@emotion/react';
import { calendarTheme } from 'src/assets/CalendarTheme';
import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import TimeList from '../TimeList/TimeList';
import DropDown from 'src/components/DropDown/DropDown';
import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import { getShouldDisableDateFunc } from 'src/utils/getShouldDisableDateFunc';
import { getAvailableTimesPerDocForDate } from 'src/utils/GetAvailableTimesPerDocForDate';
import { onOnlineChange, onClinicCheck } from 'src/utils/Step3Handlers';
import DoctorStep3Css from './DoctorStep3.module.css';

function DoctorStep3({ step3Data, bookedData, appParamsData }) {
    const [appParams, setAppParams] = appParamsData;
    const doctor = step3Data.docsAvailable[0];
    const onlineOptions = doctor.worksOnline
        ? ['In clinic', 'Online']
        : ['In clinic', ''];
    const clinics = doctor.clinic;
    const [clinicsPicked, setClinicsPicked] = useState(clinics);

    return (
        <div className={DoctorStep3Css.wrapper}>
            <div className={DoctorStep3Css.online}>
                <OptionSelect
                    options={onlineOptions}
                    active={appParams.onlineAppointment ? onlineOptions[1] : 'In clinic'}
                    disabled={!onlineOptions[1] ? [''] : []}
                    onClick={onOnlineChange(appParams, setAppParams)}
                />
            </div>
            <div className={DoctorStep3Css.main}>
                <div className={DoctorStep3Css.doctorSpecClinic}>
                    <h4 className={DoctorStep3Css.heading}>Chosen doctor</h4>
                    <div className={DoctorStep3Css.doctor}>
                        <DoctorShortDescription doctor={doctor} />
                    </div>
                    {appParams.onlineAppointment ? null : (
                        <>
                            {doctor.speciality.length < 2 ? null : (
                                <DropDown
                                    options={doctor.speciality}
                                    activeId={appParams.specialityId}
                                    onClick={(spec) => {
                                        return () =>
                                            setAppParams({
                                                ...appParams,
                                                specialityId: spec.id,
                                            });
                                    }}
                                />
                            )}
                            <div className={DoctorStep3Css.clinics}>
                                <h4 className={DoctorStep3Css.heading}>
                                    Available clinics
                                </h4>
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
                                        doctors: [doctor],
                                    })}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className={DoctorStep3Css.date}>
                    <h4 className={DoctorStep3Css.heading}>Choose appointment date</h4>
                    <div className={DoctorStep3Css.datepicker}>
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
                                    doctors: [doctor],
                                    onlineAppointment: appParams.onlineAppointment,
                                    clinicsPicked,
                                })}
                            />
                        </ThemeProvider>
                    </div>
                </div>
                {!appParams.date ? null : (
                    <div className={DoctorStep3Css.timeBlock}>
                        <h4 className={DoctorStep3Css.heading}>Select time</h4>
                        <h3 className={DoctorStep3Css.dateHeading}>
                            {dayjs(appParams.date).format('dddd, D MMMM YYYY')}
                        </h3>
                        <div className={DoctorStep3Css.times}>
                            {getAvailableTimesPerDocForDate({
                                date: appParams.date,
                                doctors: [doctor],
                                clinicsPicked,
                                bookedData,
                                onlineAppointment: appParams.onlineAppointment,
                            }).map((entry) => (
                                <TimeList
                                    key={entry.doctor.id}
                                    online={appParams.onlineAppointment}
                                    clinic={entry.clinic}
                                    times={entry.times}
                                    onClick={(time, clinicId) =>
                                        setAppParams({
                                            ...appParams,
                                            time: time,
                                            clinicId: clinicId,
                                        })
                                    }
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DoctorStep3;

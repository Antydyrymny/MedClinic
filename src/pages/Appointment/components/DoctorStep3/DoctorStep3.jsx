import { useState } from 'react';
import { getBookedDates } from 'src/utils/GetBookedDates';
import { getExcludedDates } from 'src/utils/GetExcludedDates';
import { getAvailableTimesPerDocForDate } from 'src/utils/GetAvailableTimesPerDocForDate';
import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from '@emotion/react';
import { calendarTheme } from 'src/assets/CalendarTheme';
import dayjs from 'dayjs';
import DoctorShortDescription from '../DoctorShortDescription/DoctorShortDescription';
import SpecialSelect from '../SpecialSelect/SpecialSelect';
import DoctorStep3Css from './DoctorStep3.module.css';

function DoctorStep3({ step3Data, bookedTimesData, appParamsData }) {
    const [appParams, setAppParams] = appParamsData;
    const doctor = step3Data.docsAvailable[0];
    const onlineOptions = doctor.worksOnline
        ? ['In clinic', 'Online']
        : ['In clinic', ''];
    const clinics = doctor.clinic;
    const [clinicsPicked, setClinicsPicked] = useState(clinics.map((c) => c.id));
    const bookedDates = getBookedDates([doctor], bookedTimesData).map((date) =>
        dayjs(date)
    );

    return (
        <div className={DoctorStep3Css.wrapper}>
            <div className={DoctorStep3Css.where}>
                <OptionSelect
                    options={onlineOptions}
                    active={appParams.onlineAppointment ? onlineOptions[1] : 'In clinic'}
                    disabled={!onlineOptions[1] ? [''] : []}
                    onClick={onOnlineChange}
                />
            </div>
            <div className={DoctorStep3Css.main}>
                <div className={DoctorStep3Css.doctorSpecClinic}>
                    <h4 className={DoctorStep3Css.heading}>Chosen doctor</h4>
                    <DoctorShortDescription doctor={doctor} />
                    {appParams.onlineAppointment ? null : (
                        <>
                            <SpecialSelect
                                options={doctor.speciality}
                                activeId={appParams.specialityId}
                                onClick={(id) =>
                                    setAppParams({ ...appParams, specialityId: id })
                                }
                            />
                            <div className={DoctorStep3Css.clinics}>
                                <h4 className={DoctorStep3Css.heading}>
                                    Available clinics
                                </h4>
                                <CheckboxList
                                    points={clinics}
                                    checkedArray={clinicsPicked}
                                    onChange={onClinicCheck}
                                />
                            </div>
                        </>
                    )}
                </div>
                <div className={DoctorStep3Css.datepicker}>
                    <ThemeProvider theme={calendarTheme}>
                        <DateCalendar
                            value={appParams.date ? dayjs(appParams.date) : null}
                            onChange={(newDate, selectionState) => {
                                setAppParams({
                                    ...appParams,
                                    date: dayjs(newDate).toString(),
                                });
                                if (!appParams.data) selectionState = null;
                            }}
                            disablePast
                            shouldDisableDate={getExcludedDates(
                                bookedDates,
                                [doctor],
                                appParams.onlineAppointment,
                                clinicsPicked
                            )}
                            maxDate={dayjs().month(dayjs().month() + 2)}
                            dayOfWeekFormatter={dayOfWeekFormatter}
                            disableHighlightToday={true}
                            views={['month', 'day']}
                        />
                    </ThemeProvider>
                </div>
                <div className={DoctorStep3Css.time}>
                    {!appParams.date ? null : (
                        <div>
                            {getAvailableTimesPerDocForDate(
                                appParams.date,
                                [doctor],
                                bookedTimesData
                            ).map((entry) => (
                                <div key={entry.doctor.id}>
                                    <>
                                        <span>{`Doctor: ${entry.doctor.name}`}</span>
                                        {entry.times.map((time, ind) => (
                                            <div
                                                key={ind}
                                                onClick={() =>
                                                    console.log(
                                                        entry.doctor.name,
                                                        time,
                                                        appParams.date,
                                                        `clinic: ` +
                                                            entry.doctor.clinicSchedule[
                                                                dayjs(
                                                                    appParams.date
                                                                ).day() - 1
                                                            ]
                                                    )
                                                }
                                            >
                                                {time}
                                            </div>
                                        ))}
                                    </>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    function onOnlineChange(tabName) {
        setAppParams({
            ...appParams,
            onlineAppointment: tabName === 'In clinic' ? false : true,
        });
    }

    function onClinicCheck(boolean, clinicName) {
        let newClinicsPicked = null;
        if (!boolean && clinicsPicked.length === 1) return;
        else if (boolean) {
            newClinicsPicked = [
                ...clinicsPicked,
                clinics.find((c) => c.name === clinicName).id,
            ];
            setClinicsPicked(newClinicsPicked);
        } else if (!boolean) {
            newClinicsPicked = clinicsPicked.filter(
                (clinic) => clinics.find((c) => c.id === clinic).name !== clinicName
            );
            setClinicsPicked(newClinicsPicked);
        }
        if (
            !boolean &&
            getExcludedDates(
                bookedDates,
                [doctor],
                appParams.onlineAppointment,
                newClinicsPicked
            )(dayjs(appParams.date))
        )
            setAppParams({ ...appParams, date: null });
    }

    function dayOfWeekFormatter(day) {
        return day.charAt(0).toUpperCase() + day.charAt(1);
    }
}

export default DoctorStep3;

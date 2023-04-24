import { useState } from 'react';
import { getBookedDates } from 'src/utils/GetBookedDates';
import { getExcludedDates } from 'src/utils/GetExcludedDates';
import OptionSelect from 'src/components/OptionSelect/OptionSelect';
import CheckboxList from 'src/components/CheckboxList/CheckboxList';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { ThemeProvider } from '@emotion/react';
import { calendarTheme } from 'src/assets/CalendarTheme';
import dayjs from 'dayjs';
import DoctorStep3Css from './DoctorStep3.module.css';

function DoctorStep3({ step3Data, bookedTimesData, appParamsData }) {
    const [appParams, setAppParams] = appParamsData;
    const onlineOptions = step3Data.docsAvailable[0].worksOnline
        ? ['In clinic', 'Online']
        : ['In clinic', ''];
    const clinics = step3Data.docsAvailable[0].clinic;
    const [clinicsPicked, setClinicsPicked] = useState(clinics.map((c) => c.id));
    const bookedDates = getBookedDates(step3Data.docsAvailable, bookedTimesData).map(
        (date) => dayjs(date)
    );

    return (
        <div className={DoctorStep3Css.wrapper}>
            <OptionSelect
                options={onlineOptions}
                active={appParams.onlineAppointment ? onlineOptions[1] : 'In clinic'}
                disabled={!onlineOptions[1] ? [''] : []}
                onClick={onOnlineChange}
            />
            <>
                {appParams.onlineAppointment ? null : (
                    <CheckboxList
                        points={clinics}
                        checkedArray={clinicsPicked}
                        onChange={onClinicCheck}
                    />
                )}
            </>
            <div className={DoctorStep3Css.datepicker}>
                <ThemeProvider theme={calendarTheme}>
                    <DateCalendar
                        value={appParams.date}
                        onChange={(newDate) =>
                            setAppParams({ ...appParams, date: newDate })
                        }
                        disablePast
                        shouldDisableDate={getExcludedDates(
                            bookedDates,
                            step3Data.docsAvailable,
                            appParams.onlineAppointment,
                            clinicsPicked
                        )}
                        maxDate={dayjs().month(dayjs().month() + 2)}
                        dayOfWeekFormatter={dayOfWeekFormatter}
                        disableHighlightToday={true}
                    />
                </ThemeProvider>
            </div>
            <div>{step3Data.docsAvailable.map((d) => d.name)}</div>
            <div>
                {bookedDates.map((date, ind) => {
                    const d = new Date(date);
                    return <div key={ind}>{`${d.getMonth()}.${d.getDate()}`}</div>;
                })}
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
        if (!boolean && clinicsPicked.length === 1) return;
        else if (boolean) {
            setClinicsPicked([
                ...clinicsPicked,
                clinics.find((c) => c.name === clinicName).id,
            ]);
        } else if (!boolean) {
            setClinicsPicked(
                clinicsPicked.filter(
                    (clinic) => clinics.find((c) => c.id === clinic).name !== clinicName
                )
            );
        }
    }

    function dayOfWeekFormatter(day) {
        return day.charAt(0).toUpperCase() + day.charAt(1);
    }
}

export default DoctorStep3;

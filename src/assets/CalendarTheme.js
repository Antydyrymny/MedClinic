import dayjs from 'dayjs';
import { createTheme } from '@mui/material';

export const calendarTheme = createTheme({
    components: {
        MuiDateCalendar: {
            defaultProps: {
                disablePast: true,
                maxDate: dayjs().month(dayjs().month() + 2),
                dayOfWeekFormatter: dayOfWeekFormatter,
                // disableHighlightToday: true,
                reduceAnimations: true,
                views: ['month', 'day'],
            },
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    '&.Mui-selected': {
                        background:
                            'linear-gradient(90deg,rgb(47,126,235) 0%,rgb(24,190,231) 100%)',
                    },
                },
            },
        },
    },
});

function dayOfWeekFormatter(day) {
    return day.charAt(0).toUpperCase() + day.charAt(1);
}

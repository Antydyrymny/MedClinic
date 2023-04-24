import { createTheme } from '@mui/material';

export const calendarTheme = createTheme({
    components: {
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

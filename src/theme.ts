import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#4FC08D',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Arima Madurai, cursive',
          color: '#f9f9f9',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        // root: {
        //   color: '#4FC08D',
        //   fontFamily: 'Arima Madurai, cursive',
        // },
        select: {
          color: '#4FC08D',
          fontFamily: 'Arima Madurai, cursive',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#4FC08D',
        },
        outlined: {
          color: '#4FC08D',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: '#2f2f2f',
          color: '#f9f9f9',
        },
      },
    },
    MuiCollapse: {
      styleOverrides: {
        entered: {
          borderLeft: '3px solid #4FC08D',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          '&:focus, &:hover': {
            borderLeft: '3px solid #4FC08D',
          },
          '&.Mui-expanded': {
            borderLeft: '3px solid #4FC08D',
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#2f2f2f',
          color: '#f9f9f9',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          backgroundColor: '#2f2f2f',
          color: '#f9f9f9',
          border: '1px solid #f9f9f9',
          textAlign: 'center',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        root: {
          fontSize: '1.2rem',
          textAlign: 'center',
          fontWeight: 700,
          backgroundColor: '#2f2f2f',
          color: '#f2f2f2',
          borderBottom: '1px solid #f2f2f2',
          borderTop: '1px solid #f2f2f2',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#4FC08D',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        input: {
          color: '#4FC08D',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#4FC08D',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;

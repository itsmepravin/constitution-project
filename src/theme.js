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
        root: {
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
        },
        expanded: {
          borderLeft: '3px solid #4FC08D',
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
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#4FC08D',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#556cd6',
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

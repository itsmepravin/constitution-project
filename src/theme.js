import { createTheme } from '@mui/material/styles';
import { red, blue } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Arima Madurai, cursive',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: blue.A700,
          fontFamily: 'Arima Madurai, cursive',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          '&:hover': {
            borderLeft: '3px solid red',
          },
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

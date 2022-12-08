import { createTheme } from '@mui/material/styles';

// Initialize material theme
const theme = createTheme({
  palette: {
    primary: {
      light: '#545c81',
      main: '#2a3462',
      dark: '#182045',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ef7f47',
      main: '#eb601a',
      dark: '#a44312',
      contrastText: '#fff',
    },
  }
});

export default theme;
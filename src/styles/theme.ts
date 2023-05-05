import { Barlow_Condensed, Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const barlowCondensed = Barlow_Condensed({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});


const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#C9B197',
    },
    error: {
      main: red.A400,
    },
    mode: 'dark',
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    h3: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontWeight: 700,
    },
    h5: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontWeight: 700,
    },
    h6: {
      fontFamily: barlowCondensed.style.fontFamily,
      fontWeight: 700,
    },
  },
});

export default theme;

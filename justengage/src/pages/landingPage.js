import React from 'react';
import Navbar from '../components/navbar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Login from '../components/login';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B262C',
    },
    secondary: {
      light: '#0066ff',
      main: '#0F4C75',
      contrastText: '#ffcc00',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

const LandingPage = () => {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box sx={{ flexGrow: 1, marginTop: "2.5rem", }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <h1>Landing Page</h1>
                </Grid>
                <Grid item xs={6}>
                    <Login />
                </Grid>
            </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
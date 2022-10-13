import { createTheme, ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import './App.css';
import PageRouter from './page-router';

function App() {

    const appThemeMode = useSelector((state) => state.general.mode);
    const theme = createTheme(
        {
            palette: {
                mode: appThemeMode
            }
        }
    );

    return (
        <ThemeProvider theme={theme}>
            <HelmetProvider>
                <PageRouter />
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;

import { createTheme, ThemeProvider } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { browserRouter } from './page-router';

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
                <RouterProvider router={browserRouter} />
            </HelmetProvider>
        </ThemeProvider>
    );
}

export default App;

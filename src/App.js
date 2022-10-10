import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
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
            <CssBaseline />
            <PageRouter />
        </ThemeProvider>
    );
}

export default App;

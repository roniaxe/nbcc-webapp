import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AppBar from '../components/core/app-bar';

function AppLayout() {
    return (
        <>
            <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} />
            <Box sx={{ display: 'flex', overflow: 'auto', minHeight: 'calc(100vh - 64px)' }}>
                <CssBaseline />
                <Box component="main" sx={{ flexGrow: 1, width: '100%' }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

export default AppLayout;

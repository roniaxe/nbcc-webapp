import { Box, CircularProgress } from '@mui/material';
import { Helmet } from 'react-helmet';

function LoadingPage() {
    return (
        <>
            <Helmet>
                <title>New Britain Chess Club</title>
                <meta name="description" content="New Britain Chess Club Home" />
            </Helmet>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '80vmin'
                }}
            >
                <CircularProgress disableShrink />
            </Box>
        </>
    );
}

export default LoadingPage;

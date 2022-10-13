import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            minHeight="50vh"
        >
            <Grid>
                <Typography variant="h1" component="h1">
                    Oops!
                </Typography>
            </Grid>

            <Grid>
                <Typography>
                    Sorry, unexpected error has occured.
                </Typography>
            </Grid>

            <Grid>
                <Typography variant="body2">
                    {error.statusText || error.message}
                    .
                    {' '}
                    {`Status: ${error.status}`}
                </Typography>
            </Grid>

        </Grid>
    );
}

export default ErrorPage;

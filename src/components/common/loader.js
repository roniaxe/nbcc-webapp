import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function Loader() {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
        >
            <Grid item xs={1} alignContent="center" alignSelf="center">
                <CircularProgress />
            </Grid>
        </Grid>
    );
}

export default Loader;

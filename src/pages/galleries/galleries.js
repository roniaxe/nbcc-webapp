import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';
import { Alert } from '@mui/material';
import { useGetCollectionsByUserNameQuery } from '../../services/unsplash-api-slice';
import Loader from '../../components/common/loader';

export default function Galleries() {
    const navigate = useNavigate();

    const {
        data: galleries = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetCollectionsByUserNameQuery(process.env.REACT_APP_CLIENT_ID);

    const galleryClickedHandler = (galleryId) => {
        navigate(`/galleries/${galleryId}/photos`);
    };

    if (isLoading) return <Loader />;

    if (isError) {
        return <Alert severity="error">{error}</Alert>;

    }

    if (isSuccess) {
        return (
            <>
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Album layout
                            </Typography>
                            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                Something short and leading about the collection below—its contents,
                                the creator, etc. Make it short and sweet, but not too short so
                                folks don&apos;t simply skip over it entirely.
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained">Main call to action</Button>
                                <Button variant="outlined">Secondary action</Button>
                            </Stack>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {galleries.map((gallery) => (
                                <Grid item key={gallery.id} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{
                                            height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer'
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                            // 16:9
                                                pt: '56.25%',
                                            }}
                                            image={gallery.cover_photo.urls.small}
                                            alt="random"
                                            onClick={() => galleryClickedHandler(gallery.id)}
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {gallery.title}
                                            </Typography>
                                            <Typography>
                                                {gallery.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" onClick={() => galleryClickedHandler(gallery.id)}>View</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        Something here to give the footer a purpose!
                    </Typography>
                </Box>
                {/* End footer */}
            </>
        );
    }
}

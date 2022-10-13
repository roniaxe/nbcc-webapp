import { Remove } from '@mui/icons-material';
import {
    Alert,
    Container, Divider, List, ListItem, ListItemIcon, ListItemText, Typography
} from '@mui/material';
import Loader from '../../components/common/loader';
import { useGetMembershipDataQuery } from '../../services/firebase-api-slice';

function MembershipPage() {

    const {
        data: membership,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetMembershipDataQuery();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (isSuccess) {
        return (
            <Container maxWidth="lg">
                <Typography
                    component="h4"
                    variant="h5"
                    color="text.primary"
                    gutterBottom
                    marginBottom={5}
                >
                    Membership
                </Typography>

                <Typography variant="h6" color="text.secondary" paragraph>
                    Membership is open to all! Come visit the club any Tuesday evening with no
                    obligation. Membership fees cover operation costs and help us provide our
                    members with engaging, high-quality chess experiences. As a non-profit,
                    100% of membership fees are utilized for running the club.
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography
                    component="h4"
                    variant="h5"
                    color="text.primary"
                    gutterBottom
                    marginBottom={5}
                >
                    Benefits
                </Typography>

                <List dense>
                    {membership && membership.benefits.map((benefit) => (
                        <ListItem key={benefit.substring(0, 6)} sx={{ pl: 0 }}>
                            <ListItemIcon>
                                <Remove />
                            </ListItemIcon>
                            <ListItemText
                                primary={benefit}
                            />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography
                    component="h4"
                    variant="h5"
                    color="text.primary"
                    gutterBottom
                    marginBottom={5}
                >
                    Membership Rates*
                </Typography>

                <Typography variant="h6" color="text.secondary" paragraph>
                    Membership runs from September 1 to August 31 of the following year.
                    Prorated rates available beginning in February.
                </Typography>

                <List dense>
                    {membership && membership.rates.map((rate) => (
                        <ListItem key={rate.substring(0, 6)} sx={{ pl: 0 }}>
                            <ListItemIcon>
                                <Remove />
                            </ListItemIcon>
                            <ListItemText
                                primary={rate}
                            />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography
                    component="h4"
                    variant="h5"
                    color="text.primary"
                    gutterBottom
                    marginBottom={5}
                >
                    Prorated rates for members joining mid-year
                </Typography>

                <List dense>
                    {membership && membership.proratedRates.map((rate) => (
                        <ListItem key={rate.substring(0, 6)} sx={{ pl: 0 }}>
                            <ListItemIcon>
                                <Remove />
                            </ListItemIcon>
                            <ListItemText
                                primary={rate}
                            />
                        </ListItem>
                    ))}
                </List>

                <Divider sx={{ my: 3 }} />

                <Typography variant="subtitle2" color="text.secondary" paragraph>
                    * For cash or check payment, please pay at the club to
                    Dave Herscovici, Club Treasurer.
                </Typography>

                <Typography variant="h6" color="text.secondary" paragraph>
                    Note:
                    <br />
                    A USCF (United States Chess Federation) membership is not required
                    to join NBCC; however, it is required for participation in rated events.
                    Click
                    {' '}
                    <a href="https://new.uschess.org/">here</a>
                    {' '}
                    for a USCF ID.
                </Typography>
            </Container>
        );
    }

    return null;
}

export default MembershipPage;

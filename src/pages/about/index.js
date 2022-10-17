import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Alert, Divider } from '@mui/material';
import { Container } from '@mui/system';
import { TabPanel } from '../../components/common/tab-panel';
import { useGetAboutDataQuery } from '../../services/firebase-api-slice';
import { Paragraph } from '../../components/common/paragraph';
import Loader from '../../components/common/loader';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function AboutPage() {
    const [tabValue, setTabValue] = React.useState(0);

    const {
        data: about = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetAboutDataQuery();

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <Alert severity="error">{error}</Alert>;
    }

    if (isSuccess) {
        return (
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: 'background.paper',
                    display: 'flex',
                    ml: 4
                }}
            >
                <Tabs
                    orientation="vertical"
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="Vertical about tabs"
                    sx={{
                        borderRight: 1,
                        borderColor: 'divider',
                        minWidth: 150,
                        mr: { xs: 0, sm: 2, md: 4 }
                    }}
                >
                    <Tab label="General" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={tabValue} index={0}>
                    <Container maxWidth="md">
                        {about.general && about.general.map((paragraph, index) => (
                            <React.Fragment key={paragraph.title}>
                                <Paragraph
                                    title={paragraph.title}
                                    text={paragraph.text}
                                    styles={{ wordBreak: 'break-word' }}
                                />
                                {index !== about.general.length - 1 && <Divider sx={{ my: 3 }} />}
                            </React.Fragment>
                        ))}
                    </Container>
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={tabValue} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={tabValue} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={tabValue} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={tabValue} index={6}>
                    Item Seven
                </TabPanel>
            </Box>
        );
    }

    return null;
}

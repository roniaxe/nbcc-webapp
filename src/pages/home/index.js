import { Box } from '@mui/material';

function Home() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <iframe
                src="https://calendar.google.com/calendar/embed?showTitle=0&showPrint=0&showTz=0&height=600&wkst=1&src=newbritainchessclub%40gmail.com&color=%23182C57&ctz=America%2FNew_York"
                style={{ border: 'solid 0px #777' }}
                width="1000"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="NBCC Calendar"
            />
        </Box>
    );
}

export default Home;

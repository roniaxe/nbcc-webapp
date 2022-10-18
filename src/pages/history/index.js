import { Container } from '@mui/material';
import Accordion from '../../components/accordion/accordion';
import { useGetHistoryDataQuery } from '../../services/firebase-api-slice';

function HistoryPage() {
    const {
        data: history = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetHistoryDataQuery();

    console.log(history);
    console.log(isLoading, isSuccess, isError, error);

    return (
        <Container maxWidth="lg">
            <Accordion data={history} />
        </Container>
    );
}

export default HistoryPage;

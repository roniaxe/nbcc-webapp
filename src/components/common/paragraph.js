/* eslint-disable react/no-danger */
import { Typography } from '@mui/material';
import DOMPurify from 'dompurify';

export function Paragraph({ title, text }) {
    return (
        <>
            <Typography
                component="h4"
                variant="h5"
                align="center"
                color="text.primary"
                gutterBottom
                marginBottom={5}
            >
                {title}
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
                <span dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text)
                }}
                />
            </Typography>
        </>
    );
}

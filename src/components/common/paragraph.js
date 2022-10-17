/* eslint-disable react/no-danger */
import { Typography } from '@mui/material';
import DOMPurify from 'dompurify';

export function Paragraph({ title, text, styles }) {
    return (
        <>
            <Typography
                component="h4"
                variant="h5"
                color="text.primary"
                gutterBottom
                marginBottom={5}
            >
                {title}
            </Typography>
            <Typography
                variant="subtitle1"
                color="text.secondary"
                paragraph
                sx={{ ...styles }}
            >
                <span dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(text)
                }}
                />
            </Typography>
        </>
    );
}

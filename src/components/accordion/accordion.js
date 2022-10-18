import * as React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import { Paragraph } from '../common/paragraph';

export default function Accordion({ data }) {

    let content;

    if (data) {
        content = data.map((item) => (
            <MuiAccordion key={item.name}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${item.name}-content`}
                    id={`${item.name}-header`}
                >
                    <Typography>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {item.items.map((innerItem, index) => (
                        <>
                            <Paragraph
                                key={innerItem.title}
                                title={innerItem.title}
                                text={innerItem.text}
                            />
                            {index !== item.items.length - 1 && <Divider sx={{ my: 3 }} />}
                        </>
                    ))}
                </AccordionDetails>
            </MuiAccordion>
        ));
    }

    return (
        <div>
            {content}
        </div>
    );
}

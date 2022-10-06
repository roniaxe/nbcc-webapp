import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function GalleryItem(props) {
    const { onClosePhoto } = props;
    const [open, setOpen] = useState(false);

    const selectedPhoto = useSelector((state) => state.photo.selectedPhoto);

    useEffect(() => {
        setOpen(Boolean(selectedPhoto));
    }, [selectedPhoto]);

    return (

        <Modal
            open={open}
            onClose={onClosePhoto}
            aria-labelledby="modal-single-photo"
            aria-describedby="a focus modal of the selected photo"
        >
            <Box sx={style}>
                <Box
                    component="img"
                    sx={{
                        maxHeight: '90vh',
                        overflow: 'auto'
                    }}
                    alt={selectedPhoto?.title}
                    src={selectedPhoto?.img}
                />
            </Box>
        </Modal>

    );
}

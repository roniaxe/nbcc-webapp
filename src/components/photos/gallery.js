import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Card } from '@mui/material';

export default function Gallery(props) {
    const { photos, onOpenPhoto } = props;

    return (
        <ImageList
            gap={12}
            sx={{
                mb: 8,
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))!important'
            }}
        >
            {photos.map((item) => (
                <Card key={item.img}>
                    <ImageListItem
                        sx={{ height: '100% !important' }}
                        onClick={() => onOpenPhoto(item)}
                    >
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ cursor: 'pointer' }}
                        />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={item.author}
                            sx={{
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0.7)0%, rgba(0,0,0,0.3)70%, rgba(0,0,0,0)100%)'
                            }}
                        />
                    </ImageListItem>
                </Card>

            ))}
        </ImageList>
    );
}

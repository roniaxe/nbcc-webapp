import { Container } from '@mui/system';
// import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../../components/common/loader';
import Gallery from '../../components/photos/gallery';
import GalleryItem from '../../components/photos/gallery-item';
import { actions as photoActions } from '../../redux/photo/slice';
import { useGetPhotosByCollectionIdQuery } from '../../services/unsplash-api-slice';

function GalleryPhotos() {
    const { galleryId } = useParams();

    const dispatch = useDispatch();
    const {
        data: photos = [],
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPhotosByCollectionIdQuery(
        galleryId,
        { refetchOnMountOrArgChange: 10 }
    );

    const openPhotoHandler = (selectedPhoto) => {
        dispatch(photoActions.setSelectedPhoto(selectedPhoto));
    };

    const closePhotoHandler = () => {
        dispatch(photoActions.setSelectedPhoto(null));
    };

    let content;

    if (isLoading) {
        content = <Loader />;
    } else if (isSuccess) {
        const photosDto = photos.map((photo) => ({
            img: photo.urls.regular,
            title: photo.description,
            author: photo.user.name,
            height: photo.height,
            width: photo.width,
            description: photo.description
        }));

        content = (
            <>
                <Gallery photos={photosDto} onOpenPhoto={openPhotoHandler} />
                <GalleryItem onClosePhoto={closePhotoHandler} />
            </>
        );
    } else if (isError) {
        content = (
            <>
                Oh no, there was an error:
                {' '}
                {error.toString()}
            </>
        );
    } else {
        content = null;
    }

    return (
        <Container>
            {content}
        </Container>
    );
}

export default GalleryPhotos;

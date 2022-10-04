import axios from 'axios';

const baseUrl = process.env.REACT_APP_SERVER_URL;

const webClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-CSRF': '1'
    }
});

const auth = {
    Authorization: 'Client-ID KCYYOM7aG1vDYT5lZVj4jxUycdriM8Qwq-Pw8FGpAbk'
};

export const getPhotosByCollectionId = (collectionId) => webClient.get(`${baseUrl}/collections/${collectionId}/photos`, {
    headers: {
        ...auth
    }
});

export const getCollectionsByUserName = (userName) => webClient.get(`${baseUrl}/users/${userName}/collections`, {
    headers: {
        ...auth
    }
});

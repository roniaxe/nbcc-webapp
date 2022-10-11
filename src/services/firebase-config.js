// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyCT6G7UiWeChswXncXwfkj0QBqUUj1ftiI',
    authDomain: 'react-rest-94682.firebaseapp.com',
    databaseURL: 'https://react-rest-94682-default-rtdb.firebaseio.com',
    projectId: 'react-rest-94682',
    storageBucket: 'react-rest-94682.appspot.com',
    messagingSenderId: '21320556954',
    appId: '1:21320556954:web:70b51eeee9195be45d9a23'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);

// Import the functions you need from the SDKs you need


import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCIaaa_hRxppBZrDoXlxFNFP4nDFxbN0o8',
  authDomain: 'shoppingapp-ada07.firebaseapp.com',
  projectId: 'shoppingapp-ada07',
  storageBucket: 'shoppingapp-ada07.appspot.com',
  messagingSenderId: '373805724422',
  appId: '1:373805724422:web:e20a70e818ac7117212487',
  measurementId: 'G-LB7SNNSDMZ',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getDatabase(FirebaseApp);
export const Firestore = getFirestore(FirebaseApp);
export const Storage = getStorage(FirebaseApp);


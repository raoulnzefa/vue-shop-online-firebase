//import firebase from '@firebase/app'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyB4WJ_nspMyFA_zsSZ9ky_SoQiS2QOp70I",
    authDomain: "website-ecom-ff223.firebaseapp.com",
    databaseURL: "https://website-ecom-ff223-default-rtdb.firebaseio.com",
    projectId: "website-ecom-ff223",
    storageBucket: "website-ecom-ff223.appspot.com",
    messagingSenderId: "144186283636",
    appId: "1:144186283636:web:a11d372b94c025c79f6321",
    measurementId: "G-45W45PTERD"
};

const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export { fb, db }
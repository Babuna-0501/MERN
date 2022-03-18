import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3_TBwJgiu6ZI22wf1UR6dVJO58RNSqR0",
    authDomain: "stocks-b7cac.firebaseapp.com",
    projectId: "stocks-b7cac",
    storageBucket: "stocks-b7cac.appspot.com",
    messagingSenderId: "412644445851",
    appId: "1:412644445851:web:9bfb9dc777a8393d0f803e",
    measurementId: "G-56HC2C0M0N"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;

import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTbzkxGaOYAFyuTeiayxxiq_z8zGzxZG4",
  authDomain: "everest-61486.firebaseapp.com",
  databaseURL: "https://everest-61486.firebaseio.com",
  projectId: "everest-61486",
  storageBucket: "everest-61486.appspot.com",
  messagingSenderId: "701793005224",
  appId: "1:701793005224:web:a765728f2ec78a4b839c9d",
  measurementId: "G-ZMYH7MD6KW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };

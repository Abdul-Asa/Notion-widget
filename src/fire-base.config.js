// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBNUYX-jLBJb6oQjU9grZ1a_vrgxtrRNWQ',
  authDomain: 'notion-e5158.firebaseapp.com',
  projectId: 'notion-e5158',
  storageBucket: 'notion-e5158.appspot.com',
  messagingSenderId: '1005889757670',
  appId: '1:1005889757670:web:eaa988b8bbc3224a5a7627',
  measurementId: 'G-5VJV9V70ND',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

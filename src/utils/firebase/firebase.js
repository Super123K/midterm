// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZfjKwH-dwZs9OSLO0kuzMeAAHLBs-uE",
  authDomain: "midterm-caa68.firebaseapp.com",
  projectId: "midterm-caa68",
  storageBucket: "midterm-caa68.appspot.com",
  messagingSenderId: "290260811324",
  appId: "1:290260811324:web:c021948781ff5a7225cd39",
  measurementId: "G-2NMD13MTSJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;
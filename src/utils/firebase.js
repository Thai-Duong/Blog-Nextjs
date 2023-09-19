// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-74b01.firebaseapp.com",
  projectId: "blog-74b01",
  storageBucket: "blog-74b01.appspot.com",
  messagingSenderId: "765323800212",
  appId: "1:765323800212:web:c9c2974fd9c9f1b87f8e81",
  measurementId: "G-K7W90WH7ZF",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

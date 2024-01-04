// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuReACv2v344JJhRKVbZANKocLEw3W8VI",
  authDomain: "react-notes-7617d.firebaseapp.com",
  projectId: "react-notes-7617d",
  storageBucket: "react-notes-7617d.appspot.com",
  messagingSenderId: "128549428331",
  appId: "1:128549428331:web:096b2c200cd1ff4bfda52e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");

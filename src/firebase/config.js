
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3M6FdB_IuuUY4sg0H3q45So9ZUxl3UVM",
  authDomain: "react-course-95a6d.firebaseapp.com",
  projectId: "react-course-95a6d",
  storageBucket: "react-course-95a6d.appspot.com",
  messagingSenderId: "280571551154",
  appId: "1:280571551154:web:d9dc0eff77d7645be798ab"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore (FirebaseApp);

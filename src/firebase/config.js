import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
// apiKey: "AIzaSyA3M6FdB_IuuUY4sg0H3q45So9ZUxl3UVM",
// authDomain: "react-course-95a6d.firebaseapp.com",
// projectId: "react-course-95a6d",
// storageBucket: "react-course-95a6d.appspot.com",
// messagingSenderId: "280571551154",
// appId: "1:280571551154:web:d9dc0eff77d7645be798ab"
// };

//Testing
// const firebaseConfig = {
//   apiKey: 'AIzaSyAM8VFS76J0h1xCwGS6NPRAuNg3Q2x5Nmc',
//   authDomain: 'for-testing-25656.firebaseapp.com',
//   projectId: 'for-testing-25656',
//   storageBucket: 'for-testing-25656.appspot.com',
//   messagingSenderId: '991687535216',
//   appId: '1:991687535216:web:50ec6e7b171cd60ac522b5',
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCB-4pvVE3bLX4HTdHpboJ7XMtk6DqYOE',
  authDomain: 'hi-twitter-f00f6.firebaseapp.com',
  projectId: 'hi-twitter-f00f6',
  storageBucket: 'hi-twitter-f00f6.appspot.com',
  messagingSenderId: '966131516749',
  appId: '1:966131516749:web:1fdfbedb41536ab8442304',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// yetkilendirmenin refarınsını alma
export const auth = getAuth(app);

// google sağlayıcı kurulum
export const provider = new GoogleAuthProvider();

// veirtabının referansını alma
export const db = getFirestore(app);

// depolam alanın referansını alma
export const storage = getStorage(app);

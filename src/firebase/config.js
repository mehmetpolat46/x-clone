// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDCB-4pvVe3bLX4HTdHpbok7XMtk6DqYOE',
  authDomain: 'hi-twitter-t00f5.firebaseapp.com',
  projectId: 'hi-twitter-t00f5',
  storageBucket: 'hi-twitter-f00f5.appspot.com',
  messagingSenderId: '966131516749',
  appId: '1:966131516749:web:1fdfbedb41535ab8442404',
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

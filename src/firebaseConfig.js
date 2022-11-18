import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBJjypTRpPWKorHniz7zI731LSJKy2Fqqg",
  authDomain: "social-media-app-cd1c2.firebaseapp.com",
  projectId: "social-media-app-cd1c2",
  storageBucket: "social-media-app-cd1c2.appspot.com",
  messagingSenderId: "151676201488",
  appId: "1:151676201488:web:6e0eeb13fff4cf88b13895"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage();
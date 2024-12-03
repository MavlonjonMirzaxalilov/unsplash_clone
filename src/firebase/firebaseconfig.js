import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCiFKfL77t9tyn9vM4aZ6mFRqncvpVtzC8",
  authDomain: "my-unsplash-2e964.firebaseapp.com",
  projectId: "my-unsplash-2e964",
  storageBucket: "my-unsplash-2e964.firebasestorage.app",
  messagingSenderId: "674864301290",
  appId: "1:674864301290:web:f184bbcdd0fd8b08348393",
};

const app = initializeApp(firebaseConfig);
//auth
export const auth = getAuth();

//db firestore
export const db = getFirestore(app);

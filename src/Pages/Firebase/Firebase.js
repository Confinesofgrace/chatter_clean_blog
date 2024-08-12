// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";




// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXI--fmdXnXm0uaxmGGjx3EE2ic9T7uwY",
  authDomain: "chatter-blog-1-project.firebaseapp.com",
  projectId: "chatter-blog-1-project",
  storageBucket: "chatter-blog-1-project.appspot.com",
  messagingSenderId: "604234446388",
  appId: "1:604234446388:web:0245182e0e7e7f34c83c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const provider = new GoogleAuthProvider();

export const db  = getFirestore(app);

export {app, auth}


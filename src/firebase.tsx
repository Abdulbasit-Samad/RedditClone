// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCW-lSY0EynIgUsGsQsMKBya1YkaOx58yQ",
  authDomain: "redditclone-11d9c.firebaseapp.com",
  projectId: "redditclone-11d9c",
  storageBucket: "redditclone-11d9c.appspot.com",
  messagingSenderId: "92572922792",
  appId: "1:92572922792:web:64b0ab55f7660cc7aae39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();


export const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEE6La_1KwlZSVm3if-t_snFCDj0MS54g",
  authDomain: "proyecto-react-juan-mosqueda.firebaseapp.com",
  projectId: "proyecto-react-juan-mosqueda",
  storageBucket: "proyecto-react-juan-mosqueda.appspot.com",
  messagingSenderId: "504993434140",
  appId: "1:504993434140:web:58edc0cbf84ec3a54f6dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )
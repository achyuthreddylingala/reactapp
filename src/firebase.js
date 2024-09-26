// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCFch_y_RLv3UveZQUMQlUGH4aC2RCYnE0",
    authDomain: "testautomation-b7acc.firebaseapp.com",
    projectId: "testautomation-b7acc",
    storageBucket: "testautomation-b7acc.appspot.com",
    messagingSenderId: "239359697483",
    appId: "1:239359697483:web:14353961979962c81ae3ce",
    measurementId: "G-R9SE9ZX8JY"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

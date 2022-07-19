import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

const firebaseConfig = {
    apiKey: "AIzaSyDKguSIirn7JQcuroukZPFGnRpq2-03u-0",
    authDomain: "movie-app-4d76b.firebaseapp.com",
    projectId: "movie-app-4d76b",
    storageBucket: "movie-app-4d76b.appspot.com",
    messagingSenderId: "630956243024",
    appId: "1:630956243024:web:9fc217d25a4518fe897955",
    measurementId: "G-0XJ36TLRNX"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

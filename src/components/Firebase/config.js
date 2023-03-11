import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider   } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDAFG-gQgsafBVzAiesukwClWpN1-4eWLA",
    authDomain: "chat-app-d1dfe.firebaseapp.com",
    projectId: "chat-app-d1dfe",
    storageBucket: "chat-app-d1dfe.appspot.com",
    messagingSenderId: "470960227637",
    appId: "1:470960227637:web:47a17b7e62bd476797b87c",
    measurementId: "G-YEQTN5L4JY"
  };

  const app = initializeApp(firebaseConfig)
  const providerGG = new GoogleAuthProvider()
  const providerFB = new FacebookAuthProvider()
  // Initialize Firebase Authentication and get a reference to the service
 const auth = getAuth(app)
 export {auth, providerGG, providerFB}


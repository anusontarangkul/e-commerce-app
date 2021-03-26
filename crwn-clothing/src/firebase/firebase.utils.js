import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyDfU9cgWZ7HBxz53djYJ3Vil0Ty3TcDR0o",
    authDomain: "crwn-db-91b6b.firebaseapp.com",
    projectId: "crwn-db-91b6b",
    storageBucket: "crwn-db-91b6b.appspot.com",
    messagingSenderId: "150202598148",
    appId: "1:150202598148:web:a6025a3df909059ba68651",
    measurementId: "G-DJQYHM9N5Z"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();


provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
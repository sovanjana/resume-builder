import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const config = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	databaseURL: process.env.REACT_APP_databaseURL,
	projectId: process.env.REACT_APP_projectId,
	storageBucket: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
};

const app = firebase.initializeApp(config);
export const firestore = app.firestore();
export const firebaseAuth = app.auth();
export const firestoreTimestamp = firebase.firestore.Timestamp;
export const firestoreFieldValue = firebase.firestore.FieldValue;
export const FirebaseFunctions = firebase.functions();
export const FirebaseStorage = firebase.storage();
export const emailAuthProvider = firebase.auth.EmailAuthProvider;

//authentication
export const googleAuthProvider = () => new firebase.auth.GoogleAuthProvider();

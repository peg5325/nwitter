import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBke_9pmuiVht2Qn4OVfkAB0D4xxBbIrrc",
  authDomain: "nwitter-d892a.firebaseapp.com",
  projectId: "nwitter-d892a",
  storageBucket: "nwitter-d892a.appspot.com",
  messagingSenderId: "823671053227",
  appId: "1:823671053227:web:788d00b64de93cbea510ee",
};
firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();

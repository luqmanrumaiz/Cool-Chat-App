import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCDRJdI3iqyMbW92EwXpKa96CYcMJkhy8Q",
  authDomain: "cool-chat-app-5b87d.firebaseapp.com",
  projectId: "cool-chat-app-5b87d",
  storageBucket: "cool-chat-app-5b87d.appspot.com",
  messagingSenderId: "897553106140",
  appId: "1:897553106140:web:aef80aa0a3fbaed763e019",
  measurementId: "G-HCZH852M1R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth;
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

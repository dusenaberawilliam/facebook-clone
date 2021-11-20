import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBDwMgNV6f_1BCJjeDsf4iYMMG2uV3U4gY",
    authDomain: "fb-clone-3f0a2.firebaseapp.com",
    projectId: "fb-clone-3f0a2",
    storageBucket: "fb-clone-3f0a2.appspot.com",
    messagingSenderId: "873511789345",
    appId: "1:873511789345:web:636dea4bc3709215219460"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;



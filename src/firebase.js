import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBDwMgNV6f_1BCJjeDsf4iYMMG2uV3U4gY",
    authDomain: "fb-clone-3f0a2.firebaseapp.com",
    projectId: "fb-clone-3f0a2",
    storageBucket: "fb-clone-3f0a2.appspot.com",
    messagingSenderId: "873511789345",
    appId: "1:873511789345:web:636dea4bc3709215219460"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
// export const auth = getAuth(app);  //replaceed with the following code
const auth = getAuth(app);

// export const provider = new GoogleAuthProvider(); //replaceed with the following code
const provider = new GoogleAuthProvider();


// export const signInWithGoogle = () => { //this function replced with the following function
//     signInWithPopup(auth, provider)
//         .then((result) => {
//             // console.log(result)
//             const name = result.user.displayName;
//             const email = result.user.email;
//             const profilePic = result.user.protoURL;
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }


export const signInWithGoogle = () => signInWithPopup(auth, provider)

export default db;
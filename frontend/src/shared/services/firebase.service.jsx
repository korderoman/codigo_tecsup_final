// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    secret: "solicitar llave al admin"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const signIn= async(email, password)=>{
    try {
        return  await signInWithEmailAndPassword(auth,email, password);
    }catch (e){
        console.log(e)
    }
}



const logout=async()=>{
    console.log("onlogout")
    await signOut(auth);
}

export {signIn, logout, auth};

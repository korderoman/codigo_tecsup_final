import {logout, signIn as firebaseSignIn} from "@services";


const signIn=async (email,password)=>{
    return await firebaseSignIn(email,password);

}

const serializeUser=(user)=>{
    return JSON.stringify(user);
}

const deserializeUser=(userString)=>{
    return JSON.parse(userString);
}

const onlogoutController=async ()=>{
    await logout();
}

export {signIn, serializeUser, deserializeUser, onlogoutController}

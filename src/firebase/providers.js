import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
})


export const signInWithGoogle = async() => {

    try{
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        //const credentials = GoogleAuthProvider.credentialFromResult(result); this is more advanced, but mostly we need the user
        const {displayName, email, photoURL, uid} = result.user;
        
        return {
            ok: true, 
            //User info
            displayName, email, photoURL, uid
        }


    }catch(error){

       
       
        return {
            ok: false, 
            errorMessage
        }
    }


}
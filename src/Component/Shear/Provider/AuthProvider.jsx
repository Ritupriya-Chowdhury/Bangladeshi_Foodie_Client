import  { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../firebase/FireBase.config'

export const AuthContext=createContext(null);

const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    
    // create user using email password

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }


// sign in with user email password

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }


    //sign in with google

    const GoogleProvider=new GoogleAuthProvider();
    const signInWithGoogle=()=>{
        return signInWithPopup(auth,GoogleProvider);
       
    }

// SingIn with with GitHub

const GitProvider=new GithubAuthProvider();
const signInWithGit=()=>{
    return signInWithPopup(auth,GitProvider)
}






//sign out logged account

    const SignOut=()=>{
        return signOut(auth);
    }



   

   

        // observed user auth state
        

        useEffect(()=>{
          
            const unsubscribeUser= onAuthStateChanged(auth,loggedUser=>
                {
                    setUser(loggedUser);
                });
                return()=>{
                    return unsubscribeUser();
                }
                    
                   
              
        },[])
  


  //send auth information      
const authInfo={
    user,
    createUser,
    signIn,
    SignOut,
    signInWithGoogle,
    signInWithGit
   

}
    
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
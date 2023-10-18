import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider()


const Provider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUpUser = (name, email) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, name, email)
    }

    const signInUser = (email, password) => {
        setLoader()
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logoutUser = () =>{
        setLoader()
        return signOut(auth);
    }

    const updateUserProfile = (profile) => {
        setLoader()
        return updateProfile(auth.currentUser , profile)
    }

    const googleSignIn = () =>{
        setLoader()
        return signInWithPopup(auth, provider)
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoader(false)
        })
        return unSubscribe
    }, [])

    const authUser = {user, loader, signUpUser, updateUserProfile, signInUser, googleSignIn, logoutUser}
    
    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider>
    );
};

Provider.propTypes = {
    children: PropTypes.node
};

export default Provider;
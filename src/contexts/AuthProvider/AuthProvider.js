import React, { createContext, useEffect, useState } from 'react';
import app from '../../components/firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUser = (userInfo) =>{
        return updateProfile(user,userInfo);
    };

    const forgetPassword = (email) =>{
        return sendPasswordResetEmail(auth, email);
    };

    const loginUserByEmail = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> unsubscribe()
        
    },[])

    const authInfo = {
        createUser,
        loginUser,
        updateUser,
        forgetPassword,
        loginUserByEmail,
        logout,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
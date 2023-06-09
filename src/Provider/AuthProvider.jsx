/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    const googleProvider = new GoogleAuthProvider();



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }









    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            // console.log('current user', currentUser)


            // get and set token
            if (currentUser) {
                axios.post('http://localhost:5000/jwt', { email: currentUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false);
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }

        })
        return () => {
            return unsubscribe();
        }
    }, [])




    const authInfo = {
        user,
        createUser,
        signInUser,
        logOut,
        updateUserProfile,
        googleSignIn,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
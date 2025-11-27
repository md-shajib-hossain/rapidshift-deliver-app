import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../Firebase/Firebase.init";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  // create user with email and password
  const createUserWithEP = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Create User with Google
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Sign in with email and password
  const signInWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    createUserWithEP,
    signInWithEP,
    createUserWithGoogle,
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;

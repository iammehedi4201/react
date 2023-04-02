import React, { createContext, useEffect, useState } from "react";
import {
    RecaptchaVerifier,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  updatePhoneNumber,
  updateProfile,
} from "firebase/auth";
import firebaseApp from "../Firebase/Firebase.init";

export const AuthContext = createContext("");

const auth = getAuth(firebaseApp);

const UserInfoContext = ({ children }) => {
  //modalshow state
  const [show, setShow] = useState(false);
  //user State
  const [user, setUser] = useState("");
  //loader
  const [loader, setLoader] = useState(true);

  //create a user account
  const signup = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Account login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //UserName updated to the account;
  const updateUserInfo = async (name, photoURL) => {
    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoURL,
      });
      console.log("Profile is updated");
    } catch (error) {
      return console.error(error);
    }
  };

  //Send verification to the email
  const emailVerification = () => {
    setShow(true);
    return sendEmailVerification(auth.currentUser);
  };
  //Account Login with phone Number by setUp Recapthar 
  const setUpRecaptcha =(number)=>{
       const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{},auth);
       recaptchaVerifier.render();
       return signInWithPhoneNumber(auth,number,recaptchaVerifier);
  }


  //Logout
  const Logout = async () => {
    try {
          const result = await signOut(auth);
      } catch (err) { }
  };

  //Auth state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null  ||currentUser.emailVerified) {
        setUser(currentUser);
        console.log("The User is :-", currentUser);
      }
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    signup,
    login,
    Logout,
    updateUserInfo,
    emailVerification,
    show,
    setShow,
    user,
    loader,
    setUpRecaptcha
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserInfoContext;

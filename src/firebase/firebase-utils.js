import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBdkNyfX24CVaHELHsH1qRSpv8wz9FnP8s",
  authDomain: "crown-shop-f8855.firebaseapp.com",
  databaseURL: "https://crown-shop-f8855.firebaseio.com",
  projectId: "crown-shop-f8855",
  storageBucket: "crown-shop-f8855.appspot.com",
  messagingSenderId: "1091829405030",
  appId: "1:1091829405030:web:f56019401f04abb98ea4a7",
};

export const createUserProfileDocument = async (userAuth, otherData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        photoURL,
        ...otherData,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userRef;
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

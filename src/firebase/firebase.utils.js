import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD718yGHuy7QBqT_UwbszO0S4DKaGuw4H0",
  authDomain: "swbr-db.firebaseapp.com",
  databaseURL: "https://swbr-db.firebaseio.com",
  projectId: "swbr-db",
  storageBucket: "swbr-db.appspot.com",
  messagingSenderId: "1012228429028",
  appId: "1:1012228429028:web:21b796171ace3764a248f1",
  measurementId: "G-8FW9MG3F5P",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("Error: ", err.message);
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

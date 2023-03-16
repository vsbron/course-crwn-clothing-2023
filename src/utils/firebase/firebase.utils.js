// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Import the functions that allow to work with Firestore database
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChH-PhNwW0HBzfrITqC6Dyxi1FBWKcscE",
  authDomain: "crwn-clothing-db-2023-7b996.firebaseapp.com",
  projectId: "crwn-clothing-db-2023-7b996",
  storageBucket: "crwn-clothing-db-2023-7b996.appspot.com",
  messagingSenderId: "301047227197",
  appId: "1:301047227197:web:4759f5e1c6c9ddaeffdb54"
};

// Initializing Firebase with the config file
const firebaseApp = initializeApp(firebaseConfig);

// Initializing provider (can make a number of them, for various reasons)
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

// Initializing Auth and the specific sign in method (Auth is singleton per app)
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup( auth, googleProvider );   // Auth with Google popup

// Getting the Firestore database
export const db = getFirestore();

// Creating an entry in the database from the logged user
export const createUserDocumentFromAuth = async ( userAuth, additionalInfo = {} ) => {

  if(!userAuth) return;   // Guard clause

  const userDocRef = doc( db, "users", userAuth.uid );
  console.log( userDocRef );

  const userSnapshot = await getDoc(userDocRef);
  console.log( userSnapshot );

  // Check if user data exists
  if(!userSnapshot.exists()){

    // If doesn't, create/set the document with the data from userAuth in my collection
    // Get/Create variables
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // Try to set the db value with the setDoc mehtod with recent varibales as attributes
    try {
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo })
    } catch (e) {
      console.log( "Error creating the user", e.message )
    }
  }

  // If does, return userDocRef
  return userDocRef;
};

//////////////////////////
//// Helper functions ////
//////////////////////////

// Create user data from the user that signs up
export const createAuthUserWithEmailAndPassword = async ( email, password ) => {
  if (!email || !password ) return;   // Guard clause
  return createUserWithEmailAndPassword ( auth, email, password )
}

// Signs in the user
export const signInUserWithEmailAndPassword = async ( email, password ) => {
  if (!email || !password ) return;   // Guard clause
  return signInWithEmailAndPassword ( auth, email, password )
}

// Signs out user
export const signOutUser = async () => await signOut(auth);

// Listener for the Auth State change. Gets the callback that will be executed on change
export const onAuthStateChangedListener = ( callback ) => onAuthStateChanged( auth, callback );
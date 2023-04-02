// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

// Import the functions that allow to work with Firestore database
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";

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

// Method for creating the database in Firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection( db, collectionKey);   // Creating reference to the collection in the Firestore
  const batch = writeBatch(db);                           // Getting the batch instance that we need to fill with set events before firing to the db

  objectsToAdd.forEach( (object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase() );   // Getting the document reference with the created collection and the title from the array
    batch.set( docRef, object );                                      // Adding the setter of the collection to the batch
  } )

  await batch.commit();   // Firing the batch
  console.log("Done!");   // Success log
}

// Function to get the collection items from the db (changed frequently by Google)
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection( db, "categories" );   // Getting the collection reference
  const q = query(collectionRef);                         // Generating a query for the collection

  const querySnapshot = await getDocs(q);                 // Getting the snapshot of documents that were fetched from collection
  return querySnapshot.docs.map( (docSnapshot) => docSnapshot.data() );
}

// Creating an entry in the database from the logged user
export const createUserDocumentFromAuth = async ( userAuth, additionalInfo = {} ) => {

  if(!userAuth) return;   // Guard clause

  const userDocRef = doc( db, "users", userAuth.uid );

  const userSnapshot = await getDoc(userDocRef);

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
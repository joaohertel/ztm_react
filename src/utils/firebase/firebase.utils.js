import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  writeBatch,
  collection,
  query,
  getDocs,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2mCaLT5E52PWFzJvF7pUb8s9H5nbN_-w",
  authDomain: "fb-ztm-react-db.firebaseapp.com",
  projectId: "fb-ztm-react-db",
  storageBucket: "fb-ztm-react-db.appspot.com",
  messagingSenderId: "520757193413",
  appId: "1:520757193413:web:eba4cd76bd7863e49e5eac",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  aditionaliInfo = {}
) => {
  // see if there is an existing document reference ( special type of object fb uses when talking about
  // actual instance of a document model  doc(database, collection, uniqueId)
  const userDocRef = doc(db, "users", userAuth.uid);

  // console.log(userDocRef);
  // Google save memory space for the asked reference during the doc() function call

  // This snapshot will not necessarily represent and existing document
  // to test this use userSnapshot.exists();
  const userSnapshot = await getDoc(userDocRef);

  // we'll use this to check, if objectExsists getBackData if not, createObject

  // if user does not exists create and return data
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      setDoc(userDocRef, { displayName, email, createdAt, ...aditionaliInfo });
    } catch (error) {
      console.log("error in creating user = ", error.message);
    }
  }
  // if user exists just return user data
  return userDocRef;
};

export const createUserWithEmailAndPasswordService = async (
  email,
  password
) => {
  if (!email || !password) return;

  const userCredentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredentials;
};

export const signUserInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  const userCredentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );

  return userCredentials;
};

// auth keeps track of what user is signed in
export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (nextObserver) =>
  onAuthStateChanged(auth, nextObserver);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // get reference to the colleciton
  const collectinRef = collection(db, collectionKey);
  // create batch
  const batch = writeBatch(db);

  // add the db operations
  objectsToAdd.forEach(async (object) => {
    const docRef = doc(collectinRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  // commit
  await batch.commit();
  console.log("batch operatin done, added categoires to db");
};

//
export const getCategoriesAndItems = async () => {
  // getting the collection ref
  const collectionRef = collection(db, "categories");
  // creating the query object
  const q = query(collectionRef);
  // get the snapshots and reduce to build a single object that is more searchable
  const querySnapshot = await getDocs(q);
  // using reduce here to build an Object that is more easylly searchable than a List
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const data = docSnapshot.data();
    const { title, items } = data;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  // returning the data
  return categoryMap;
};

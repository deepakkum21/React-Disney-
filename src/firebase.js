import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";

const firebaseConf = firebaseConfig;

const firebaseApp = firebase.initializeApp(firebaseConf);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

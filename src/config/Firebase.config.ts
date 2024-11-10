import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOLznEeAVqHASzGEyFvvQ6hzQxF90MUCw",
  authDomain: "netflix-clone-254c8.firebaseapp.com",
  projectId: "netflix-clone-254c8",
  storageBucket: "netflix-clone-254c8.firebasestorage.app",
  messagingSenderId: "392459641535",
  appId: "1:392459641535:web:ffcc1fab20b312fd77dc0a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name: string, email: string, password: string) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;

    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
      password,
    });
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const login = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    console.error(e);
    alert(e);
  }
};

const logout = async () => {
  signOut(auth);
};

export { signup, login, logout, auth, db };

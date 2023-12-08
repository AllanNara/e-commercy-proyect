import { firebaseAuth } from "../firebase.config";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
} from "firebase/auth";

export default class AuthenticationFirebase {
	constructor() {
		this._auth = firebaseAuth;
		this.stateListening = (cb) => onAuthStateChanged(this._auth, cb);
	}

	register = async (email, password) => { 
    await createUserWithEmailAndPassword(this._auth, email, password);
  }

	signIn = async (email, password) => { 
    await signInWithEmailAndPassword(this._auth, email, password);
  }

	signInWithGoogle = async () => {
		const googleProvider = new GoogleAuthProvider();
		await signInWithPopup(this._auth, googleProvider);
	};

	logout = async () => await signOut(this._auth);
}

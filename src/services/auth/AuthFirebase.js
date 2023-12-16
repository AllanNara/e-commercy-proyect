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

	register = (email, password) => createUserWithEmailAndPassword(this._auth, email, password);

	signIn = (email, password) => signInWithEmailAndPassword(this._auth, email, password);

	signInWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		signInWithPopup(this._auth, googleProvider);
	};

	logout = () => signOut(this._auth);
}

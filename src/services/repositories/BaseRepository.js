import { doc, getDoc, getDocs, collection, query, where, addDoc, limit, updateDoc, deleteDoc } from "firebase/firestore";
import firestoreInstance from "../firebase.config";

export default class BaseRepository {
	constructor(collectionName) {
		this.store = firestoreInstance;
		this.collectionRef = collection(this.store, collectionName);
	}

	create = async (data) => {
		try {
      this._validateDoc && await this._validateDoc(data, "create")
      const newDoc = await addDoc(this.collectionRef, data);
      return newDoc.id
    } catch (error) {
			console.error("Error al crear documento:", error);
			throw error
		}
	};

	read = async (documentId) => {
		try {
			let ref = doc(this.collectionRef, documentId);
			console.log({ref})
			const snapshot = await getDoc(ref);
			if (!snapshot.exists()) return null;
			return { id: snapshot.id, ...snapshot.data() };
		} catch (error) {
			console.error("Error al leer el documento:", error);
			throw error
		}
	};

	readAll = async (queries, numLimit = Infinity) => {
		try {
			let ref;
			if (queries && queries.length > 0) {
				ref = query(this.collectionRef, ...queries.map((conditions) => where(...conditions)), limit(numLimit));
			} else ref = query(this.collectionRef, limit(numLimit))
			const snapshot = await getDocs(ref);
			if (snapshot.empty) return null;
			return snapshot.docs.map((document) => ({ id: document.id, ...document.data() }));
		} catch (error) {
			console.error("Error al leer la colección:", error);
			throw error
		}
	};

	update = async (data, documentId) => {
    try {
			this._validateDoc && this._validateDoc(data, "update")
      let ref = doc(this.collectionRef, documentId);
      const result = await updateDoc(ref, data);
      return result  
    } catch (error) {
      console.error("Error al actualizar el documento", error)
			throw error
    }
  };

	delete = async (documentId) => {
    try {
      let ref = doc(this.collectionRef, documentId);
      const result = await deleteDoc(ref);
      return result  
    } catch (error) {
      console.error("Error al eliminar el documento", error)
			throw error
    }
  };
}


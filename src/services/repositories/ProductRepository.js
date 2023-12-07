import { doc, getDoc } from "firebase/firestore";
import BaseRepository from "./BaseRepository";

export default class ProductRepository extends BaseRepository {
	constructor() {
		super("products");
	}

	read = async (documentId) => {
		try {
			let ref = doc(this.collectionRef, documentId);
			const snapshot = await getDoc(ref);
			if (!snapshot.exists()) throw new Error("not-exist")
			const data = snapshot.data()
			const snapCategory = await getDoc(data.category)
			const result = { ...data, id: snapshot.id, category: snapCategory.data().name };
			return result;
		} catch (error) {
			console.error("Error al leer el documento:", error);
			throw error
		}
	};

	_validateDoc = async(data, verb) => {
		const keys = Object.keys(data);
		const fields = [
			"price",
			"title",
			"description",
			"code",
			"stock",
			"status",
			"category",
			"thumbnail",
		];
		if (verb === "create" && keys.length !== fields.length)	throw new Error("Missing fields");
		const exists = await this.readAll([["code", "==", data.code]])
		if(exists) throw new Error("Product alredy exists");
		const every = keys.map((key) => fields.includes(key));
		if (!every) throw new Error("Invalid fields");
		return true
	};
}

import BaseRepository from "./BaseRepository";

export default class ProductRepository extends BaseRepository {
	constructor() {
		super("products");
	}

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

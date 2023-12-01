import BaseRepository from "./BaseRepository";

export default class CategoryRepository extends BaseRepository {
  constructor() {
    super("categories")
  }

  _validateDoc = async(data) => {
    const { name, key, ...rest } = data;
    const exists = await this.readAll([["name", "==", name], ["key", "==", key]])
    if(exists) throw new Error("Category alredy exists");
    if(!name, !key) throw new Error("Missing fields");
    if(Object.keys(rest).length) throw new Error("Invalid fields");
  };
}
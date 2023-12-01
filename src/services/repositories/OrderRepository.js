import BaseRepository from "./BaseRepository";

export default class OrderRepository extends BaseRepository {
  constructor() {
    super("orders")
  }

  _validateDoc = async(data) => {
    const { buyer, items, total_to_pay, ...rest } = data
    if(!buyer || !items || !total_to_pay) throw new Error("Missing fields")
    if(Object.keys(rest).length) throw new Error("Invalid fields")
  };
}
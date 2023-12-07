import { doc, getDoc, serverTimestamp, writeBatch } from "firebase/firestore";
import BaseRepository from "./BaseRepository";
import { Product } from "../index"

export default class OrderRepository extends BaseRepository {
  constructor() {
    super("orders")
    this.batch = writeBatch(this.store)
  }

  create = async (data) => {
		try {
      this._validateDoc && await this._validateDoc(data, "create")
      const stockToUpdate = await this._checkStockToUpdate(data.items);
      const documentToInsert = {...data, date: serverTimestamp() }
      
      // Crear orden en la colección "orders"
      const newOrderRef = doc(this.collectionRef);
      this.batch.set(newOrderRef, documentToInsert);
      
      // Actualizar stock de los productos afectados
      for (const productToUpdate of stockToUpdate) {
        const productRef = doc(Product.collectionRef, productToUpdate.id);
        this.batch.update(productRef, productToUpdate.update);
      }
      
      await this.batch.commit()
      this.batch = writeBatch(this.store)
      return newOrderRef.id
    } catch (error) {
			console.error("Error al crear documento:", error);
			throw error
		}
	};
  
  _checkStockToUpdate = async(arrayProducts) => {
    const newStockPerProduct = []
    for (const item of arrayProducts) {
      const doc = await getDoc(item.product);
      if(!doc.exists()) throw new Error("Product does not exist.")
      const product = { ...doc.data(), id: doc.id };
      if(product.stock < item.quantity) throw new Error("Product does not have the requested stock quantity.")
      const toUpdate = { id: product.id, update: { stock: product.stock - item.quantity } }
      if(!toUpdate.stock) toUpdate.update.status = false
      newStockPerProduct.push(toUpdate)
    }
    return newStockPerProduct
  }

  _validateDoc = async(data) => {
    const { buyer, items, total_to_pay, total_items, ...rest } = data
    if(Object.keys(rest).length) throw new Error("Invalid fields")
    if(!Array.isArray(items)) throw new Error("Invalid type on 'items'");
    if(!buyer || !items.length || !total_to_pay || !total_items) throw new Error("Missing fields")
    if(!buyer.name || !buyer.phone || !buyer.email) throw new Error("Missing fields on 'buyer'");
  };
}
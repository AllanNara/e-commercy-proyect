import OrderRepository from "./repositories/OrderRepository";
import ProductRepository from "./repositories/ProductRepository";
import CategoryRepository from "./repositories/CategoryRepository";

export const Order = new OrderRepository();
export const Product = new ProductRepository();
export const Category = new CategoryRepository();
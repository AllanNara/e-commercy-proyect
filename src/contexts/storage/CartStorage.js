export default class CartStorage {
	constructor(products, setList) {
		this.products = products;
		this.setList = setList;
	}

	_isInCart = (itemId) => {
		return this.products.some((item) => item.id === itemId);
	};

	addToCart = (item, quantity) => {
		const { title, price, thumbnail, id } = item;
		if (this._isInCart(id)) return this.updateItem(item.id, quantity);
		const newProduct = {
			id,
			title,
			price,
			thumbnail,
			quantity,
			total: Number((price * quantity).toFixed(2)),
		};
		this.setList((list) => [...list, newProduct])
		return id;
	};

	updateItem = (itemId, quantity) => {
		if (!this._isInCart(itemId)) return null;
		this.setList(list => {
			const itemUpdated = list.find((item) => item.id === itemId);
			itemUpdated.quantity = quantity;
			itemUpdated.total = Number((itemUpdated.price * quantity).toFixed(2));
			return list
		})
		return quantity;
	};

	removeItem = (itemId) => {
		if (!this._isInCart(itemId)) return null;
		this.setList(list => list.filter((item => item.id !== itemId)))
		return itemId;
	};

	clearCart = () => this.setList([]);

	getCart = () => {
		return {
			cart: this.products.sort((a, b) => a.grade - b.grade),
			total_items: this.products.reduce((acc, curr) => acc + curr.quantity, 0),
			total_to_pay: Number(this.products.reduce((acc, curr) => acc + curr.total, 0).toFixed(2)),
		};
	};
}

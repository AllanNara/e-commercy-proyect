export default class CartStorage {
	constructor(products, setList) {
		this.products = products;
		this.setList = setList;
	}

	_saveCart = () => {
		localStorage.setItem("cartSaved", JSON.stringify(this.products, null, 2));
		this.setList(this.products);
	};

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
		this.products = [...this.products, newProduct];
		this._saveCart();
		return id;
	};

	updateItem = (itemId, quantity) => {
		if (!this._isInCart(itemId)) return null;
		const itemUpdated = this.products.find((item) => item.id === itemId);
		itemUpdated.quantity = quantity;
		itemUpdated.total = Number((itemUpdated.price * quantity).toFixed(2));
		this._saveCart();
		return quantity;
	};

	removeItem = (itemId) => {
		if (!this._isInCart(itemId)) return null;
		this.products = this.products.filter((item) => item.id !== itemId);
		this._saveCart();
		return itemId;
	};

	clearCart = () => {
		this.products = [];
		this._saveCart();
	};

	getCart = () => {
		return {
			cart: this.products,
			total_items: this.products.reduce((acc, curr) => acc + curr.quantity, 0),
			total_to_pay: Number(
				this.products.reduce((acc, curr) => acc + curr.total, 0).toFixed(2)
			),
		};
	};
}

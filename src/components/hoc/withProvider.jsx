const withProvider = (WrappedComponent, Provider) => {
	const WithProvider = (props) => {
		return (
			<Provider>
				<WrappedComponent {...props} />
			</Provider>
		);
	};

	return WithProvider;
};

export default withProvider


// src/
// ├── assets/
// │   └── react.svg
// ├── components/
// │   ├── Cart/
// │   │   ├── CartItem.jsx
// │   │   ├── CartList.jsx
// │   │   └── CartListContainer.jsx
// │   ├── Checkout/
// │   │   ├── Checkout.jsx
// │   │   └── CheckoutForm.jsx
// │   └── common/
// │   │   ├── Counter.jsx
// │   │   ├── Modal.jsx
// │   │   ├── Spinner.jsx
// │   │   └── Test.jsx
// │   ├── hoc/
// │   │   └── withProvider.jsx
// │   ├── ItemDetail/
// │   │   ├── ItemCount.jsx
// │   │   ├── ItemDetail.jsx
// │   │   └── ItemDetailContainer.jsx
// │   ├── ItemList/
// │   │   ├── Item.jsx
// │   │   ├── ItemList.jsx
// │   │   └── ItemContainer.jsx
// │   ├── NavBar/
// │   │   ├── CartWidget.jsx
// │   │   ├── NavBar.jsx
// │   │   └── PositionedMenu.jsx
// │   ├── Routes/
// │   │   ├── AppRoutes.jsx
// │   │   ├── ProtectedRoutes.jsx
// │   │   └── PublicRoutes.jsx.jsx
// ├── context/
// │   ├── authContext.jsx
// │   ├── cartContext.jsx
// │   └── storeContext.jsx.jsx
// ├── hooks/
// │   ├── useCart.jsx
// │   ├── useCount.jsx
// │   ├── useForm.jsx
// │   └── useStore.jsx.jsx
// ├── services/
// │   └── ... Otros archivos
// ├── utils/
// │   └── ... Otros archivos
// ├── App.js
// ├── main.js
// └── ... Otros archivos
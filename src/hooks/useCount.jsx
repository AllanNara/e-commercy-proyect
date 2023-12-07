import { useState } from "react";

const useCount = (initial, min, max) => {
	if (initial < min || initial > max) initial = min;
	const [count, setCount] = useState(initial);

	const decrement = () => count > min && setCount((prev) => prev - 1);
	const increment = () => count < max && setCount((prev) => prev + 1);
	const reset = () => setCount(initial);

	return { count, decrement, increment, reset };
};

export default useCount

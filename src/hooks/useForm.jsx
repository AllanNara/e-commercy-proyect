import { useState } from "react";

const useForm = (...fields) => {
	const [formData, setFormData] = useState(
		fields.reduce((data, field) => {
			data[field] = "";
			return data;
		}, {})
	);
	const [errors, setErrors] = useState({});

	const resetForm = () => {
		setFormData(
			fields.reduce((data, field) => {
				data[field] = "";
				return data;
			}, {})
		);
	};

	const inputChange = ({ key, value }) => {
		setFormData({
			...formData,
			[key]: value,
		});
	};

	const validateForm = () => {
		const newErrors = {};
		for (const key in formData) {
			if (formData[key] === "") newErrors[key] = `Campo faltante`;
		}
		setErrors(newErrors);
	};

	return { formData, inputChange, resetForm, errors, validateForm };
};

export default useForm;

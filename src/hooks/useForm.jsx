import { useState } from "react";

const useForm = (fields, verifyFields) => {
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState(
		fields.reduce((data, field) => {
			data[field] = "";
			return data;
		}, {})
	);

	const inputChange = ({ key, value }) => setFormData({ ...formData, [key]: value });

	const resetForm = () => {
		setFormData(
			fields.reduce((data, field) => {
				data[field] = "";
				return data;
			}, {})
		);
	};

	const validateForm = () => {
		const err = verifyFields(formData)
		setErrors(err)
		return !Object.keys(err).length;
	};

	return { formData, inputChange, resetForm, errors, validateForm };
};

export default useForm;

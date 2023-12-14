import { useState } from "react";

const useForm = (fields, verifyFields) => {
	const [errors, setErrors] = useState({});
	const [formData, setFormData] = useState(
		fields.reduce((data, field) => {
			data[field] = "";
			return data;
		}, {})
	);

	const inputChange = ({ target: { name, value }}) => {
		if(!name) throw new Error(`Internal error, input: ${{name}}`);
		setFormData({ ...formData, [name]: value });
}
	const resetForm = () => {
		// if(!validateForm()) return
		setErrors({})
		setFormData(
			fields.reduce((data, field) => {
				data[field] = "";
				return data;
			}, {})
		);
	};

	const validateForm = () => {
		const err = verifyFields(formData);
		setErrors(err);
		return !Object.keys(err).length;
	};

	return { formData, inputChange, resetForm, errors, validateForm };
};

export default useForm;

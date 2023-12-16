export function checkErrors({ first_name, last_name, phone, address }) {
	const errors = {};

	if (!first_name.trim().length) errors.first_name = "Campo obligatorio";
	if (!last_name.trim().length) errors.last_name = "Campo obligatorio";
	if (!phone.trim().length) errors.phone = "Campo obligatorio";
	if (!/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{2,6}$/.test(phone)) errors.phone = "Numero invalido";
	if (!address.trim().length) errors.address = "Campo obligatorio";
  
	return errors;
}

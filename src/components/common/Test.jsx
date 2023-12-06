// import { useEffect, useState } from "react";
// import useStore from "../../hooks/useStore";
// // import { productsArray } from "../services/mock";

// function Test() {
// 	const { Product, Category } = useStore();
// 	const [load, setLoad] = useState(false);

// 	useEffect(() => {
// 		async function testing() {
// 			// const allProducts = await Product.readAll()
// 			// const categories = Array.from(new Set(allProducts.map(item => item.category)));
// 			// console.log({categories})

// 			// const allCategories = await Category.readAll();
// 			// console.log({allCategories})
// 			// categories.forEach((cat) => {
// 			// 	Category.create({name: cat, key: cat.charAt(0).toUpperCase() + cat.slice(1)})
// 			// 		.then((res) => console.log("exito: ", res))
// 			// 		.catch((err) => console.log("FALLO: ", err))
// 			// })

// 			// const allWithFilters = await Product.readAll([["price", ">=", 300]])
// 			// const oneProduct = await Product.readAll([["code", "==", "AA10"]])
// 			// console.log({response, product})

// 			// productsArray.forEach(prod => {
// 			// 	Product.create(prod)
// 			// 		.then((res) => console.log("exito: ", res))
// 			// 		.catch((err) => console.log("FALLO: ", err))
// 			// });
// 		}
// 		if (load) testing();
// 	}, [load]);

// 	return (
// 		<>
// 			<div>Test</div>
// 			<button onClick={() => setLoad(!load)}>Holaaaaaa</button>
// 		</>
// 	);
// }
// export default Test;

import { useState } from 'react'

const useForm = (fields, verifyFields) => {
const [errors, setErros] = useState({})
  const [form, setForm] = useState(
	fields.reduce((data, field) => {
		data[field] = "";
		return data;
	}, {}));

  const handleChange = ({ name, value }) => setForm({ ...form, [name]: value })

  const handleSubmit = (event) => {
    event.preventDefault()
	const err = verifyFields(form)
    setErros(err)
    if (Object.keys(err).length === 0) console.log({form})
  }

  return { form, errors, handleChange, handleSubmit }
}

const ContactForm = () => {

  const initialData = [
	  'nombre',
	  'correo',
	  'asunto',
	  'mensaje'
  ]

  const onValidate = (form) => {
    let errors = {}
    if (!form.nombre.trim()) errors.nombre = 'El campo "Nombre" no debe ser vacio.'
    if (!form.correo.trim()) errors.correo = 'El campo "Correo" no debe ser vacio.'
    if (!form.asunto.trim()) errors.asunto = 'El campo "Asunto" no debe ser vacio.'
    if (!form.mensaje.trim()) errors.mensaje = 'El campo "Mensaje" no debe ser vacio.'
    return errors
  }

  const { form, errors, handleChange, handleSubmit } = useForm(initialData, onValidate)

  return (
    <form className='w-100' onSubmit={handleSubmit}>
      <label className='form-label'>Nombre</label>
      <input type="text" className='form-control' name="nombre" value={form.nombre} onChange={handleChange}/>
      {errors.nombre && <div className="alert alert-danger p-1">{errors.nombre}</div>}

      <label className='form-label'>Correo electrónico</label>
      <input type="email" className='form-control' name="correo" value={form.correo} onChange={handleChange}/>
      {errors.correo && <div className="alert alert-danger p-1">{errors.correo}</div>}

      <label className='form-label'>Asunto</label>
      <input type="text" className='form-control'name="asunto" value={form.asunto} onChange={handleChange}/>
      {errors.asunto && <div className="alert alert-danger p-1">{errors.asunto}</div>}

      <label className='form-label'>Mensaje</label>
      <textarea className='form-control'name="mensaje" value={form.mensaje} onChange={handleChange}/>
      {errors.mensaje && <div className="alert alert-danger p-1">{errors.mensaje}</div>}

      <button className='btn btn-warning mt-1 w-100' disabled={false}>{false ? "Enviando..." : "Enviar"}</button>
    </form>
  )
}

export default ContactForm

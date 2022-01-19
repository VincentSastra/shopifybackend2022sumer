import axios from 'axios'
import React, { useState } from 'react'
import { server_url } from '../constants'

export const Create = (props) => {
	const [res, setResponse] = useState(null)
	const handleSubmit = (ev) => {
		
		ev.preventDefault()
		const data = ev.target.elements
		console.log(data)
		axios.put(`${server_url}/item/${data.name.value}`, {
			labels: data.label.value.split(","),
			category: data.category.value,
			inventory: data.inventory.value
		}).catch(err => {
			setResponse(<div>
				{err.message}
				<br />
				{err.response.data}
			</div>)
		})
	}

	return <div>
		<form onSubmit={handleSubmit}>
			Name: <input type="text" id="name" />
			<br />
			Label (COMMA SEPARATED LIST): <input type="text" id="label" />
			<br />
			Category: <select id="category">
				<option defaultValue={true}>Please Select</option>
				<option>Food</option>
				<option>Beverage</option>
				<option>Furniture</option>
				<option>Dessert</option>
			</select>
			<br />
			Inventory: <input type="number" id="inventory" />
			<br />
			<button type="submit">Submit</button >
		</form>
		Response: 
		<br />
		{res}
	</div>
}
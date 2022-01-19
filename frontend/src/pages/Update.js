import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { server_url } from '../constants'

export const Update = (props) => {
	const [res, setResponse] = useState(null)
	const [data, setData] = useState(null)

	useEffect(() => {
		axios.get(`${server_url}/item/${name}`)
			.then(res => {
				console.log(res.data)
				setData(res.data)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	const name = window.location.pathname.split('/').pop()

	const handleSubmit = (ev) => {
		ev.preventDefault()
		const data = ev.target.elements
		console.log(data)
		axios.patch(`${server_url}/item/${name}`, {
			labels: data?.label.value.split(","),
			category: data?.category.value,
			inventory: data?.inventory.value
		}).catch(err => {
			setResponse(<div>
				{err.message}
				<br />
				{err.response.data}
			</div>)
		}).then(res => {
			console.log(res)
			setResponse(<div>
				{res.message}
				<br />
				{res.response.data}
			</div>)
		})
	}
	if (!data) return <div>loading</div>

	return <div>
		<form onSubmit={handleSubmit}>
			Name: {name}
			<br />
			Label (COMMA SEPARATED LIST): <input defaultValue={data?.label?.join()} type="text" id="label" />
			<br />
			Category: <select id="category">
				<option defaultValue={data?.category === 'Food'}>Food</option>
				<option defaultValue={data?.category === 'Beverage'}>Beverage</option>
				<option defaultValue={data?.category === 'Furniture'}>Furniture</option>
				<option defaultValue={data?.category === 'Dessert'}>Dessert</option>
			</select>
			<br />
			Inventory: <input type="number" id="inventory" defaultValue={data?.inventory} />
			<br />
			<button type="submit">Submit</button >
		</form>
		Response:
		<br />
		{res}
	</div>
}
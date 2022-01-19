import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server_url } from '../constants'
import { Link } from 'react-router-dom'

export const List = (props) => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get(`${server_url}/catalogue/list`)
			.then(res => {
				setData(res.data)
			})
			.catch(e => {
				console.log(e)
			})

	}, [])

	return <div>
		{data.map(row =>
			<div>
				<a href={encodeURI(`/get/${row.name}`)}>
					{row.name}
				</a>
			</div>
		)}
	</div>
}
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server_url } from '../constants'
import { Link, useMatch, useParams, useSearchParams } from 'react-router-dom'

export const Get = () => {
	const name = window.location.pathname.split('/').pop()
	const [data, setData] = useState([])

	useEffect(() => {
		axios.get(`${server_url}/item/${name}`)
			.then(res => {
				setData(res.data)
			})
			.catch(e => {
				console.log(e)
			})
	}, [])

	return <div>
		{JSON.stringify(data)}
		<br />
		<Link to={`/update/${name}`}>Update</Link>
	</div>
}
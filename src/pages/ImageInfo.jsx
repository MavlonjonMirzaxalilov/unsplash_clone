import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from './../hooks/useFetch'
function ImageInfo() {
	const { id } = useParams()
	const { data, isPeding, error } = useFetch(
		`https://api.unsplash.com/photos/${id}?client_id=${
			import.meta.env.ACCESS_KEY
		}`
	)
	console.log(data)

	return <div></div>
}

export default ImageInfo

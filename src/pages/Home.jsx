import React, { useEffect, useRef, useState } from 'react'
import { useActionData } from 'react-router-dom'
import { ImageContainer, Search } from '../components'
import { useFetch } from './../hooks/useFetch'

// actions
export const action = async ({ request }) => {
	let formData = await request.formData()
	let search = formData.get('search')
	return search
}

function Home() {
	const searchParamFromAction = useActionData()
	const [allImages, setAllImages] = useState([])
	const [pageParam, setPageParam] = useState(1)

	const prevSearchParam = useRef(searchParamFromAction)

	const { data, isPending, error } = useFetch(
		`https://api.unsplash.com/search/photos?client_id=${
			import.meta.env.VITE_ACCESS_KEY
		}&query=${searchParamFromAction ?? 'all'}&page=${pageParam}`
	)

	useEffect(() => {
		if (data && data.results) {
			setAllImages(prevImages => {
				return pageParam === 1 ? data.results : [...prevImages, ...data.results]
			})
		}
	}, [data])

	useEffect(() => {
		if (searchParamFromAction !== prevSearchParam.current) {
			setAllImages([])
			setPageParam(1)
			prevSearchParam.current = searchParamFromAction
		}
	}, [searchParamFromAction])

	if (isPending) {
		return <h1>Loading...</h1>
	}

	return (
		<div className='align-elements'>
			<div className='my-10'>
				<Search />
			</div>
			{allImages.length > 0 && <ImageContainer images={allImages} />}

			<div className='my-10 mx-auto'>
				<button
					className='btn btn-secondary font-display text-xl hover:text-white btn-block'
					onClick={() => setPageParam(pageParam + 1)}
				>
					Read more
				</button>
			</div>
		</div>
	)
}

export default Home

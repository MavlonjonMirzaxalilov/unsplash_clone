import React from 'react'
import FormInput from './FormInput'
import { Form } from 'react-router-dom'

function Search() {
	return (
		<Form method='post' className='max-w-96 w-full mx-auto flex gap-2'>
			<FormInput  type={"text"} placeholder={"Search"} name={'search'} className='font-display'/>
			<button className='btn btn-primary md:hidden btn-sm  font-display'>Search</button>
		</Form>
	)
}

export default Search

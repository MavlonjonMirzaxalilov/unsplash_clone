import React from 'react'
import { FaRegHeart, FaHeart, FaDownload } from 'react-icons/fa'
import { useGlobalContext } from './../hooks/useGlobalContext'
import { Link } from 'react-router-dom'
function Image({ image, added }) {
	const { likedImages, dispatch } = useGlobalContext()
	const { links, urls, alt_description, user } = image

	const addLikedImage = image => {
		const alreadyAdded = likedImages.some(img => {
			return img.id === image.id
		})

		if (!alreadyAdded) {
			dispatch({ type: 'LIKE', payload: image })
		} else {
			dispatch({ type: 'UNLIKE', payload: image.id })
		}
	}

	return (
		<Link to={'/image-info'}>
			<div className='relative group'>
				{!added && (
					<span
						onClick={() => addLikedImage(image)}
						className='absolute heart-icon  hover-icons'
					>
						<FaRegHeart className='text-white ' />
					</span>
				)}
				{added && (
					<span
						className='absolute   heart-icon hover-icons bg-white'
						onClick={() => addLikedImage(image)}
					>
						<FaHeart className='text-red-600 ' />
					</span>
				)}
				<img
					src={urls.regular}
					alt={alt_description}
					className='w-full rounded-md'
				/>
				<span className='absolute left-2 bottom-2 flex gap-2 items-center hover-icons'>
					<img
						src={user.profile_image.large}
						alt={user.name + 'avatar'}
						className=' w-5 h-5 md:w-8 rounded-full md:h-8'
					/>
					<p className='text-white text-xs md:text-sm'>{user.name}</p>
				</span>
				<span className='absolute w-7 h-7  flex justify-center items-center cursor-pointer right-2 bottom-2 hover-icons '>
					<a download href={links.download + '&force=true'}>
						<FaDownload className='text-white' />
					</a>
				</span>
			</div>
		</Link>
	)
}

export default Image

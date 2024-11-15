import React from 'react'

import { FaDownload, FaHeart, FaRegHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useGlobalContext } from './../hooks/useGlobalContext'
import { toast } from 'react-toastify'
function Image({ image, added }) {
	const { likedImages, dispatch } = useGlobalContext()
	const { links, urls, alt_description, user } = image

	const addLikedImage = (image, event) => {
		event.preventDefault()
		const alreadyAdded = likedImages.some(img => {
			return img.id === image.id
		})

		if (!alreadyAdded) {
			dispatch({ type: 'LIKE', payload: image })
		} else {
			dispatch({ type: 'UNLIKE', payload: image.id })
		}
	}
	const downloadImage = e => {
		e.preventDefault()
		window.open(links.download + '&force=true', '_blank')
	}
	const notify = () => toast('You liked this image❤️')
	const dislike = () => toast.error('You disliked this image💔')
	return (
		<Link to={`/image-info/${image.id}`}>
			<div className='relative group'>
				{!added && (
					<span
						onClick={event => {
							addLikedImage(image, event), notify()
						}}
						className='absolute heart-icon  hover-icons'
					>
						<FaRegHeart className='text-white ' />
					</span>
				)}
				{added && (
					<span
						className='absolute rounded-md  heart-icon hover-icons bg-white'
						onClick={event => {addLikedImage(image, event),dislike()}}
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
						className=' w-5 h-5 md:w-8 rounded-md md:h-8'
					/>
					<p className='text-white text-xs font-display  md:text-lg'>
						{user.name}
					</p>
				</span>
				<span className='absolute w-7 h-7  flex justify-center items-center cursor-pointer right-2 bottom-2 hover-icons'>
					<span onClick={event => downloadImage(event)}>
						<FaDownload className='text-white' />
					</span>
				</span>
			</div>
		</Link>
	)
}

export default Image

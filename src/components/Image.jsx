import React from 'react'
import { FaRegHeart, FaHeart, FaDownload } from 'react-icons/fa'
function Image({ image }) {
	const { links, urls, alt_description, user } = image
	return (
		<div className='relative group'>
			{true && (
				<span className='absolute heart-icon  hover-icons'>
					<FaRegHeart className='text-white ' />
				</span>
			)}
			{false && (
				<span className='absolute   heart-icon hover-icons bg-white'>
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
	)
}

export default Image
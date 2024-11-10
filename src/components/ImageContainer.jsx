import React from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import Image from './Image'
function ImageContainer({ images }) {
	return (
		<ResponsiveMasonry
			columnsCountBreakPoints={{
				350: 2,
				720: 3,
				900: 4,
			}}
		>
			<Masonry gutter='10px'>
				{images.map(image => {
					return <Image key={image.id} image={image} />
				})}
			</Masonry>
		</ResponsiveMasonry>
	)
}

export default ImageContainer

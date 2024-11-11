import { useGlobalContext } from './../hooks/useGlobalContext'
import ImageContainer from './../components/ImageContainer'
function LikedImages() {
	const { likedImages } = useGlobalContext()

	if (likedImages.length === 0) {
		return <h1>You don't choose any images yet!</h1>
	}

	return (
		<div className='align-elements'>
			{likedImages.length > 0 && <ImageContainer images={likedImages} />}
		</div>
	)
}

export default LikedImages

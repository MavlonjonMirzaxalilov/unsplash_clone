import { useGlobalContext } from './../hooks/useGlobalContext'
import ImageContainer from './../components/ImageContainer'
function LikedImages() {
	const { likedImages } = useGlobalContext()

	if (likedImages.length === 0) {
		return (
			<div className='h-full flex justify-center items-center gap-10 flex-col'>
				<h1 className='text-center text-4xl'>
					You don't choose any images yet!
				</h1>
				<button className='btn btn-primary'>Go Home</button>
			</div>
		)
	}

	return (
		<div className='align-elements'>
			{likedImages.length > 0 && <ImageContainer images={likedImages} />}
		</div>
	)
}

export default LikedImages

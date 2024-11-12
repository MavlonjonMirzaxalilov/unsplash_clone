// react router dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import {
	About,
	Contact,
	DownloadImages,
	Home,
	ImageInfo,
	LikedImages,
} from './pages'

// main layout
import MainLayout from './layouts/MainLayout'

//actions
import { action as HomeAction } from './pages/Home'

function App() {
	const routes = createBrowserRouter([
		{ 
			path: '/',
			exact: true,
			element: <MainLayout />,
			children: [
				{ index: true, element: <Home />, action: HomeAction },
				{ path: '/about', element: <About /> },
				{ path: '/contact', element: <Contact /> },
				{ path: '/liked-images', element: <LikedImages /> },
				{ path: '/download-images', element: <DownloadImages /> },
				{ path: '/image-info', element: <ImageInfo /> },
			],
		},
	])
	return (
		<>
			<RouterProvider router={routes} />
		</>
	)
}

export default App

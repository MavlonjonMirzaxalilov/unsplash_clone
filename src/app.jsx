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
import { Analytics } from '@vercel/analytics/react'
//actions
import { action as HomeAction } from './pages/Home'

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			exact: true,
			element: <MainLayout />,
			children: [
				<Analytics />,
				{ index: true, element: <Home />, action: HomeAction },
				{ path: '/about', element: <About /> },
				{ path: '/contact', element: <Contact /> },
				{ path: '/liked-images', element: <LikedImages /> },
				{ path: '/download-images', element: <DownloadImages /> },
				{ path: '/image-info/:id', element: <ImageInfo /> },
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

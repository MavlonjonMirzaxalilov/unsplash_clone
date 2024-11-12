//react-router-dom
import { Link } from 'react-router-dom'
// react-icons

import { FaHeart } from 'react-icons/fa6'
import { FaSun, FaMoon, FaUnsplash, FaDownload } from 'react-icons/fa'

//links
import { NavLinks } from './'
import { useEffect, useState } from 'preact/hooks'
import { useGlobalContext } from '../hooks/useGlobalContext'


const themeFromLocalStorage = () => {
	return localStorage.getItem('theme') || 'winter'
}

function Navbar() {
	const { likedImages, downloadImages } = useGlobalContext()
	const [theme, setTheme] = useState(themeFromLocalStorage())
	const toggleTheme = () => {
		const newTheme = theme == 'winter' ? 'dracula' : 'winter'
		setTheme(newTheme)
	}

	useEffect(() => {
		localStorage.setItem('theme', theme)
		document.documentElement.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<header className='bg-base-200'>
			<div className='navbar align-elements'>
				<div className='navbar-start'>
					<Link to={'/'} className='hidden md:flex'>
						<FaUnsplash className='w-8 h-8' />
					</Link>
					<div className='dropdown md:hidden'>
						<div tabIndex={0} role='button'>
							<FaUnsplash className='w-8 h-8' />
						</div>
						<ul
							tabIndex={0}
							className='dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow'
						>
							<NavLinks />
						</ul>
					</div>
				</div>
				<div className='navbar-center hidden md:flex'>
					<ul className='menu menu-horizontal  rounded-box'>
						<NavLinks />
					</ul>
				</div>
				<div className='navbar-end flex gap-6 items-center'>
					<Link to={'/download-images'}>
						<div className='indicator'>
							<span className='indicator-item badge badge-sm badge-secondary'>
								{downloadImages}
							</span>
							<FaDownload className='h-6 w-6' />
						</div>
					</Link>
					<Link to={'/liked-images'}>
						<div className='indicator'>
							<span className='indicator-item badge badge-sm badge-secondary'>
								{likedImages.length}
							</span>
							<FaHeart className='h-6 w-6' />
						</div>
					</Link>

					<label className='swap swap-rotate'>
						{/* this hidden checkbox controls the state */}
						<input type='checkbox' onClick={toggleTheme} />

						{/* sun icon */}
						<FaSun className='swap-on h-7 w-7 fill-current' />

						{/* moon icon */}
						<FaMoon className='swap-off h-7 w-7 fill-current' />
					</label>
				</div>
			</div>
		</header>
	)
}

export default Navbar

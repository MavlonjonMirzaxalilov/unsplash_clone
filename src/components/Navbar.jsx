//react-router-dom
import { Link } from 'react-router-dom'
// react-icons

import { FaHeart } from 'react-icons/fa6'
import { FaSun, FaMoon, FaUnsplash } from 'react-icons/fa'

//links
import { NavLinks } from './'
import { useEffect, useState } from 'preact/hooks'

const themeFromLocalStorage = () => {
	return localStorage.getItem('theme') || 'winter'
}

function Navbar() {
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
				<div className='navbar-end flex gap-3 items-center'>
					<Link to={'/liked-images'}>
						<div className='indicator'>
							<span className='indicator-item badge badge-sm badge-secondary'>
								0
							</span>
							<FaHeart className='h-6 w-6' />
						</div>
					</Link>

					<label className='swap swap-rotate'>
						{/* this hidden checkbox controls the state */}
						<input type='checkbox' onClick={toggleTheme} />

						{/* sun icon */}
						<FaSun className='swap-on h-6 w-6 fill-current' />

						{/* moon icon */}
						<FaMoon className='swap-off h-6 w-6 fill-current' />
					</label>
				</div>
			</div>
		</header>
	)
}

export default Navbar

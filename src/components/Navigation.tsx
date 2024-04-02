import { Link } from 'react-router-dom';

export default function Navigation() {
	return (
		<header className='shadow-lg bg-green-700 text-white'>
			<nav className='max-w-[1400px] mx-auto px-4 flex justify-between items-center h-[50px]'>
				<h3 className='font-bold text-lg'>GitHub Search</h3>

				<ul className='space-x-6'>
					<Link
						to='/'
						className='hover:text-green-800 transition-all'
					>
						Home
					</Link>
					<Link
						to='/favorites'
						className='hover:text-green-800 transition-all'
					>
						Favorites
					</Link>
				</ul>
			</nav>
		</header>
	);
}

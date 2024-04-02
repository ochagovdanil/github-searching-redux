import FavoriteCard from '../components/FavoriteCard';
import { useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';

export default function FavoritesPage() {
	const favorites: IRepo[] = useAppSelector(state => state.github.favorites); // returns favorite repos

	if (favorites.length === 0)
		return (
			<p className='text-center font-bold text-xl mt-10'>
				No items found!
			</p>
		);

	return (
		<div className='max-w-[1400px] mx-auto px-4 mt-8'>
			<ul className='list-none text-center space-y-4 my-4'>
				{favorites.map((repo: IRepo, index: number) => {
					return <FavoriteCard key={index} repo={repo} />;
				})}
			</ul>
		</div>
	);
}

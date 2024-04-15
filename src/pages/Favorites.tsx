import { IRepo } from '../entities/repo/Repo';
import { useAppSelector } from '../shared/hooks/redux';
import FavoriteList from '../widgets/favorite-repos/FavoriteList';

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
			<FavoriteList favorites={favorites} />
		</div>
	);
}

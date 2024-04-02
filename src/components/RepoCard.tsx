import { memo, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { IRepo } from '../models/models';
import {
	addToFavorites,
	removeFromFavorites,
} from '../store/github/github.slice';

interface RepoCardType {
	repo: IRepo;
}

function RepoCard({ repo }: RepoCardType) {
	const favorites: IRepo[] = useAppSelector(state => state.github.favorites); // list of favorite repos
	const dispatch = useAppDispatch();

	const [isFavorite, setIsFavorite] = useState<boolean>(false); // tells if repo is favorite

	useEffect(() => {
		const favorite: IRepo | undefined = favorites.find(
			(item: IRepo) => item.id === repo.id
		);
		const isFavorite: boolean = favorite !== undefined;
		setIsFavorite(isFavorite);
	});

	function handleAddClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		dispatch(addToFavorites(repo));
		setIsFavorite(true);
	}

	function handleRemoveClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		dispatch(removeFromFavorites(repo));
		setIsFavorite(false);
	}

	return (
		<article className='border py-3 px-5 rounded-lg mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank' rel='noreferrer'>
				<h2 className='text-xl font-bold text-gray-800'>
					{repo.full_name}
				</h2>
				<p className='text-gray-700'>Repo name: {repo.name}</p>
				<p className='text-gray-700'>Forks: {repo.forks}</p>
				<p className='text-gray-700'>Watchers: {repo.watchers}</p>
				<p className='text-gray-700'>License: {repo?.license?.name}</p>
				<p className='text-gray-700'>
					Default branch: {repo.default_branch}
				</p>
				<p className='text-gray-700'>Created at: {repo.created_at}</p>
				<p className='text-sm font-thin text-gray-600'>
					Description: {repo.description}
				</p>
				{!isFavorite && (
					<button
						className='button bg-yellow-400'
						onClick={handleAddClick}
					>
						Add to favorites
					</button>
				)}
				{isFavorite && (
					<button
						className='button bg-red-400'
						onClick={handleRemoveClick}
					>
						Remove from favorites
					</button>
				)}
			</a>
		</article>
	);
}

export default memo(RepoCard);

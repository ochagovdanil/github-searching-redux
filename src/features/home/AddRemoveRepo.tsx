import { memo, useEffect, useState } from 'react';
import { IRepo } from '../../entities/repo/Repo';
import {
	addToFavorites,
	removeFromFavorites,
} from '../../shared/redux-slices/github';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';

interface AddRemoveRepo {
	repo: IRepo;
}

function AddRemoveRepo({ repo }: AddRemoveRepo) {
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
		<>
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
		</>
	);
}

export default memo(AddRemoveRepo);

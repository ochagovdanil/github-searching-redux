import { memo } from 'react';
import { useAppDispatch } from '../../shared/hooks/redux';
import { IRepo } from '../../entities/repo/Repo';
import { removeFromFavorites } from '../../shared/redux-slices/github';

interface RemoveFromFavoritesType {
	repo: IRepo;
}

function RemoveFromFavorites({ repo }: RemoveFromFavoritesType) {
	const dispatch = useAppDispatch();

	// remove from favorites
	function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
		event.preventDefault();

		dispatch(removeFromFavorites(repo));
	}

	return (
		<button
			onClick={event => handleClick(event)}
			className='button bg-red-400'
		>
			Remove from favorites
		</button>
	);
}

export default memo(RemoveFromFavorites);

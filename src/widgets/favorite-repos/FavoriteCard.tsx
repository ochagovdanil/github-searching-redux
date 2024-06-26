import { memo } from 'react';
import { IRepo } from '../../entities/repo/Repo';
import RemoveFromFavorites from '../../features/favorites/RemoveFromFavorites';

interface FavoriteCardType {
	repo: IRepo;
}

function FavoriteCard({ repo }: FavoriteCardType) {
	return (
		<article className='border py-3 px-5 rounded-lg mb-2 hover:shadow-md hover:bg-gray-100 transition-all'>
			<a href={repo.html_url} target='_blank' rel='noreferrer'>
				<img
					src={repo.owner.avatar_url}
					alt={repo.owner.login}
					title={repo.owner.login}
					className='rounded-full w-52 my-4 mx-auto'
				/>
				<h2 className='font-bold text-xl text-gray-800'>
					Repo name: {repo.name}
				</h2>
				<p className='text-lg text-gray-800'>
					Owner: {repo.owner.login}
				</p>
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
				<RemoveFromFavorites repo={repo} />
			</a>
		</article>
	);
}

export default memo(FavoriteCard);

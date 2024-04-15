import { memo } from 'react';
import { IRepo } from '../../entities/repo/Repo';
import AddRemoveRepo from '../../features/home/AddRemoveRepo';

interface RepoCardType {
	repo: IRepo;
}

function RepoCard({ repo }: RepoCardType) {
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
				<AddRemoveRepo repo={repo} />
			</a>
		</article>
	);
}

export default memo(RepoCard);

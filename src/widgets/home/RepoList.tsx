import { memo } from 'react';
import { IRepo } from '../../entities/repo/Repo';
import RepoCard from './RepoCard';

interface RepoListType {
	repos: IRepo[] | undefined;
}

function RepoList({ repos }: RepoListType) {
	return (
		<div className='text-center mb-10'>
			{repos?.map((repo: IRepo, index: number) => {
				return <RepoCard key={index} repo={repo} />;
			})}
		</div>
	);
}

export default memo(RepoList);

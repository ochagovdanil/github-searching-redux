import { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { IRepo, IUser } from '../models/models';
import {
	useLazyGetRepoByUsernameQuery,
	useSearchUsersQuery,
} from '../store/github/github.api';
import RepoCard from '../components/RepoCard';

export default function HomePage() {
	const [search, setSearch] = useState<string>(''); // username search input
	const [isDropdownShown, setIsDropdownShown] = useState<boolean>(false);

	const debounced = useDebounce(search); // delay searching process

	const { isLoading, isError, data } = useSearchUsersQuery(debounced, {
		skip: debounced.length < 3, // skip request if this condition is faced
	}); // returns users
	const [fetchRepos, { isLoading: isReposLoading, data: repos }] =
		useLazyGetRepoByUsernameQuery();

	useEffect(() => {
		setIsDropdownShown(debounced.length > 3 && data?.length! > 0); // show/hide dropdown menu
	}, [debounced, data]);

	// search for repos by username
	function handleClick(username: string) {
		setIsDropdownShown(false);
		fetchRepos(username);
	}

	return (
		<div className='max-w-[1400px] mx-auto px-4'>
			<div className='relative mx-auto my-10'>
				<input
					type='text'
					className='border py-2 px-4 w-full h-[42px] mb-2 rounded-md'
					placeholder='Search for Github username...'
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
				{isDropdownShown && (
					<ul className='absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-auto shadow-md bg-white list-none rounded-b-lg'>
						{data?.map((user: IUser, index: number) => {
							return (
								<li
									key={index}
									className=' py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer'
									onClick={() => handleClick(user.login)}
								>
									{user.login}
								</li>
							);
						})}
					</ul>
				)}
				{isLoading && (
					<p className='italic'>Loading dropdown menu...</p>
				)}
				{isError && (
					<p className='text-red-600 font-bold'>
						Something went wrong!
					</p>
				)}
			</div>
			{isReposLoading && (
				<p className='italic text-center'>Repos are loading...</p>
			)}
			<div className='text-center mb-10'>
				{repos?.map((repo: IRepo, index: number) => {
					return <RepoCard key={index} repo={repo} />;
				})}
			</div>
		</div>
	);
}

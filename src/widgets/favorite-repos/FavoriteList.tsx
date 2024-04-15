import { memo } from 'react';
import { IRepo } from '../../entities/repo/Repo';
import FavoriteCard from './FavoriteCard';

interface FavoriteListType {
	favorites: IRepo[];
}

function FavoriteList({ favorites }: FavoriteListType) {
	return (
		<ul className='list-none text-center space-y-4 my-4'>
			{favorites.map((repo: IRepo, index: number) => {
				return <FavoriteCard key={index} repo={repo} />;
			})}
		</ul>
	);
}

export default memo(FavoriteList);

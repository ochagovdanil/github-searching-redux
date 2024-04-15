import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IRepo } from '../../entities/repo/Repo';

const LS_FAV_KEY = 'redux-repo-favorite-urls-key';

interface GithubState {
	favorites: IRepo[]; // it stores favorite repos
}

const initialState: GithubState = {
	favorites: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]'),
};

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		// add to state and local storage object
		addToFavorites(state: GithubState, action: PayloadAction<IRepo>) {
			state.favorites.push(action.payload);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
		},
		// remove from state and local storage object
		removeFromFavorites(state: GithubState, action: PayloadAction<IRepo>) {
			state.favorites = state.favorites.filter(
				(repo: IRepo) => repo.id !== action.payload.id
			);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favorites));
		},
	},
});

export default githubSlice.reducer;
export const { addToFavorites, removeFromFavorites } = githubSlice.actions;

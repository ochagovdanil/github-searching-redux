import { configureStore } from '@reduxjs/toolkit';
import { githubApi } from '../shared/api/github';
import { setupListeners } from '@reduxjs/toolkit/query';
import githubSlice from '../shared/redux-slices/github';

export const store = configureStore({
	reducer: {
		[githubApi.reducerPath]: githubApi.reducer, // RTK Query
		github: githubSlice, // github favorites
	},
	// define github middleware
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch); // used for refetchOnFocus prop

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IRepo, IUser, ServerResponse } from '../../models/models';

export const githubApi = createApi({
	reducerPath: 'github/api', // Redux key
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/', // remote API url
	}),
	refetchOnFocus: true,
	endpoints: build => ({
		// IUser[] - what we get
		// string - what we pass (github username)
		searchUsers: build.query<IUser[], string>({
			query: (username: string) => ({
				url: 'search/users', // endpoint
				params: {
					// search params
					q: username, // github search param for username
					per_page: 20, // limit total number of users in response
				},
			}),
			transformResponse: (response: ServerResponse<IUser>) =>
				response.items, // return only users (no additional data) in response
		}),
		getRepoByUsername: build.query<IRepo[], string>({
			query: (username: string) => ({
				url: `users/${username}/repos`, // return repos by username
			}),
		}),
	}),
});

export const { useSearchUsersQuery, useLazyGetRepoByUsernameQuery } = githubApi;

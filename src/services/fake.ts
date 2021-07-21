import { createApi, fakeBaseQuery, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface IComment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}


export const fakeApi = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	tagTypes: [],
	endpoints: (build) => ({
		getComment: build.query<IComment, null>({
			query: (id: string) => `comments/${id}`,
		})
	})
})

export const { useGetCommentQuery } = fakeApi
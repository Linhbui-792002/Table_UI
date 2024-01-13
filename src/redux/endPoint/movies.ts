import { objectToUrlParams } from '@src/utils/convertData';
import { baseQuery } from '../api/index';
import { createApi } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
    reducerPath: 'movies',
    tagTypes: ['MoviesTag'],
    baseQuery: baseQuery,
    endpoints: (build) => ({
        getListMovies: build.query({
            query: (param: any) => {
                const string = objectToUrlParams(param)
                return {
                    url: `/movies?${string}`
                }
            },
            providesTags: ['MoviesTag'],
        })
    })
})

export const { useGetListMoviesQuery } = moviesApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { GamesResponse } from './types';

export const gamesApi = createApi({
  reducerPath: 'gamesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/games/pragmatic/game/',
  }),
  endpoints: (builder) => ({
    getList: builder.query<GamesResponse, void>({
      query: () => 'list?partner_name=belparyaj',
    }),
  }),
});

export const { useGetListQuery } = gamesApi;

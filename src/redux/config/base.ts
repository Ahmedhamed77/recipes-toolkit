import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const server = {
  live: 'https://test.kode-t.ru/',
  stage: 'https://test.kode-t.ru/',
};

const baseURL = __DEV__ ? server.stage : server.live;

export const baseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  prepareHeaders: headers => {
    //   in case we have token for redux we use getState from prepareHeaders
    const startToken = null;
    if (startToken) {
      headers.set('authorization', `Bearer ${startToken}`);
    }

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['API'],
  endpoints: _ => ({}),
});

import {RecipesResponse} from './types';
import {baseApi} from '../../config';
import {recipesEndpoints} from './endpoints';

const fetchRecipes = baseApi.injectEndpoints({
  endpoints: build => ({
    getRecipes: build.query<RecipesResponse, void>({
      query(body) {
        return {url: recipesEndpoints.getAllRecipes, method: 'GET', body};
      },
    }),
  }),
});

export const {useGetRecipesQuery} = fetchRecipes;

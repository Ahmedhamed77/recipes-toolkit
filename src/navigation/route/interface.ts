import {StackNavigationProp} from '@react-navigation/stack';

export type NO_PARAMS = undefined;

export enum MainParams {
  Recipes = 'Recipes',
  Recipe = 'Recipe',
}

export type MainParamsList = {
  [MainParams.Recipes]: NO_PARAMS;
  [MainParams.Recipe]: {uuid?: string};
};

export type MainNavigation = StackNavigationProp<MainParamsList, MainParams>;

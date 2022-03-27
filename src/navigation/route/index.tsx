import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {RecipeScreen, RecipesScreen} from '../../screens';

import {MainParams, MainParamsList} from './interface';

const Stack = createStackNavigator<MainParamsList>();

export const Route = () => {
  return (
    <Stack.Navigator initialRouteName={MainParams.Recipes} screenOptions={{}}>
      <Stack.Screen name={MainParams.Recipes} component={RecipesScreen} />
      <Stack.Screen name={MainParams.Recipe} component={RecipeScreen} />
    </Stack.Navigator>
  );
};

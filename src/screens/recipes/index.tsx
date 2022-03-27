import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

import {useGetRecipesQuery} from '../../redux/services/recipes/get-recipes';
import {MainNavigation, MainParams} from '../../navigation/route/interface';

import {RecipesModule} from './recipe-module';
import {styles} from './style';

interface RecipesScreenProps {
  navigation: MainNavigation;
}

export const RecipesScreen: React.FC<RecipesScreenProps> = ({navigation}) => {
  const {data, isLoading} = useGetRecipesQuery();

  if (isLoading) {
    return <ActivityIndicator style={styles.loaderStyle} />;
  }

  if (!data) {
    return null;
  }

  const onRecipePress = (uuid: string) => {
    navigation.navigate(MainParams.Recipe, {uuid});
  };

  return (
    <SafeAreaView style={styles.container}>
      <RecipesModule data={data.recipes} onRecipePress={onRecipePress} />
    </SafeAreaView>
  );
};

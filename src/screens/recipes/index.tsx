import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';

import {useGetRecipesQuery} from '../../redux/services/recipes/get-recipes';
import {Recipe} from '../../redux/services';
import {PressableScaleCard, RecipeCard} from '../../shared/ui';
import {MainNavigation, MainParams} from '../../navigation/route/interface';
import {styles} from './style';

interface RecipesScreenProps {
  navigation: MainNavigation;
}

export const RecipesScreen: React.FC<RecipesScreenProps> = ({navigation}) => {
  const {data, isLoading} = useGetRecipesQuery();

  if (isLoading) {
    return <ActivityIndicator style={styles.loaderStyle} />;
  }

  if (!data?.recipes) {
    return null;
  }

  const onRecipePress = (uuid: string) => {
    navigation.navigate(MainParams.Recipe, {uuid});
  };

  const renderItem: ListRenderItem<Recipe> = ({item}) => {
    const onPress = () => onRecipePress(item.uuid);
    return (
      <PressableScaleCard onPress={onPress}>
        <RecipeCard recipe={item} />
      </PressableScaleCard>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={data.recipes}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

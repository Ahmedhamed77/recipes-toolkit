import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Recipe} from '../../../redux/services';
import {timeDataConverter} from '../../utils';
import {styles} from './style';

interface RecipeCardProps {
  recipe: Recipe;
}
export const RecipeCard: React.FC<RecipeCardProps> = ({recipe}) => {
  const date = timeDataConverter(recipe.lastUpdated);

  return (
    <View style={styles.container}>
      <View style={styles.rightContent}>
        <View>
          <Text numberOfLines={2} style={styles.recipeName}>
            {recipe.name}
          </Text>
          <Text numberOfLines={2} style={styles.recipeDesc}>
            {recipe.description}
          </Text>
        </View>

        <Text style={styles.recipeDate}>{date}</Text>
      </View>

      <View style={styles.leftContent}>
        <FastImage
          source={{
            uri: recipe.images[0],
            priority: FastImage.priority.high,
            cache: FastImage.cacheControl.web,
          }}
          style={styles.imageStyle}
        />
      </View>
    </View>
  );
};

import React from 'react';

import {styles} from './style';
import {Text, View} from 'react-native';
import {
  MainNavigation,
  MainParams,
  MainParamsList,
} from '../../navigation/route/interface';
import {RouteProp} from '@react-navigation/native';

interface RecipeScreenProps {
  navigation: MainNavigation;
  route: RouteProp<MainParamsList, MainParams.Recipe>;
}

export const RecipeScreen: React.FC<RecipeScreenProps> = ({
  navigation,
  route,
}) => {
  const {uuid} = route.params;
  return (
    <View style={styles.container}>
      <Text>RecipeScreen</Text>
      <Text>{uuid}</Text>
    </View>
  );
};

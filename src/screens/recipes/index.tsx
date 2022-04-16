import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  NativeModules,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import {useGetRecipesQuery} from '../../redux/services/recipes/get-recipes';
import {MainNavigation, MainParams} from '../../navigation/route/interface';

import {RecipesModule} from './recipe-module';
import {styles} from './style';
import {useIsFocused} from '@react-navigation/native';
const {ScreenCaptureModule} = NativeModules;

interface RecipesScreenProps {
  navigation: MainNavigation;
}

export const RecipesScreen: React.FC<RecipesScreenProps> = ({navigation}) => {
  const {data, isLoading} = useGetRecipesQuery();

  console.log(ScreenCaptureModule, 'CalendarModuleCalendarModule');

  const isFocused = useIsFocused();

  useEffect(() => {
    if ((Platform.OS = 'android')) {
      ScreenCaptureModule.preventScreenCapture();
    }
    return () => {
      if ((Platform.OS = 'android')) {
        ScreenCaptureModule.allowScreenCapture();
      }
    };
  }, [isFocused]);

  if (isLoading) {
    return <ActivityIndicator style={styles.loaderStyle} />;
  }

  // if (!data) {
  //   return null;
  // }

  const onRecipePress = () => {
    navigation.navigate(MainParams.Recipe, {});
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <RecipesModule data={data.recipes} onRecipePress={onRecipePress} /> */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Welcome</Text>
        <Button title="next" onPress={onRecipePress} />
      </View>
    </SafeAreaView>
  );
};

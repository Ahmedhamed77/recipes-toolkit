import React, {useEffect} from 'react';

import {styles} from './style';
import {Alert, NativeModules, Platform, Text, View} from 'react-native';
import {
  MainNavigation,
  MainParams,
  MainParamsList,
} from '../../navigation/route/interface';
import {RouteProp, useIsFocused} from '@react-navigation/native';
const {ScreenCaptureModule} = NativeModules;

interface RecipeScreenProps {
  navigation: MainNavigation;
  route: RouteProp<MainParamsList, MainParams.Recipe>;
}

export const RecipeScreen: React.FC<RecipeScreenProps> = ({
  navigation,
  route,
}) => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if ((Platform.OS = 'android')) {
      console.log('we');
      ScreenCaptureModule.allowScreenCapture();
    }
    return () => {};
  }, [isFocused]);

  // const {uuid} = route.params;
  return (
    <View style={styles.container}>
      <Text>RecipeScreen</Text>
      {/* <Text>{uuid}</Text> */}
    </View>
  );
};

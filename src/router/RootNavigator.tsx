import React, {memo} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREEN, RootStackParamsList} from '@router/screenType';
import RootAuth from '@router/rootAuth';
import RootContainer from '@router/rootContainer';
import RootSplash from '@router/rootSplash';

const RootStack = createStackNavigator<RootStackParamsList>();

export const RootNavigator = memo(({}) => {
  return (
    <RootStack.Navigator
      initialRouteName={APP_SCREEN.UN_AUTHORIZE}
      headerMode="none"
      screenOptions={{}}>
      <RootStack.Screen name={APP_SCREEN.UN_AUTHORIZE} component={RootAuth} />
      <RootStack.Screen name={APP_SCREEN.AUTHORIZE} component={RootContainer} />
      <RootStack.Screen name={APP_SCREEN.SPLASH} component={RootSplash} />
    </RootStack.Navigator>
  );
});

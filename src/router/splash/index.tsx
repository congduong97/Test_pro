import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {APP_SCREEN, SplashParamsList} from '@router/screenType';

const SplashStack = createStackNavigator<SplashParamsList>();

export default function RootSplash() {
  return (
    <SplashStack.Navigator
      screenOptions={{headerShown: false}}></SplashStack.Navigator>
  );
}

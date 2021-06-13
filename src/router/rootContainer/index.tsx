import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {APP_SCREEN, AuthorizeParamsList} from '@router/screenType';
import HomeScreen from '@screens/containers/homeScreen';
import SettingScreen from '@screens/containers/SettingScreen';

const ContainerStack = createStackNavigator<AuthorizeParamsList>();

export default function RootContainer() {
  return (
    <ContainerStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <ContainerStack.Screen
        name={APP_SCREEN.HOME_SCREEN}
        component={HomeScreen}
      />
      <ContainerStack.Screen
        name={APP_SCREEN.SETTING_SCREEN}
        component={SettingScreen}
      />
    </ContainerStack.Navigator>
  );
}

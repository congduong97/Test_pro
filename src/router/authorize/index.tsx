import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {APP_SCREEN, AuthorizeParamsList} from '@router/screenType';
import Home from '@features/home';

const Authorize = createStackNavigator<AuthorizeParamsList>();

export default function RootContainer() {
  return (
    <Authorize.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Authorize.Screen name={APP_SCREEN.HOME_SCREEN} component={Home} />
    </Authorize.Navigator>
  );
}

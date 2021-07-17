import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {APP_SCREEN, UnAuthorizeParamsList} from '@router/screenType';
import SignIn from '@features/authentication/signIn';
import signUp from '@features/authentication/signUp';
const AuthStack = createStackNavigator<UnAuthorizeParamsList>();

export default function RootAuth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen name={APP_SCREEN.SIGN_IN_SCREEN} component={SignIn} />
      <AuthStack.Screen name={APP_SCREEN.SIGN_UP_SCREEN} component={signUp} />
    </AuthStack.Navigator>
  );
}

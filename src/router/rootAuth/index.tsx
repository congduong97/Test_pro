import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {APP_SCREEN, UnAuthorizeParamsList} from '@router/screenType';
import SignInScreen from '@screens/auth/signInScreen';
import SignUpScreen from '@screens/auth/signUpScreen';
import ReminderScreen from '@screens/auth/reminderScreen';
import IntroScreen from '@screens/auth/introScreen';

const AuthStack = createStackNavigator<UnAuthorizeParamsList>();

export default function RootAuth() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <AuthStack.Screen
        name={APP_SCREEN.SIGN_IN_SCREEN}
        component={SignInScreen}
      />
      <AuthStack.Screen
        name={APP_SCREEN.SIGN_UP_SCREEN}
        component={SignUpScreen}
      />
      <AuthStack.Screen
        name={APP_SCREEN.REMINDER_SCREEN}
        component={ReminderScreen}
      />
      <AuthStack.Screen
        name={APP_SCREEN.INTRO_SCREEN}
        component={IntroScreen}
      />
    </AuthStack.Navigator>
  );
}

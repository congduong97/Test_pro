import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import { RootNavigator } from '@router/RootNavigator';
import { navigationRef } from '@router/navigationService';
export default function AppNavigator() {
  const routerNameRef = useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() =>
        (routerNameRef.current = navigationRef.current?.getCurrentRoute()?.name)
      }
      onStateChange={() => {
        let prevRouterName = routerNameRef.current;
        let currentRouterName = navigationRef.current?.getCurrentRoute()?.name;
        console.log(
          'Log Router : Prev,Current : ',
          prevRouterName + ' ==> ' + currentRouterName,
        );
        routerNameRef.current = currentRouterName;
      }}>
      <RootNavigator />
    </NavigationContainer>
  );
}

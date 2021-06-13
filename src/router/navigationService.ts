import {NavigationContainerRef} from '@react-navigation/native';
import {createRef} from 'react';
import {RootStackParamsList} from '@router/screenType';

export const navigationRef = createRef<NavigationContainerRef>();

export function navigate<RouteName extends keyof RootStackParamsList>(
  ...args: undefined extends RootStackParamsList[RouteName]
    ? [RouteName] | [RouteName, RootStackParamsList[RouteName]]
    : [RouteName, RootStackParamsList[RouteName]]
) {
  navigationRef.current?.navigate(
    args[0],
    args.length > 1 ? args[1] : undefined,
  );
}

export function goBack() {
  navigationRef.current?.goBack();
}

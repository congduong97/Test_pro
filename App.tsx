/**
 *  Stamps Idol App*
 * @format
 * @flow strict-local
 */

import React, { Suspense } from 'react';
import type { Node } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '@router/AppNavigator';
import { Provider } from 'react-redux';
import store from '@store/index';
import { NativeBaseProvider } from 'native-base';
const App = () => {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Provider store={store}>
          <Suspense fallback={<View />}>
            <AppNavigator />
          </Suspense>
        </Provider>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

export default App;

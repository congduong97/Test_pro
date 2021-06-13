/**
 *  Stamps Idol App*
 * @format
 * @flow strict-local
 */

import React, {Suspense} from 'react';
import type {Node} from 'react';
import {View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigator from '@router/AppNavigator';
import {Provider} from 'react-redux';
import {configureAppStore} from '@store/index';
const store = configureAppStore();
const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <Suspense fallback={<View />}>
          <AppNavigator />
        </Suspense>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

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
import { NativeBaseProvider } from 'native-base';
import { I18nextProvider } from 'react-i18next';
import I18n from '@I18n';
import { storeDev } from '@store';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={storeDev}>
        <NativeBaseProvider>
          <I18nextProvider i18n={I18n}>
            <Suspense fallback={<View />}>
              <AppNavigator />
            </Suspense>
          </I18nextProvider>
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;

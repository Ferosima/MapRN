import { RouterNavigation } from './router';
import AlertsProvider from './alerts';
import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { persistor, store } from '~domain/store';

const RootView = (): React.ReactElement => (
  <SafeAreaProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AlertsProvider>
            <RouterNavigation />
          </AlertsProvider>
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  </SafeAreaProvider>
);

export default RootView;

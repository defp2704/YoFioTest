/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar,
} from 'react-native';

import { Provider } from 'react-redux';
import Store from './src/store';

import AppInit from './src/AppInit';

const App: () => React$Node = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Provider store={Store} >
      <AppInit />
    </Provider>
  </>
);

export default App;

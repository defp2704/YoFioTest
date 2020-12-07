/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AppInit from './src/AppInit';

const App: () => React$Node = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <AppInit />
  </>
);

export default App;

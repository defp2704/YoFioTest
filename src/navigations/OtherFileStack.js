import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  OtherFilesScreen,
} from '../screens';

const Stack = createStackNavigator();

const OtherFilesStack = () => (
  <Stack.Navigator
    headerMode='none'
  >
    <Stack.Screen name='other' component={OtherFilesScreen} />
  </Stack.Navigator>
);

export default OtherFilesStack;

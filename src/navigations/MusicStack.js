import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  MusicScreen,
} from '../screens';

const Stack = createStackNavigator();

const MusicStack = () => (
  <Stack.Navigator
    headerMode='none'
  >
    <Stack.Screen name='music' component={MusicScreen} />
  </Stack.Navigator>
);

export default MusicStack;

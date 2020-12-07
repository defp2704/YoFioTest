import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  PictureScreen,
} from '../screens';

const Stack = createStackNavigator();

const PhotoStack = () => (
  <Stack.Navigator
    headerMode='none'
  >
    <Stack.Screen name='pictures' component={PictureScreen} />
  </Stack.Navigator>
);

export default PhotoStack;

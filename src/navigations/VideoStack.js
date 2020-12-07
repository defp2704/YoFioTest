import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  VideoScreen,
} from '../screens';

const Stack = createStackNavigator();

const VideoStack = () => (
  <Stack.Navigator
    headerMode='none'
  >
    <Stack.Screen name='videos' component={VideoScreen} />
  </Stack.Navigator>
);

export default VideoStack;

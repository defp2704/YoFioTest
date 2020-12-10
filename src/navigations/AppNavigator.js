import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Header,
} from '../components';

import {
  PhotoStack,
  VideoStack,
  MusicStack,
  OtherFilesStack,
} from './index';

const TabNavigator = createMaterialTopTabNavigator();

const Stack = createStackNavigator();

const Tab = () => (
  <TabNavigator.Navigator
    gestureHandlerProps={{
      enabled: false,
    }}
  >
    <TabNavigator.Screen
      name='fotos'
      component={PhotoStack}
    />
    <TabNavigator.Screen name='videos' component={VideoStack} />
    <TabNavigator.Screen name='musica' component={MusicStack} />
    <TabNavigator.Screen name='otros' component={OtherFilesStack} />
  </TabNavigator.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: (props) => <Header props={props} />,
        }}
      >
        <Stack.Screen
          name='main'
          component={Tab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCmm from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleIcons from  'react-native-vector-icons/SimpleLineIcons'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
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
    tabBarOptions ={{
      activeTintColor: '#3b3b3b',
      inactiveTintColor:'#9cb6c7',
      indicatorStyle: {
        backgroundColor: 'transparent',
      },
      style: {
        elevation: 0,
        shadowOpacity: 0
      },
      showIcon: true,
      bounces: false,
      iconStyle: {
        width: wp('6%'),
      },
      labelStyle: {
        marginTop: wp('2%')
      }
    }}
  >
    <TabNavigator.Screen
      name='fotos'
      component={PhotoStack}
      options={{
        tabBarIcon: ({ color }) => <FontAwesome name='photo' color={color} size={wp('5%')} />,
      }}
    />
    <TabNavigator.Screen 
      name='videos' 
      component={VideoStack}
      options={{
        tabBarIcon: ({ color }) => <MaterialCmm name='play-box-outline' color={color} size={wp('6%')} />,
      }}
    />
    <TabNavigator.Screen
      name='musica'
      component={MusicStack}
      options={{
        tabBarIcon: ({ color }) => <SimpleIcons name='music-tone-alt' color={color} size={wp('5%')} />,
      }}
    />
    <TabNavigator.Screen
      name='otros'
      component={OtherFilesStack}
      options={{
        tabBarIcon: ({ color }) => <FontAwesome name='folder-o' color={color} size={wp('6%')} />,
      }}
    />
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

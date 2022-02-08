import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ImageScreen from '../screens/ImageScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFFFFF',
        headerShown: false,
        headerStyle: {
          backgroundColor: '#20232A',
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Home',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Proxima Nova',
            fontWeight: '700',
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Image',
          headerTitleStyle: {
            color: 'white',
            fontFamily: 'Proxima Nova',
            fontWeight: '700',
          },
        }}
        name="Image"
        component={ImageScreen}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;

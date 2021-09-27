import React from 'react';
import {DETAIL_SCREEN, HOME_SCREEN} from '@constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, Home} from '@screens';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={HOME_SCREEN}>
    <Stack.Screen component={Home} name={HOME_SCREEN} />
    <Stack.Screen component={Detail} name={DETAIL_SCREEN} />
  </Stack.Navigator>
);

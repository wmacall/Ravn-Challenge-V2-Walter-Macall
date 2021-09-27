import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes';
import React from 'react';

const App = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default App;

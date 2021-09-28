import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes';
import {ApolloProvider} from '@apollo/client';
import RNBootSplash from 'react-native-bootsplash';
import {client} from 'graphql/config';

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <AppRoutes />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;

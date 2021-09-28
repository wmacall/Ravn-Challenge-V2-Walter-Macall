import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes';
import {ApolloProvider} from '@apollo/client';
import {client} from 'graphql/config';

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;

import {NavigationContainer} from '@react-navigation/native';
import {AppRoutes} from '@routes';
import React from 'react';

import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;

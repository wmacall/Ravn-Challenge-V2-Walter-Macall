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
const allPeople = {
  keyArgs: ['id'],
  keyFields: false,
  merge(existing: any, incoming: any, {readField}: any) {
    const merged = existing ? existing?.people?.slice(0) : [];
    incoming?.people.forEach((people: any) => {
      let personObject = {
        ['id']: readField('id', people),
        ['name']: readField('name', people),
        ['species']: readField('species', people),
        ['homeworld']: readField('homeworld', people),
        ['__typename']: 'Person',
      };
      merged.push({...personObject});
    });
    return {
      __typename: 'PeopleConnection',
      people: merged,
      pageInfo: {
        endCursor: incoming.pageInfo.endCursor,
        hasNextPage: incoming.pageInfo.hasNextPage,
      },
    };
  },
};

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          allPeople,
        },
      },
    },
  }),
});

const App = () => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  </ApolloProvider>
);

export default App;

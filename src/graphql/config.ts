import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import {allPeople} from './inMemoryCachedQueries';

const httpLink = createHttpLink({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
});

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

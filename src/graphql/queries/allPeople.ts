import {gql} from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
  query allPeople($after: String) {
    allPeople(first: 5, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      people {
        id
        name
        homeworld {
          name
        }
        species {
          name
        }
      }
    }
  }
`;

interface HomeWorld {
  name: string;
}

interface Species {
  name: string;
}

interface IPeople {
  id: string;
  name: string;
  homeworld: HomeWorld;
  species: Species;
}

interface IAllPeople {
  people: [IPeople];
  pageInfo: {
    endCursor: string;
    hasNextPage: boolean;
  };
}

export interface IPeopleResult {
  allPeople: IAllPeople;
}

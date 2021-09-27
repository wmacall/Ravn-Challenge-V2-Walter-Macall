import {gql} from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
  query {
    allPeople {
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
}

export interface IPeopleResult {
  allPeople: IAllPeople;
}
